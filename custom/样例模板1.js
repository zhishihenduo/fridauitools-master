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

Java.perform(function () {

    console.log(Java.available)


})

// hootSystemTime();
hookQrContext();
hookLoginClick();
hookLoginClick();

hooNative();


function hookLoginClick() {
    let LoginFragment = Java.use("cn.rongcloud.im.ui.fragment.LoginFragment");
    LoginFragment["registerAndLogin"].implementation = function (region, phone, code) {

        klogData("入参：1 " + region);
        klogData("入参：2 " + phone);
        klogData("入参：3 " + code);
        let ret = this.registerAndLogin(region, "34", "123456");

        return ret;
    };
}


function hookLoginClick() {
    let _AdvanceMsgListener = Java.use("io.openim.android.sdk.listener._AdvanceMsgListener");

    _AdvanceMsgListener["onRecvNewMessage"].implementation = function (s) {
        klog("收到新消息： " + s);
        let ret = this.onRecvNewMessage(s);

        return ret;
    };
}


function hootSystemTime() {
    let System = Java.use("java.lang.System");

    System["currentTimeMillis"].implementation = function () {

        let ret = this.currentTimeMillis();

        klog("获取的时间搓： " + ret)
        return ret;
    };
}


function hookQrContext() {


    Java.choose("cn.rongcloud.im.ui.activity.QrCodeDisplayActivity", {
        onComplete: function onComplete() {
        },
        onMatch: function onMatch(instance) {

            klog("内存寻找 qr activity  类： " + instance);
            klog(instance.qrType.value)


        }
    });

    let QRCodeUtils = Java.use("cn.rongcloud.im.utils.qrcode.QRCodeUtils");
    QRCodeUtils["generateImage"].implementation = function (text, w, h, logo) {
        klog('generateImage is called' + ', ' + 'text: ' + text + ', ' + 'w: ' + w + ', ' + 'h: ' + h + ', ' + 'logo: ' + logo);
        let ret = this.generateImage(text, w, h, logo);
        return ret;
    };

}


function hooNative(){

    console.log("hoo navitie")




}


klogData("", "init", "%customFileName% init hook success 我是二傻11117677434347443434343477");