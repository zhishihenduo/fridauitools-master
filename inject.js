Java.perform(function () {

    console.log("注入成")

    logi("抖音抓包pass33333454545   篡改ssl")

    let InterfaceC36625g = Java.use("com.ss.android.ugc.aweme.userservice.api.g");
    InterfaceC36625g["LIZ"].overload('java.lang.String').implementation = function (str) {
        console.log(`212InterfaceC36625g.LIZ is called: str=${str}`);
        let result = this["LIZ"](str);
        console.log(`InterfaceC36625g.LIZ result=${result}`);
        return result;
    };


    // common.log("抖音抓包pass")
    // hookAllMethods('org.chromium.CronetClient', 'tryCreateCronetEngine', 1, null)


    // hookAllMethods('com.bytedance.librarian.Librarian', 'LIZ', 1, null)

    // hookMethod('com.bytedance.librarian.Librarian', 'LIZ', ['java.lang.String'], 4, "sscronet", 0, "sscronet")
    var isSucceed = false;

    // common.hookAllMethods('com.bytedance.librarian.Librarian', 'LIZ', function (param) {
    //     if (param.args[0] == 'sscronet') {
    //         param.args["sscronet__"]
    //         logi("拦截打印0：" + param.args[0])
    //         // param.setResult(null);
    //     }
    // }, function (param) {
    //     logi("拦截打印1：" + param.args[0])
    // }, function (param) {
    //     if (param.args[0] == 'sscronet__' || param.args[0] == 'sscronet') {
    //         logi("拦截打印  sscronet 拦截")
    //         // isSucceed = true;
    //         common.thisMethod(param);
    //     } else {
    //         common.thisMethod(param);
    //     }
    //
    // });

    let Librarian = Java.use("com.bytedance.librarian.Librarian");
    Librarian["LIZ"].overload('java.lang.String').implementation = function (param) {
        // this["LIZIZ"]();
        // if (false) {
        if (param == 'sscronet__' || param == 'sscronet') {
            logi("拦截打印  sscronet 拦截")
            // isSucceed = true;
            // common.thisMethod(param);
            // common.thisMethod(param);
            // this["LIZ"](param);
            loge(`TENativeLibsLoader.LIZIZ is called 上` + param);

        } else {
            // common.thisMethod(param);
            this["LIZ"](param);
            logi(`TENativeLibsLoader.LIZIZ is called 下` + param);


        }

    };


    let TENativeLibsLoader = Java.use("com.ss.android.ttve.nativePort.TENativeLibsLoader");
    TENativeLibsLoader["LJI"].implementation = function () {
        logi(`TENativeLibsLoader.LJI is called`);
        let result = this["LJI"]();
        logi(`TENativeLibsLoader.LJI result=${result}`);
        return result;
    };

    let VERuntime = Java.use("com.ss.android.vesdk.runtime.VERuntime");

    VERuntime["isArm64"].implementation = function () {
        return true;
    };

// use.$init.overload(["java.lang.String"]).implementation = function (pathName) {
//  return this.$init('/data/user/0/com.ss.android.ugc.aweme/app_librarian/24.1.0.6561023398/libsscronet_.so')
//     let createNewFile = Java.use("java.io.File");
//     createNewFile['createNewFile'].$init.overload("java.lang.String").implementation = function (pat) {
//         console.log("打印文件生成： " + pat)
//         this['createNewFile'];
//     }
    //拦截思普报文


    let SsResponse = Java.use("com.bytedance.retrofit2.SsResponse");

    SsResponse['isSuccessful'].implementation = function () {


        try {
            let TestInject = Java.use("com.example.injectapp.PineHook");
            if (this) {
                console.log(TestInject.ssresponseInteceptor(this))
            }

            // console.log(this)
            // console.log(TestInject)
        } catch (e) {
            console.error(e)

        }


        // TestInject.ssresponseInteceptor(this);

        if (false) {

            // if (this.raw().getUrl().indexOf("/wallet_api/get_asset_detai") != -1) {

            printUrl(this);


            if (this.raw().getUrl().indexOf("/aweme/v1/aweme/post/") != -1) {
                console.log("\n  start-------------------> 进来了\n" + this.raw().getUrl())

                console.error("\n  body-className-----> " + this.body().$className + "<----- ")

                if (this.body().$className == 'java.lang.String') {
                    console.error(" ****************** 这个类是个字符串。。。 ")
                    try {
                        console.error("位置：" + (this.body() + "").indexOf("6534545455457"))

                        // var bodyRes = (this.getClass().getDeclaredField("body").get(this) + "");
                        // var replaceRes = (bodyRes.replace("65345", "111111111")) + "";
                        // console.log("替换后的字符串： ")

                        //修改final
                        // var theField = this.getClass().getDeclaredField("body");
                        // theField.setAccessible(true);


                        // var modifiersField = theField.getClass().getDeclaredFields();

                        // console.log("theField " + theField)


                        // modifiersField.setAccessible(true);

                        // console.log("修改finial 属性中。。true。"+modifiersField)

                        // modifiersField.setInt(theField, theField.getModifiers() & ~java.lang.reflect.Modifier.FINAL);


                        //     (this.getClass().getDeclaredField("body").set(this, Java.use("java.lang.String").$new(replaceRes)));
                        // console.error("位置：body -》" + (this.getClass().getDeclaredField("body").get(this) + ""))
                        // console.error("位置：body -》" + (this.$class.getDeclaredField("body")+""))


                    } catch (e) {
                        console.error("位置err：" + e)

                    }

                    console.error("  ****************** 这个类是个字符串。。。 ")
                }

            }


            replaceTypedByteArray(this);

            return this['isSuccessful']();
        } else {
            return this['isSuccessful']();
        }
    }
    //
    // common.hookMethod('X.IfC', 'LJIJ', [],
    //     function (param) {
    //         param.setResult(isSucceed);
    //     }
    // );


    // common.log("抖音抓包pass33333454545   注入成功。。。。。")

})


function printUrl(implementation) {
    console.log("\n  start-------------------> 进来了\n" + implementation.raw().getUrl())
    console.error("\n  body-className-----> " + implementation.body().$className + "<----- ")
    if (implementation.body().$className == 'java.lang.String') {
        console.error(" ****************** 这个类是个字符串。。。 ")
        try {
            console.error("位置：" + (implementation.body() + ""))
        } catch (e) {
            console.error("位置err：" + e)
        }
        console.error("  ****************** 这个类是个字符串。。。 ")
    } else if (implementation.body().$className == 'com.bytedance.retrofit2.mime.TypedByteArray') {
        printTypeByteArray(this)
    }

}


function replaceTypedByteArray(thisObj) {
    if (thisObj.raw().getUrl().indexOf("/wallet_api/get_asset_detai") != -1) {
        console.log("\n  start-------------------> 进来了\n" + thisObj.raw().getUrl())
        console.error("\n  body-className-----> " + thisObj.body().$className + "<----- ")
        console.log("进入总资产界面。。")

        try {

            var strClass = Java.use("java.lang.String");
            // var lenghtByte = thisObj.raw().getBody().in().available();
            // console.log("isSuccessful 进来了" + lenghtByte)

            // console.log("isSuccessful body" + thisObj.body().$className)
            var byteField = thisObj.body().getClass().getDeclaredField("bytes");
            var bodybyte = byteField.get(thisObj.body());
            console.log("isSuccessful getBytes" + bodybyte)
            console.log("延迟中...")

            Thread.sleep(1)
            console.log("延迟中..2000   了.")
            var newBytes = strClass.$new(Java.array("byte", bodybyte));

            var newReplaceResult = newBytes.replaceAll("112501.00", "5565669996");

            var bytenew = strClass.$new(newReplaceResult).getBytes("utf-8");

            console.log("转成字符串： bytenew " + bytenew)
            // console.log("转成字符串：1 " + newReplaceResult)
            byteField.set(thisObj.body(), bytenew);
            console.log("  新字符串 集合设置成功。。。 ")
            console.log("isSuccessful 进来了" + thisObj.raw().getBody().mimeType())
        } catch (e) {
            console.error("isSuccessful 进来了 但是读取失败了。" + e)

        }
        console.log("isSuccessful 进来了" + thisObj.body())


    }

}

function printTypeByteArray(thisObj) {
    var strClass = Java.use("java.lang.String");

    try {
        console.log(" printTypeByteArray \n " + thisObj.body())
    } catch (e) {
        console.error(" printTypeByteArray 居然报错了。。 \n " + thisObj)

    }
    // var byteField = thisObj.body().getClass().getDeclaredField("bytes");
    // var bodybyte = byteField.get(thisObj.body());
    // console.log("isSuccessful getBytes" + bodybyte)
    // console.log(" " + strClass.$new(Java.array("byte", bodybyte)))
}


function logi(msg) {
    console.log(msg)
    // common.callStaticMethod("android.util.Log", "i", ["JsHook-Bridge PineHook", msg]);
}

function loge(msg) {
    console.error(msg)
    // common.callStaticMethod("android.util.Log", "i", ["JsHook-Bridge PineHook", msg]);
}

function toJson(body) {
    var Gson = Java.use("com.google.gson.Gson");
    var toJson = Gson.$new();
    console.log(toJson.toJson(body))
    return "";
}

//启动命令
//frida -U -F -f com.ss.android.ugc.aweme -l .\inject.js

// frida -U -F -f com.ss.android.ugc.aweme -l .\inject.js

//破解注入so 流批
//frida -U   Gadget -l .\inject.js
