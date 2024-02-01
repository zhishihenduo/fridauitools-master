function klog(data) {
    var message = {};
    message["jsname"] = "%customName%";
    message["data"] = data;
    send(message);
}

function klogData(data, key, value) {
    var message = {};
    message["jsname"] = "%customName%";
    message["data"] = data;
    message[key] = value;
    send(message);
}

console.log("罗擦擦  js 里面打印出来的1111")


klog("banana send msg  coming");

Java.perform(function () {

    console.log("执行香蕉脚本")
    let ResourcesFlusher = Java.use("androidx.appcompat.app.ResourcesFlusher");
    ResourcesFlusher["RC4Base"].implementation = function (bArr, str) {
        console.log('RC4Base is called' + ', ' + 'bArr: ' + bArr + ', ' + 'str: ' + str);
        let ret = this.RC4Base(bArr, str);
        console.log('RC4Base ret value is ' + ret);
        return ret;
    };


})