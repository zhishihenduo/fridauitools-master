Java.perform(function () {
// public static native String getClock(Context context, byte[] bArr, int i4);
    console.log("hello rpc")




    let CPU = Java.use("com.yxcorp.gifshow.util.CPU");
    CPU["getClock"].implementation = function (context, bArr, i4) {
        // console.log('getClock is called' + ', ' + 'context: ' + context + ', ' + 'bArr: ' + bArr + ', ' + 'i4: ' + i4);
        // console.log("二进制："+bArr);
        let string = Java.use("java.lang.String").$new(bArr);
        // console.log("二进制转换后："+string);

        let ret = this.getClock(context, bArr, i4);
        // console.log(i4+'加密后数据：' + ret + ',加密前：'+string);
        return ret;
    };


    rpc.exports.getSig = function (p1) {
        let string = Java.use("java.lang.String").$new(p1);


        let a = Java.use("u16.a");
        // console.log("rpc start ")
        // console.log(a.b())
        // console.log(string.getBytes())
        // console.log(string)

        var res = CPU.getClock(a.b(), string.getBytes(), 28);

        console.log(res)
        // return "你好";
        return res;

    }


    let KSecurity = Java.use("com.kuaishou.android.security.KSecurity");
    KSecurity["atlasSign"].implementation = function (pathAndSig) {
        // console.log( 'pathAndSig------------------------------>' + pathAndSig);
        let ret = this.atlasSign(pathAndSig);
        // console.log('atlasSign---------------------------->' + ret);
        return ret;
    };


    rpc.exports.getNSSig = function (pathAndSig){
        let res = KSecurity.atlasSign(pathAndSig);
        console.log("__NS_sig3=======================>"+res);
    }

    let h = Java.use("z66.h");
    h["a"].implementation = function (request, map, map2, str) {
        console.log('a is called' + ', ' + 'request: ' + request + ', ' + 'map: ' + map + ', ' + 'map2: ' + map2 + ', ' + 'str: ' + str);
        let ret = this.a(request, map, map2, str);
        console.log('a ret value is ' + ret);
        return ret;
    };



    let NStokensigUtil = Java.use("qnd.a");
    NStokensigUtil["e"].implementation = function (str) {
        // console.log('e is called' + ', ' + 'str: ' + str);
        let ret = this.e(str);
        // console.log('e ret value is ' + ret);
        return ret;
    };

    rpc.exports.getNStokingSig = function (sigAndSalt){
        let res = NStokensigUtil.e(sigAndSalt);
        console.log("NSTokensig=======================>"+res);
    }


    // let b = Java.use("bdd.b");
    // b["c"].implementation = function () {
    //     console.log('c is called');
    //     let ret = this.c();
    //     console.log('c ret value is ' + ret);
    //     return ret;
    // };

    // let c = Java.use("bdd.c");
    // c["c"].implementation = function (request) {
    //     console.log('c is called' + ', ' + 'request: ' + request);
    //     let ret = this.c(request);
    //     console.log('c ret value is ' + ret);
    //     return ret;
    // };

    // github上Frida-Remote项目
})