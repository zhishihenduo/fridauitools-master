// frida N  -H 10.10.10.36:65000  --token vg4oqktb8w9nyul5  -F  -l  tp.js
//frida -H 10.10.10.51:65000 --token b6uv2h9158lzmxci -f  -l im.token.app ../itoken.js
//frida -H 10.10.10.36:65000 --token b6uv2h9158lzmxci -f   im.token.app -l  ../tp.js
//objection -N -h 10.10.10.36 -p 65000   -f   im.token.app -l  ../itoken.js
//objection -N -h 10.10.10.36  -g   im.token.app  explore
//objection  -g   im.token.app  explore
//frida -UF -l tp.js
// adb shell su -c '/data/local/tmp/frida-server-16.1.8-android-arm64'

// frida -U  -f   im.token.app -l  tp.js
Java.perform(function () {
    console.log("hello world   666")
//let Handler = Java.use("com.sun.jna.Library$Handler");
// Handler["invoke"].implementation = function (obj, method, objArr) {
//     console.log(`Handler.invoke is called: obj=${obj}, method=${method}, objArr=${objArr}`);
//     let result = this["invoke"](obj, method, objArr);
//     console.log(`Handler.invoke result=${result}`);
//     return result;
// };

    rpc.exports.search('2121', 'cccc')
    rpc.exports.search('3443', 'c545ccc')
    // let FunctionInfo = Java.use("com.sun.jna.Library$Handler$FunctionInfo");
    // FunctionInfo["$init"].overload('java.lang.reflect.InvocationHandler', 'com.sun.jna.Function', '[Ljava.lang.Class;', 'boolean', 'java.util.Map').implementation = function (invocationHandler, function1, clsArr, z2, map) {
    //     console.log(`FunctionInfo.$init is called: invocationHandler=${invocationHandler}, function=${function1}, clsArr=${clsArr}, z2=${z2}, map=${map}`);
    //     this["$init"](invocationHandler, function1, clsArr, z2, map);
    // };
//     let TcxModule = Java.use("org.consenlabs.imtoken.nativemodule.tcx.TcxModule");
//     let WalletModule = Java.use("org.consenlabs.imtoken.nativemodule.walletapi.WalletModule");
//let TcxAction = Java.use("org.consenlabs.imtoken.nativemodule.tcx.Api$TcxAction");
// TcxAction["parseFrom"].overload('[B').implementation = function (bArr) {
//     console.log(`TcxAction.parseFrom is called: bArr=${bArr}`);
//     let result = this["parseFrom"](bArr);
//     console.log(`TcxAction.parseFrom result=${result}`);
//     return result;
// };
    //keystore_common_existse
    // api.KeystoreCommonExistsParamD@8f4b43a49
    // 0d1ccf58c3307f8032f1f1f7b97531903fa3c92f346469a5a46e898,
    // let ObjectMapper = Java.use("com.fasterxml.jackson.databind.ObjectMapper");
    // let TokenV1V3KeystoreImporter = Java.use("org.consenlabs.tokencore.wallet.keystore.TokenV1V3KeystoreImporter");
    // let Keystore = Java.use("org.consenlabs.tokencore.wallet.keystore.Keystore");
    //
    // let V3Keystore = Java.use("org.consenlabs.tokencore.wallet.keystore.V3Keystore");
    //
    // let ChainType = Java.use("org.consenlabs.tokencore.wallet.model.ChainType");
    //
    // let Crypto = Java.use("org.consenlabs.tokencore.foundation.crypto.Crypto");
    // let WalletModuleImpl = Java.use("org.consenlabs.imtoken.nativemodule.walletapi.WalletModuleImpl");


    let TextView = Java.use("android.widget.TextView");
    //
    //
    // Java.choose("android.view.View", {
    //     onMatch: function (txtview) {
    //         console.log("tv: " + txtview)
    //     },
    //     onComplete: function () {
    //         console.error("end ")
    //     }
    // })
    let ReactTextView = Java.use("com.facebook.react.views.text.ReactTextView");

    console.log(ReactTextView)
    traceAll(ReactTextView)

    // setText(com.facebook.react.views.text.ReactTextUpdate)


    console.log("hello world" + TextView)
    TextView["setText"].overload('java.lang.CharSequence', 'android.widget.TextView$BufferType').implementation = function (txt) {

        this["setText"](txt);


        if ((txt + "") === "导入 TRX 钱包") {
            console.error("txt: " + txt)
            // var WebView = Java.use("android.webkit.WebView");
            // WebView.setWebContentsDebuggingEnabled(true);
            //

        } else {
            console.log("txt: " + txt)
        }


    }


    // let WritableNativeMap = Java.use("com.facebook.react.bridge.WritableNativeMap");
    // WritableNativeMap["putString"].implementation = function (str, str2) {
    //     this["putString"](str, str2);
    //
    //     console.log(this);
    //
    //
    // };
    //
    // WritableNativeMap["mergeNativeMap"].implementation = function (readableNativeMap) {
    //     console.log(`WritableNativeMap.mergeNativeMap is called: readableNativeMap=${readableNativeMap}`);
    //     this["mergeNativeMap"](readableNativeMap);
    //     console.log(this);
    //
    //
    // };

    // let Handler = Java.use("com.sun.jna.Library$Handler");
    // Handler["invoke"].implementation = function (obj, method, objArr) {
    //     console.log(`Handler.invoke is called: obj=${obj}, method=${method}, objArr=${objArr}`);
    //     let result = this["invoke"](obj, method, objArr);
    //     console.log(`Handler.invoke result=${result}`);
    //     return result;
    // };


    // traceAll(WalletModuleImpl)
    // traceAll(TokenV1V3KeystoreImporter)
    // traceAll(V3Keystore)
    // traceAll(ChainType)
    // traceAll(Keystore)
    // traceAll(Crypto)

    // let Wallet = Java.use("org.consenlabs.tokencore.wallet.Wallet");
    // Wallet["getKeystore"].implementation = function () {
    //     let result = this["getKeystore"]();
    //     console.error(`Wallet.getKeystore result=${tojson(result)}`);
    //     return result;
    // };

    // let WalletManager = Java.use("org.consenlabs.tokencore.wallet.WalletManager");

    // traceAll(WalletManager)
    // traceAll(Wallet)
    //let WalletManager = Java.use("org.consenlabs.tokencore.wallet.WalletManager");

    // org.consenlabs.tokencore.wallet.Wallet
    // let V3MnemonicKeystore = Java.use("org.consenlabs.tokencore.wallet.keystore.V3MnemonicKeystore");
    // WalletManager["findWalletByPrivateKey"].implementation = function (str, str2, str3, str4) {
    //     console.log(`WalletManager.findWalletByPrivateKey is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}`);
    //     let result = this["findWalletByPrivateKey"](str, str2, str3, str4);
    //     console.log(`WalletManager.findWalletByPrivateKey result=${result}`);
    //     return result;
    // };

    // WalletManager["exportKeystore"].implementation = function (str, str2) {
    //     console.log(`WalletManager.exportKeystore is called: str=${str}, str2=${str2}`);
    //     let result = this["exportKeystore"](str, str2);
    //     console.log(`WalletManager.exportKeystore result=${result}`);
    //     return result;
    // };
    // Wallet["exportKeystore"].implementation = function (str) {
    //     console.log(`Wallet.exportKeystore is called: str=${str}`);
    //     let result = this["exportKeystore"](str);
    //     console.log(`Wallet.exportKeystore result=${result}`);
    //     return result;
    // };

    // WalletManager["exportPrivateKeys"].implementation = function (str, str2) {
    //     console.log(`WalletManager.exportPrivateKeys is called: str=${str}, str2=${str2}`);
    //     let result = this["exportPrivateKeys"](str, str2);
    //     console.log(`WalletManager.exportPrivateKeys result=${result}`);
    //     return result;
    // };
    // abb4dd80e564a518b60aa1b4ccfc916af66e9d4694056c8d02d822d0ef18098c
    function traceAll(ToastUtil) {
        // 脚本文件名：trace_toastutil.js

// 导入Frida
//         var ToastUtil = Java.use("com.example.imtoken.ToastUtil");

// 获取类的所有方法
        var methods = ToastUtil.class.getDeclaredMethods();

// 遍历所有方法
        for (var i = 0; i < methods.length; i++) {
            var method = methods[i];

            // 打印方法名
            // console.log("Tracing method: " + method.getName());

            // 获取方法的参数类型
            var parameterTypes = method.getParameterTypes();

            // 构造方法签名
            var signature = "";
            for (var j = 0; j < parameterTypes.length; j++) {
                signature += parameterTypes[j].getName();
            }

            // console.log("sin " + signature)


            console.error("over " + ToastUtil[method.getName()].overloads)
            // 使用Frida的Method Overload Resolution API来跟踪方法
            var loads = ToastUtil[method.getName()].overloads;
            loads.forEach(function (eachOver) {
                // console.log("each : " + eachOver)

                eachOver.implementation = function () {


                    // 设置方法的实现
                    // 方法被调用时打印信息
                    console.log("    Method called: " + method.getName());

                    // 打印方法参数
                    for (var j = 0; j < arguments.length; j++) {
                        console.log("      Arg[" + j + "]: " + arguments[j]);
                    }
                    console.log("apply : " + this)

                    // showStacks();

                    // 调用原始方法
                    var result = this[method.getName()].apply(this, arguments);

                    // 打印方法返回值
                    console.log("    Result: " + result);

                    // 返回方法的原始结果
                    return result;


                }

            })


        }

    }


    function tojson(obj) {
        let Gson = Java.use("com.google.gson.Gson");
        return Gson.$new().toJson(obj);
    }

    function showStacks() {
        var Exception = Java.use("java.lang.Exception");
        var ins = Exception.$new("Exception");
        var straces = ins.getStackTrace();

        console.log(straces)

    }


});


