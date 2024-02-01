function main() {

    console.log("检测frida脚本注入中")

    const openPtr = Module.getExportByName('libc.so', 'open');

    console.log(openPtr)//0xc6f48780

    const open = new NativeFunction(openPtr, 'int', ['pointer', 'int']);
    console.log("NativeFunction " + open)//NativeFunction 0xc6f48780
    var readPtr = Module.findExportByName("libc.so", "read");
    console.log("readPtr " + readPtr)// readPtr 0xc6f9c2f0

    var read = new NativeFunction(readPtr, 'int', ['int', 'pointer', "int"]);
    console.log("read " + read)//  read 0xc6f9c2f0


    var fakePath = "/data/data/tmp/maps";

    console.log("fakePath " + fakePath)//  read 0xc6f9c2f0


    var file = new File(fakePath, "w");
    console.log("file " + file)//  fakePath /data/data/tmp/maps


    var buffer = Memory.alloc(512);

    console.log("检测frida脚本注入中")

    Interceptor.replace(openPtr, new NativeCallback(function (pathnameptr, flag) {
        var pathname = Memory.readUtf8String(pathnameptr);
        var realFd = open(pathnameptr, flag);
        if (pathname.indexOf("maps") != 0) {
            while (parseInt(read(realFd, buffer, 512)) !== 0) {
                var oneLine = Memory.readCString(buffer);
                if (oneLine.indexOf("tmp") === -1) {
                    file.write(oneLine);
                }
            }
            var filename = Memory.allocUtf8String(fakePath);
            return open(filename, flag);
        }
        var fd = open(pathnameptr, flag);
        return fd;
    }, 'int', ['pointer', 'int']));



}

setImmediate(main)