var jobs = [];

// frida -U  -f   im.token.app -l  tp1.js
function logInf(classs) {
    Java.perform(function () {
        var Modifier = Java.use("java.lang.reflect.Modifier");
        var Field = Java.use("java.lang.reflect.Field");
        var modifiers = classs.getModifiers();
        classs.setAccessible(true);
        if (Modifier.isStatic(modifiers)) {
            // 静态字段
            var value = classs.get(null);
            console.log(classs + " =>" + value)
        } else {
            console.log(classs)
        }
    })


}

function getAllsonClass(classs) {
    console.log('\n')
    console.log("查询到子类  =>" + classs.getName())
    hookClass(String(classs.getName()), undefined, {})
}

var thisclass = null;


//"java.security.MessageDigest"
function hookClass(CLASS, methodName, config) {

    if (config) {
        console.log(config)
        console.log(config.args)
    }


    Java.perform(function () {
        var classStudent = Java.use(CLASS);
        var classs = classStudent.class;

        //获取所有内部类
        var innerClasses = classs.getDeclaredClasses();
        if (innerClasses.length > 0) {
            innerClasses.forEach(getAllsonClass);
        }

        if (config.printFields) {//打印所有变量
            console.log("===========" + classs + "中的所有变量==============")
            //输出所有变量
            classs.getDeclaredFields().forEach(logInf)

        }

        console.log("===========" + classs + "的所有方法==============")
        //输出所有方法,并hook
        classs.getDeclaredMethods().forEach(function (method) {
            // console.log(method)
            var methodsName = method.getName();
            if (methodName) {

                if (methodsName == methodName) {


                    console.error("hook 指定  method \n " + method)
                    hookAllOverloads(CLASS, method, config);
                }

            } else {

                console.log("hook all " + methodsName)

            }


        })
        console.log('\n')

    })
}


function hookAllOverloads(classGloble_, method, config) {

    Java.perform(function () {


        Java.enumerateClassLoadersSync().forEach(function (value, index, array) {
            console.log(value.$className)
        })

        var classGloble = Java.use(classGloble_)

        console.log(classGloble)

        console.error("start hook all overloads " + method)
        let overloads = classGloble[method.getName()].overloads;

        console.error("---- over: " + overloads)

        overloads.forEach(function (ov) {
            console.log(" " + ov)
            ov.implementation = function () {
                console.warn(method)

                var append = "";
                // console.warn("进入" + classGloble.class.getName() + "类的" + method.getName() + "方法")
                for (var j = 0; j < arguments.length; j++) {
                    // console.error("参数" + j + " => " + arguments[j])
                    append += "参数" + j + " => " + arguments[j] + "  ";
                }
                if (arguments.length === 0) {
                    console.log("该函数无参数");
                } else {
                    console.log(append);

                }
                var result = this[method.getName()].apply(this, arguments)
                if (result) {
                    console.error("结果是 => " + result)
                }


                if (config && config.stacks) {
                    console.log("打印stack 。。。")
                    if (config.back) {
                        config.back.onArguments(arguments)
                    }

                }

                return result;
            };


        })

    })


}

function onBefor(classGloble_, method_, arguments_) {


    if (false) {
        // let $new = Java.use("android.text.SpannableStringBuilder").$new(arguments_[0].getText());
        // console.log("onBefor " + $new)
    }

    console.log("onBefor " + classGloble_)
    console.log("onBefor " + method_)

    console.log("onBefor " + arguments_)
}

function onAfter(classGloble_, method_, arguments_, result_) {
    // let $new = Java.use("android.text.SpannableStringBuilder").$new(arguments_[0].getText());
    console.log("onAfter " + result_)
}
//  给 frida 脚本使用
function findAndHookAllMethod(classGloble_, method, config) {

    // console.error("start hook all overloads " + method)
    let overloads = classGloble_[method].overloads;

    // console.error("---- method " + method)
//let ToastUtil = Java.use("com.example.imtoken.ToastUtil");
    overloads.forEach(function (ov) {
        // console.warn("find overload " + ov)
        ov.implementation = function () {
            console.warn(ov)

            var append = "";

            // console.warn("进入" + classGloble.class.getName() + "类的" + method.getName() + "方法")
            for (var j = 0; j < arguments.length; j++) {
                // console.error("参数" + j + " => " + arguments[j])
                append += "参数" + j + " => " + arguments[j] + "  ";
            }
            if (arguments.length === 0) {
                console.log("该函数无参数");
            } else {
                console.log(append);
            }

            if (config) {

            } else {
                onBefor(classGloble_, method, arguments)

            }


            var result = this[method].apply(this, arguments)


            if (config) {

            } else {
                onAfter(classGloble_, method, arguments, result)
            }

            if (result) {
                console.error("结果是 => " + result)
            }


            if (config && config.stacks) {
                console.log("打印stack 。。。")
                if (config.back) {
                    config.back.onArguments(arguments)
                }

            }

            return result;
        };


    })

    // console.error("---- method " + method)

}

// 有一些 方法被无限调用。给他排除掉  防止日志爆炸
function InBlack(methods) {
    if (methods === "hasOverlappingRendering")
        return true;
}


// traceAllMethods('com.example.imtoken.ToastUtil','*',1)
function traceAllMethods(classGloble_, method, config) {

    Java.perform(function () {


        Java.enumerateClassLoadersSync().forEach(function (value, index, array) {
            console.log(value.$className)
        })

        var classGloble = Java.use(classGloble_)

        console.log(classGloble)

        if ((!method || method === "*")) {
            console.log("方法为空。直接hook 所有....")

            var methods = classGloble.class.getDeclaredMethods();
            for (var i = 0; i < methods.length; i++) {
                console.error(methods[i])

                if (!InBlack(methods[i].getName())) {
                    findAndHookAllMethod(classGloble, methods[i].getName(), config)
                } else {

                }
            }
        } else {
            findAndHookAllMethod(classGloble, method, config)

        }
    })


}

// 控制台输入 traceAllMethodsByPatten("com.example") 测试案例
function traceAllMethodsByPatten(patten) {

    var pattenClass = showAllClass(patten)

    pattenClass.forEach(function (cls) {
        console.log("继续走起： " + cls)
        traceAllMethods(cls + "", "*", 1)
    })


}


function showStacks() {
    Java.perform(function () {
        console.log("starck start")
        var Exception = Java.use("java.lang.Exception");
        var ins = Exception.$new("Exception");
        var straces = ins.getStackTrace();
        console.log(straces)
    })


}


function hello(p1) {
    console.log("hell world" + p1)
    var Exception = Java.use("java.lang.Exception");
    console.log(Exception)
    var ins = Exception.$new("Exception");
    var straces = ins.getStackTrace();
    console.log(straces)
}

function showClassLoaders(patten) {

    console.log("print all class now  " + patten)
    Java.enumerateClassLoadersSync().forEach(function (value, index, array) {
        console.log(value)

    })
}


function showAllClass(patten) {

    var martchClass = [];


    Java.enumerateLoadedClassesSync().forEach(function (cls) {
        if (patten) {
            var regex = new RegExp(patten);
            let b = regex.test(cls);
            if (b) {
                console.error(patten + "  " + b + " " + cls)
                martchClass.push(cls)

            } else {
                // console.log("test " + b)
            }

            // let regExpMatchArray = cls.match(patten);
            // console.log(regExpMatchArray)
        } else {
            var userClass = Java.use(cls + "")
            console.log(userClass + "")
        }


    })

    return martchClass;
}


function main() {


    rpc.exports.hook = function (pattenStr, packageName) {
        console.log("search start from package " + packageName + " patten [ " + pattenStr + " ]")
        try {
            // let ReactTextView = Java.use("com.facebook.react.views.text.ReactTextView");
            var config = {
                args: true,
                result: true,
                stacks: true,
                printFields: false,
                back: {
                    onArguments: function (args) {
                        console.log("on back " + args)
                        // showStacks();
                    }
                }
            }
//let Datoken = Java.use("com.tokenbank.Datoken");
            //let ReactTextView = Java.use("com.facebook.react.views.text.ReactTextView");
            hookClass("androidx.fragment.app.Fragment", "onResume", config)
        } catch (e) {
            console.log("没有找到该类" + e)
        }


    }


    rpc.exports.jobs = hello


    rpc.exports.loaders = function (patten) {
        console.log("print all class now  ")
        Java.enumerateClassLoadersSync().forEach(function (value, index, array) {
            console.log(value)
        })
    }

    rpc.exports.class = showClassLoaders


}


setImmediate(main)