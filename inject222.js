Java.perform(function () {

    console.log("注入成233")
    let AccountProxyService = Java.use("com.ss.android.ugc.aweme.account.AccountProxyService");
    var ser = AccountProxyService.userService();
    console.log(toJson(ser.getCurUser().shortId.value))


    // let InterfaceC36625g = Java.use("com.ss.android.ugc.aweme.userservice.api.g");
    // InterfaceC36625g["LIZ"].overload('java.lang.String').implementation = function (str) {
    //     console.log(`212InterfaceC36625g.LIZ is called: str=${str}`);
    //     let result = this["LIZ"](str);
    //     console.log(`InterfaceC36625g.LIZ result=${result}`);
    //     return result;
    // };

        function toJson(body) {
            var Gson = Java.use("com.google.gson.Gson");
            var toJson = Gson.$new();
            console.log(toJson.toJson(body))
            return "";
        }

}


)