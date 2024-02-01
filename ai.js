Java.perform(function () {
    console.log("ai  0000  打印");


    Java.use("com.example.injectapp.test2")
        .main.overload('[Ljava.lang.String;')
        .implementation
        = function (args) {
        console.log(args)
        args = ['caca'];
        this.main(args);
    }

})


//frida -U -F  com.simplecut.tool -l .\ai.js