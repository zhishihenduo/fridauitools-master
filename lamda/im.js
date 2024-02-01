Java.perform(function () {
        console.log("im token be inject 3 ")

        let SpannableStringBuilder = Java.use("android.text.SpannableStringBuilder");
        let Gson = Java.use("com.google.gson.Gson");
        let $new_gson = Gson.$new();
        let ReactEditText = Java.use("com.facebook.react.views.textinput.ReactEditText");
        ReactEditText["maybeSetText"].implementation = function (reactTextUpdate) {
            console.log(`ReactEditText.maybeSetText is called: reactTextUpdate=${SpannableStringBuilder.$new(reactTextUpdate.getText())}`);
            this["maybeSetText"](reactTextUpdate);
        };


        let WalletManager = Java.use("org.consenlabs.tokencore.wallet.WalletManager");
        WalletManager["importWalletFromPrivateKey"].overload('org.consenlabs.tokencore.wallet.model.Metadata', 'java.lang.String', 'java.lang.String', 'boolean').implementation = function (metadata, str, str2, z2) {
            console.log(`WalletManager.importWalletFromPrivateKey is called: metadata=${$new_gson.toJson(metadata)}, str=${str}, str2=${str2}, z2=${z2}`);
            let result = this["importWalletFromPrivateKey"](metadata, str, str2, z2);
            console.log(`WalletManager.importWalletFromPrivateKey result=${result}`);
            return result;
        };

        WalletManager["importWalletFromMnemonic"].overload('org.consenlabs.tokencore.wallet.model.Metadata', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.util.List', 'java.lang.String', 'boolean').implementation = function (metadata, str, str2, str3, list, str4, z2) {
            console.error(`WalletManager.importWalletFromMnemonic is called: metadata=${$new_gson.toJson(metadata)}, str=${str}, str2=${str2}, str3=${str3}, list=${list}, str4=${str4}, z2=${z2}`);
            let result = this["importWalletFromMnemonic"](metadata, str, str2, str3, list, str4, z2);
            console.log(`WalletManager.importWalletFromMnemonic result=${result}`);
            return result;
        };
        WalletManager["exportMnemonic"].implementation = function (str, str2) {
            console.log(`WalletManager.exportMnemonic is called: str=${str}, str2=${str2}`);
            let result = this["exportMnemonic"](str, str2);
            console.log(`WalletManager.exportMnemonic result=${result}`);
            return result;
        };

        let Metadata = Java.use("org.consenlabs.tokencore.wallet.model.Metadata");
        Metadata["getChainType"].implementation = function () {
            console.log(`Metadata.getChainType is called`);
            let result = this["getChainType"]();
            console.log(`Metadata.getChainType result=${result}`);
            return result;
        };
        Metadata["setChainType"].implementation = function (str) {
            console.log(`Metadata.setChainType is called: str=${str}`);
            this["setChainType"](str);
        };

        Metadata["$init"].overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (str, str2, str3, str4) {
            console.log(`Metadata.$init is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}`);
            this["$init"](str, str2, str3, str4);
        };

        Metadata["$init"].overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (str, str2, str3, str4, str5) {
            console.log(`Metadata.$init is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}, str5=${str5}`);
            this["$init"](str, str2, str3, str4, str5);
        };


        let EncMnemonicKeystore = Java.use("org.consenlabs.tokencore.wallet.keystore.EncMnemonicKeystore");
        EncMnemonicKeystore["setEncMnemonic"].implementation = function (encPair) {
            console.log(`EncMnemonicKeystore.setEncMnemonic is called: encPair=${encPair}`);
            this["setEncMnemonic"](encPair);
        };

        WalletManager["findWalletByMnemonic"].implementation = function (str, str2, str3, str4, str5) {
            console.error(`WalletManager.findWalletByMnemonic is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}, str5=${str5}`);
            console.error(`WalletManager.findWalletByMnemonic is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}, str5=${str5}`);
            console.error(`WalletManager.findWalletByMnemonic is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}, str5=${str5}`);
            let result = this["findWalletByMnemonic"](str, str2, str3, str4, str5);
            console.log(`WalletManager.findWalletByMnemonic result=${result}`);
            return result;
        };


        let V3MnemonicKeystore = Java.use("org.consenlabs.tokencore.wallet.keystore.V3MnemonicKeystore");
        V3MnemonicKeystore["createEncMnemonic"].implementation = function (str, str2) {
            console.log(`V3MnemonicKeystore.createEncMnemonic is called: str=${str}, str2=${str2}`);
            this["createEncMnemonic"](str, str2);
        };

        let AES = Java.use("im.imkey.imkeylibrary.core.foundation.crypto.AES");
        // AES["encryptByCBC"].implementation = function (bArr, bArr2, bArr3) {
        //     console.log(`AES.encryptByCBC is called: bArr=${bArr}, bArr2=${bArr2}, bArr3=${bArr3}`);
        //     let result = this["encryptByCBC"](bArr, bArr2, bArr3);
        //     console.log(`AES.encryptByCBC result=${result}`);
        //     return result;
        // };
        // let KeyManager = Java.use("im.imkey.imkeylibrary.core.wallet.Wallet");

        // traceAll(ReactEditText)

        let NumericUtil = Java.use("org.consenlabs.tokencore.foundation.utils.NumericUtil");
        // NumericUtil["isValidHex"].implementation = function (str) {
        //     console.log(`NumericUtil.isValidHex is called: str=${str}`);
        //     let result = this["isValidHex"](str);
        //     console.log(`NumericUtil.isValidHex result=${result}`);
        //     return result;
        // };
        //
        // NumericUtil["hasHexPrefix"].implementation = function (str) {
        //     console.log(`NumericUtil.hasHexPrefix is called: str=${str}`);
        //     let result = this["hasHexPrefix"](str);
        //     console.log(`NumericUtil.hasHexPrefix result=${result}`);
        //     return result;
        // };

        NumericUtil["reverseHex"].implementation = function (str) {
            console.log(`NumericUtil.reverseHex is called: str=${str}`);
            let result = this["reverseHex"](str);
            console.log(`NumericUtil.reverseHex result=${result}`);
            return result;
        };


        // traceAll(NumericUtil)


        function traceAll(numericUtilClass) {
            console.log("traceAll --> " + numericUtilClass);

            // 获取类的所有成员方法
            var classMembers = numericUtilClass.class.getDeclaredMethods();

            // 遍历类的所有成员方法
            for (var i = 0; i < classMembers.length; i++) {
                var method = classMembers[i];

                // 获取方法的所有重载
                var overloads = numericUtilClass[method.getName()].overloads;

                // 遍历方法的所有重载
                overloads.forEach(function (overload) {
                    // 打印方法名和重载签名
                    var signature = method.getName() + overload.argumentTypes;
                    console.log('\x1b[33m  ' + signature + ':\x1b[0m', '');

                    // 设置重载方法的实现
                    overload.implementation = function () {
                        // 打印方法名
                        console.log('Method: ' + method);

                        // 打印入参
                        console.log('Arguments:', arguments);
                        for (let i = 0; i < arguments.length; i++) {
                            console.log('\x1b[33m  arg[' + i + ']:\x1b[0m', arguments[i]);
                        }

                        // 调用原始方法
                        var result = this[method.getName()].apply(this, arguments);

                        // 打印出参
                        console.log('Result: ' + result);

                        // 返回结果
                        return result;
                    };
                });
            }
        }
    }
)