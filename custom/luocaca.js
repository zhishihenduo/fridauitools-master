// Frida.include("kill.js");
const otherScript = require('./kill.js');
Java.perform(function () {

    function getStack() {
        return Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new());
    }

    function logi(msg) {

        Java.use("android.util.Log").i("JsHook-Bridge", msg);
    }

    function getFiledValues(obj, fieldName) {

        var fi = obj.getClass().getDeclaredField(fieldName);
        fi.setAccessible(true);

        if (fi.get(obj)) {
            var refGEt = fi.get(obj);
            var res = Java.cast(refGEt, Java.use(refGEt.$className));
            return res;
        } else {
            return fi.get(obj);
        }

    }

    function superCust(obj) {
        return Java.cast(obj, Java.use(obj.$className));

    }

    function sayCaca() {
        console.log("罗擦擦  js 5656")

//         onMatch: (instance: Wrapper) => void | EnumerateAction;


        // var MainActivity = Java.use("com.ss.android.ugc.aweme.main.MainActivity");
        // console.log(MainActivity)
        //
        // MainActivity["onResume"].implementation = function () {
        //     console.log(`MainActivity.onResume is called`);
        //     this["onResume"]();
        //
        //     console.log(this.getCurFragment().getClass().getSimpleName());
        //
        //
        // };


        let C77246EXc = Java.use("X.EXc");
        C77246EXc["LIZ"].overload('com.ss.android.ugc.aweme.profile.model.User').implementation = function (user) {
            // console.log(`C77246EXc.LIZ is called: user=\n${toJsonPretty(user)}`);

            console.log("用户信息变更。。。")
            user.followingCount.value = 1145454111;
            user.totalFavorited.value = 11445111;
            user.followerCount.value = 11445111;
            user.signature.value = "这是6666。。。";
            user.nickname.value = "中国有嘻哈444佬。。。。。";
            user.uniqueId.value = "抖音号 48545";
            console.log("user.followingCount :" + user.followingCount.value)
            console.log("user.total_favorited :" + user.totalFavorited.value)
            console.log("user.total_favorited :" + user.followerCount.value)
            console.log("user.total_favorited :" + user.signature.value)
            console.log("user.total_favorited :" + user.nickname.value)
            console.log("user.total_favorited :" + user.uniqueId.value)


            console.log("当前fragment:" + this.LJI.value)


            this["LIZ"](user);
        };


        let Adapter = Java.use("androidx.recyclerview.widget.RecyclerView$Adapter");


        Adapter.notifyDataSetChanged.implementation = function () {

            console.log("适配器刷新啦》。" + this.$className)
            // console.log("适配器刷新啦》。" + getStack())
            this.notifyDataSetChanged();

        }

        var FeedItemList = Java.use("com.ss.android.ugc.aweme.feed.model.FeedItemList");
        Java.use("com.bytedance.common.utility.collection.WeakHandler").handleMessage.implementation = function (msg) {

            Java.use("com.ss.android.ttve.nativePort.TELogcat")
                .Log.implementation = function () {
                //dont  doing anny
                console.log("TELogcat " + arguments)

            }


            this.handleMessage(msg);

            console.log(msg)

            // console.log(msg.obj.value.class)
            if (msg.obj.value) {

                // console.log("handleMessage》 class is ___> " + msg.obj.value.getClass().getName())
                // console.log("handleMessage》 class is ___> " + msg.obj.value.class)
                // console.log("handleMessage》FeedItemList.class  class is ___> " + FeedItemList.$new().getClass().classLoader.value)
                // console.log("handleMessage》FeedItemList.class  class is ___> " + msg.obj.value.getClass().classLoader.value)


                if ((msg.obj.value.$className == FeedItemList.$className)) {
                    console.log("是否 FeedItemList ： " + true)
                    // console.log("handleMessage》items arguments " + arguments[0].obj.value)
                    try {

                        var re = getFiledValues(arguments[0].obj.value, "items");

                        // console.log("re: " + re)

                        // console.log(re.$className)
                        // re = Java.cast(re, Java.use(re.$className))
                        console.log(re.getClass())
                        // logi(toJson(re.get(0)) + "")
                        // console.log(re.get(0))


                        var si = re.size();
                        for (let i = 0; i < si; i++) {
                            superCust(re.get(i)).statistics.value.playCount.value = 111365048 + 1870 * (si - i) * 8
                            superCust(re.get(i)).statistics.value.diggCount.value = 111365048 + 1870 * (si - i) * 8
                            console.log(superCust(re.get(i)).statistics.value.playCount.value)
                            console.log(superCust(re.get(i)).statistics.value.diggCount.value)

                            // console.log(superCust(re.get(i)).statistics.value.playCount.value)
                        }
                        logi(toJson(superCust(re.get(0))))


                        // console.log(getFiledValues(re.get(0)), "statistics")


                        // logi(re + "")
                        // let use = Java.use("java.util.List");
                        // let listClass = Java.cast(re, use);
                        // logi(toJson(listClass.get(0)))
                    } catch (e) {
                        console.log(e)

                    }
                }


            }

            // console.log("开始啦-----------------------------------------")
        }

        console.log(Adapter)

        //适配器刷新啦》。java.lang.Throwable
        //         at androidx.recyclerview.widget.RecyclerView$Adapter.notifyDataSetChanged(Native Method)
        //         at X.XRO.LJJJI(SourceFile:196635)
        //         at X.XRO.LJIIIIZZ(SourceFile:17039393)
        //         at X.XNM.LIZIZ(SourceFile:17170477)
        //         at X.XNL.LJ(SourceFile:17105013)
        //         at X.XNL.LIZLLL(SourceFile:17104960)
        //         at com.ss.android.ugc.aweme.profile.panda.PandaProfileMyPager.LJIIIZ(SourceFile:524905)
        //         at com.ss.android.ugc.aweme.profile.panda.PandaProfileMyPager$loadFullUser$2.invoke(SourceFile:196634)
        //         at X.EaL.run(Unknown Source:25)
        //         at android.os.Handler.handleCallback(Handler.java:938)
        //         at android.os.Handler.dispatchMessage(Handler.java:99)
        //         at android.os.Looper.loopOnce(Looper.java:210)
        //         at android.os.Looper.loop(Looper.java:299)
        //         at android.app.ActivityThread.main(ActivityThread.java:8205)
        //         at java.lang.reflect.Method.invoke(Native Method)
        //         at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:556)
        //         at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1045)

//         onComplete: () => void;
//         Java.choose("com.ss.android.ugc.aweme.main.MainActivity", {
//                 onMatch: (instance) => {
//                     console.log("匹配到。。" + instance)
//                 },
//
//                 onComplete: () => {
//                     console.log("匹配到。。111")
//
//                 }
//             },
//         );
        // MainActivity["getCurFragment"].implementation = function () {
        //     console.log(`MainActivity.getCurFragment is called`);
        //     let result = this["getCurFragment"]();
        //     console.log(`MainActivity.getCurFragment result=${result}`);
        //     return result;
        // };


    }

    function testInceptor() {
        let Activity = Java.use("android.app.Activity");

        Activity.onResume.implementation = function () {
            console.log("onResume" + this)
            let onResume = this.onResume();


            return onResume;
        }


    }


    // testInceptor();


    function hookSucceed() {

        // let RealInterceptorChain = Java.use("com.bytedance.retrofit2.intercept.RealInterceptorChain");


        console.log("RealInterceptorChain : ")

        // let SsResponse = Java.use("com.bytedance.retrofit2.SsResponse");
        // SsResponse["success"].implementation = function (t, response) {
        //
        //     let result = this["success"](t, response);
        //     console.log(`SsResponse.success result=${result}`);
        //
        //     var Gson = Java.use("com.google.gson.Gson");
        //     var toJson = Gson.$new();
        //
        //     // console.log(toJson.toJson(result))
        //
        //let Interceptor = Java.use("com.bytedance.retrofit2.intercept.Interceptor");
        // Interceptor["intercept"].implementation = function (chain) {
        //     console.log(`Interceptor.intercept is called: chain=${chain}`);
        //     let result = this["intercept"](chain);
        //     console.log(`Interceptor.intercept result=${result}`);
        //     return result;
        // };
        //     return result;
        // };
        let Task = Java.use("bolts.Task");
        Task["getResult"].implementation = function () {

            let result = this["getResult"]();
            var Gson = Java.use("com.google.gson.Gson");
            // var toJson = Gson.$new();
            // console.error("开始")
            // console.log(toJson.toJson(result))
            // console.error("结束")

            return result;
        };


        let CommentApi = Java.use("com.ss.android.ugc.aweme.comment.api.CommentApi");
        CommentApi["a"].overload('java.lang.String', 'long', 'int', 'java.lang.String', 'int', 'int', 'java.lang.Long', 'int', 'java.lang.String', 'int', 'int', 'java.lang.Integer', 'java.lang.Integer', 'int', 'java.lang.String', 'int').implementation = function (str, j, i, str2, i2, i3, l, i4, str3, i5, i6, num, num2, i7, str4, i8) {
            console.log(`CommentApi.getDyCommit is called: str=${str}, j=${j}, i=${i}, str2=${str2}, i2=${i2}, i3=${i3}, l=${l}, i4=${i4}, str3=${str3}, i5=${i5}, i6=${i6}, num=${num}, num2=${num2}, i7=${i7}, str4=${str4}, i8=${i8}`);
            let result = this["a"](str, j, i, str2, i2, i3, l, i4, str3, i5, i6, num, num2, i7, str4, i8);
            console.log(`CommentApi.getDyCommit result=${result}`);
            return result;
        };
    }


    // hookSucceed();


    function isEnableQuic() {
        let C87836IfC = Java.use("X.IfC");
        C87836IfC["LJIIJ"].implementation = function () {
            console.log(`isEnableQuic`);
            let result = this["LJIIJ"]();
            console.log(`isEnableQuic result=${result}`);
            return false;
        };
    }

    function isHttp2() {
        let C87836IfC = Java.use("X.IfC");
        C87836IfC["LJIIJJI"].implementation = function () {
            console.log(`isEnableHttp2`);
            let result = this["LJIIJJI"]();
            console.log(`isEnableHttp2 result=${result}`);
            return false;
        };
    }

    function tryCreateCronetEngine() {
        let CronetClient = Java.use("org.chromium.CronetClient");
        CronetClient["tryCreateCronetEngine"].implementation = function (context, z, z2, z3, z4, str, executor, z5) {
            console.log(`CronetClient.tryCreateCronetEngine is called: context=${context}, z=${z}, z2=${z2}, z3=${z3}, z4=${z4}, str=${str}, executor=${executor}, z5=${z5}`);
            // this["tryCreateCronetEngine"](context, z, z2, z3, z4, str, executor, z5);
        };
    }

    // tryCreateCronetEngine();

    // isEnableQuic()
    // isHttp2()

    function needCustomLoadLibrary() {
        let C87836IfC = Java.use("X.IfC");
        C87836IfC["LJIJ"].implementation = function () {
            console.log(`needCustomLoadLibrary  called`);
            let result = this["LJIJ"]();
            console.log(`needCustomLoadLibrary result=${result}`);
            return false;
        };
    }

    function getCronetSoPath() {
        let C87836IfC = Java.use("X.IfC");
        C87836IfC["LJIJI"].implementation = function () {
            console.log(`getCronetSoPath is called`);
            let result = this["LJIJI"]();
            console.log(`getCronetSoPath result=${result}`);
            return result;
        };
    }

    // getCronetSoPath();

    // needCustomLoadLibrary();

    function findConnetClass() {
        let C172887kXt = Java.use("X.kXt");
        C172887kXt["LIZ"].overload('java.lang.String').implementation = function (str) {
            if (str == 'org.chromium.CronetClient') {
                console.error(`findConnetClass str=${str}`);

                return null;
            } else {
                console.log(`findConnetClass str=${str}`);
                let result = this["LIZ"](str);
                return result;
            }

        };
    }

    // findConnetClass();

    function killssltiktok() {
        let I2G = Java.use("X.I2G");
        I2G["run"].implementation = function () {
            console.log(`I2G.run  禁止run conet 初始化`);
            // this["run"]();
        };


        let Librarian = Java.use("com.bytedance.librarian.Librarian");
        Librarian["LIZ"].overload('java.lang.String').implementation = function (str) {
            // console.log(`Librarian.LIZ is called: str=${str}`);

            if (str == 'sscronet') {
                str += "laji";
            }

            this["LIZ"](str);
        };

        // let System = Java.use("java.lang.System");
        // System["loadLibrary"].overload('java.lang.String').implementation = function (str) {
        //     try {
        //         console.log(str)
        //
        //         let result = this["loadLibrary"](str);
        //         return result;
        //
        //     } catch (e) {
        //     }
        //
        // };
        // System["load"].overload('java.lang.String').implementation = function (str) {
        //
        //     try {
        //         console.log(str)
        //         let result = this["load"](str);
        //         return result;
        //
        //     } catch (e) {
        //     }
        //
        //
        // };


    }

    // needCustomLoadLibrary();

    // killssltiktok()

    function toJson(obj) {
        var Gson = Java.use("com.google.gson.GsonBuilder");

        var toJson = Gson.$new().create();
        return toJson.toJson(obj)
    }

    function toJsonPretty(obj) {

        if (!obj) {
            return "is null obj"
        }
        var Gson = Java.use("com.google.gson.GsonBuilder");
        var toJson = Gson.$new().setPrettyPrinting().disableHtmlEscaping().create();
        return toJson.toJson(obj)
    }

    function 查找tt() {
        let NetworkParams = Java.use("com.bytedance.frameworks.baselib.network.http.NetworkParams");
        NetworkParams["tryAddSecurityFactor"].implementation = function (str, map) {
            console.error(`url：\n ${str}, map=${toJson(map)}`);
            let result = this["tryAddSecurityFactor"](str, map);

            console.log("开始啦-----------------------------------------")
            console.log(` ${toJson(result)}`);
            console.log("开始啦-----------------------------------------")

            return result;
        };
    }

    // 查找tt();


    // let use = Java.use("java.io.File");
    // use.$init.overload(["java.lang.String"]).implementation = function (pathName) {
    //
    //     if (pathName == ('/data/user/0/com.ss.android.ugc.aweme/app_librarian/24.1.0.6561023398/libsscronet.so')) {
    //         console.log("拦截到  文件穿件：" + pathName)
    //         console.log(getStack())
    //         return this.$init('/data/user/0/com.ss.android.ugc.aweme/app_librarian/24.1.0.6561023398/libsscronet_.so')
    //     }
    //     return this.$init(pathName)
    // }
    // com.ss.android.ugc.aweme.net.preload.TTnetSoPreloadTask.LIZ
    // Java.use("com.ss.android.ugc.aweme.net.preload.TTnetSoPreloadTask")
    //     .run.implementation = function (contenx) {
    //
    //     console.log("Context run 被加载了。。。" + contenx)
    //
    // }
    // Java.use("com.ss.android.ugc.aweme.net.preload.TTnetSoPreloadTask")
    //     .LIZ.implementation = function () {
    //
    //     console.log("Context run LIZ  直接拦截没用的方法。。" + arguments.length)
    //
    // }
    Java.use("java.lang.System").load.implementation = function (fileName) {

        if (fileName == '/data/user/0/com.ss.android.ugc.aweme/app_librarian/24.1.0.6561023398/libsscronet.so') {
            console.log("拦截加载 " + fileName)
            return this.load("/data/user/0/com.ss.android.ugc.aweme/app_librarian/24.1.0.6561023398/22.so");
        } else {
            console.log("正常逻辑..")
            return this.load(fileName);

        }
    }

    sayCaca();


    console.log("43434")

    // var TTNetWrapTask = Java.use("com.ss.android.ugc.aweme.legoImp.task.allProcessTask.TTNetWrapTask");
    //
    // console.log(TTNetWrapTask)
    //
    // TTNetWrapTask.run.overload("android.content.Context").implementation = function (content) {
    //     console.log("禁止  TTNetWrapTask 初始化。。。" + content)
    // }


    //执行发包
})

