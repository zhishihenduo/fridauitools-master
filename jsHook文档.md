


https://github.com/Xposed-Modules-Repo/me.jsonet.jshook


Skip to content
Product
Solutions
Open Source
Pricing
Search
Sign in
Sign up
Xposed-Modules-Repo
/
me.jsonet.jshook
Public
Code
Issues
Pull requests
Projects
Security
Insights
me.jsonet.jshook/README.en.md
@etjson
etjson merge
Latest commit 8af1ff1 on Nov 15, 2022
History
1 contributor
962 lines (863 sloc)  16.9 KB

JsHook
Xposed GitHub release Telegram Telegram

hook artifact in android support java layer and native layer

中文的README

About
xposed is a module framework to change the behavior of system and applications without touching any apk. This means that modules can work on different versions or even roms without any changes.

Jshook injects rhino/frida into the app. The development of xposed module requires a certain java grammar foundation, and the technical threshold is high. However, the rhino/frida injected by jshook only needs a short js to quickly implement hooks on mobile phones, and hooks support java layer and native layer.

Compatibility
Xposed api 82
Android 5 - 13
How to use
How to enable scripts
Before enabling the script, please confirm that the selected application has the hook service option enabled. If the lsposed non-global scope is activated, in addition to checking the system, you need to check the application that the corresponding script takes effect. Every time you change the script content, you need to restart the hooked one. app.

How to choose an hook framework
If you are familiar with the hook method of xposed, rhino is recommended, and js is used to call the api of the xposed framework, and the compatibility is high; while frida belongs to another hook framework, you need to have a certain understanding of frida, it is difficult to get started, and some parts are not supported model and app.

Script Description
Universal
Log Printing：

common.log('...');
console.log('...');
Message Tips：

common.toast('...');
pop-up prompt：

common.dialog('...');
Get Context：

common.getcontext();
mod menu：

modmenu
Parameters	Parameter Type	Parameter Description	Required or not
title	String	Title	N
item	Array	Menu Item	Y
title	String	Title	N
change	Function	callback	N
Example：

common.modmenu('test mod', [
{
'id': '1',
'type': 'category',
'title': 'category title'
},
{
'id': '2',
'type': 'switch',
'title': 'switch1 title',
'enable': true
},
{
'id': '3',
'type': 'switch',
'title': 'switch2 title'
},
{
'id': '4',
'type': 'webview',
'data': '<font color="red"><b>text</b></font>',
//or
//'url': 'http://xxxxx.com'
},
{
'id': '5',
'type': 'button',
'title': 'button title'
},
{
'id': '6',
'type': 'input',
'title': 'input title',
'val': 'default value'
},
{
'type': 'collapse',
'title': 'collapse title',
'item': [
{
'id': '7',
'type': 'switch',
'title': 'switch title'
}
],
'enable': true
},
{
'id': '8',
'type': 'slider',
'title': 'slider title',
'val': 88,
'min': 1,
'max': 100
},
{
'id': '9',
'type': 'checkbox',
'title': 'checkbox title',
'enable': true
},
{
'type': 'checkboxs',
'item': [
{
'id': '10',
'type': 'checkbox',
'title': '1 title'
},
{
'id': '11',
'type': 'checkbox',
'title': '2 title'
},
{
'id': '12',
'type': 'checkbox',
'title': '33333333 title'
}
]
},
{
'id': '13',
'type': 'radio',
'title': 'radio title',
'item': ['test', 'test2', 'test3']
}
], function (data) {
common.toast(JSON.stringify(data));
});
Example with tabs：

common.modmenu('test mod', [
{
'type': 'tab',
'title': 'tab1 title',
'item': [
{
'id': '1',
'type': 'switch',
'title': 'switch1 title'
}
],
'enable': true
},
{
'type': 'tab',
'title': 'tab2 title',
'item': [
{
'id': '2',
'type': 'switch',
'title': 'switch2 title'
}
]
}
], function (data) {
common.toast(JSON.stringify(data));
});
Note: To use the mod menu, you need to keep jshook running and authorize the floating window permission. Closing jshook will cause the menu to close, which will not affect the hook service.

rhino
Get LoadPackageParam

getlpparam
Parameters	Parameter Type	Parameter Description	Required or not
None
Example：

common.getlpparam();
Get class instances

findClass
Parameters	Parameter Type	Parameter Description	Required or not
className	String	Class Name	Y
classLoader	ClassLoader	Class Loader	Y
Example：

common.findClass('com.test.test',classLoader);
hook constructor

hookAllConstructors
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class instance or class name	Y
beforeHookedMethod	Function	Before the execution of the constructor	N
afterHookedMethod	Function	After the execution of the constructor	N
replaceHookedMethod	Function	Replace the constructor execution process	N
Example：

common.hookAllConstructors('com.test.test', function (param) {
//Before the execution of the constructor
//Print the first argument received by the constructor
common.log(param.args[0]);
//Modify the value of this parameter
param.args[0] = 'fuck';
}, function (param) {
//After the execution of the constructor
//...
});
hook constructor with specified parameters

hookConstructor
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class instance or class name	Y
paramTypes	Object[]	Parameter Type	Y
beforeHookedMethod	Function	Before the execution of the constructor	N
afterHookedMethod	Function	After the execution of the constructor	N
replaceHookedMethod	Function	Replace the constructor execution process	N
Example：

common.hookConstructor('com.test.test', ['java.lang.String', 'int'], function (param) {
//...
}, function (param) {
//...
});
hook class method

hookAllMethods
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class instance or class name	Y
beforeHookedMethod	Function	Before the execution	N
afterHookedMethod	Function	After the execution	N
replaceHookedMethod	Function	Replace execution process	N
Example：

common.hookAllMethods('com.test.test', 'methodname', function (param) {
//...
}, function (param) {
//...
}, function (param) {
//The call to the original method returns
return common.thisMethod(param);
});
hook the specified class method

hookByMethod
Parameters	Parameter Type	Parameter Description	Required or not
method	Method	Method Object	Y
beforeHookedMethod	Function	Before the execution	N
afterHookedMethod	Function	After the execution	N
replaceHookedMethod	Function	Replace execution process	N
Example：

common.hookByMethod(method, function (param) {
//...
//Modify return value
param.setResult('fuck');
}, function (param) {
//...
//Get the return value of the class method and print it
common.log(param.getResult());
});
hook the class method with the specified parameters

hookMethod
Parameters	Parameter Type	Parameter Description	Required or not
className	String	Class Name	Y
paramTypes	Object[]	Parameter Type	Y
beforeHookedMethod	Function	Before the execution	N
afterHookedMethod	Function	After the execution	N
replaceHookedMethod	Function	Replace execution process	N
Example：

common.hookMethod('com.test.test', 'methodname', ['java.lang.String', 'int'], function (param) {
//...
//Modify return value
param.setResult('fuck');
}, function (param) {
//...
//Get the return value of the class method and print it
common.log(param.getResult());
});
Modifying static variable values

setStaticObjectField
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class name or current instance	Y
fieldName	String	Variable Name	Y
fieldValue	Object	Variable Value	Y
Example：

common.setStaticObjectField('com.test.test', 'Variable Name', 'Variable Value');
Modifying dynamic variable values

setObjectField
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class name or current instance	Y
fieldName	String	Variable Name	Y
fieldValue	Object	Variable Value	Y
Example：

common.setObjectField('com.test.test', 'Variable Name', 'Variable Value');
//or
//param.thisObject Get in the hook callback method
common.setObjectField(param.thisObject, 'Variable Name', 'Variable Value');
Get static variable values

getStaticObjectField
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class instance or class name	Y
fieldName	String	Variable Name	Y
Example：

common.getStaticObjectField('com.test.test', 'Variable Name');
Get dynamic variable values

getObjectField
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class name or current instance	Y
fieldName	String	Variable Name	Y
Example：

common.getObjectField('com.test.test', 'Variable Name');
Active invocation of dynamic methods

callMethod
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class name or current instance	Y
methodMame	String	Method name	Y
paramTypes	Object[]	Parameter Value	N
Example：

common.callMethod('com.test.test', 'methodname', ['a', 1]);
Active invocation of static methods

callStaticMethod
Parameters	Parameter Type	Parameter Description	Required or not
className	Object	Class instance or class name	Y
methodMame	String	Method name	Y
paramTypes	Object[]	Parameter Value	N
Example：

common.callStaticMethod('com.test.test', 'methodname', ['a', 1]);
Calling the original method in replaceHookedMethod

thisMethod
Parameters	Parameter Type	Parameter Description	Required or not
param	Object	Parameters	Y
Example：

//param is retrieved in the replaceHookedMethod
common.thisMethod(param);
View more

frida
View more

fridamod
curl

curl
Parameters	Parameter Type	Parameter Description	Required or not
url	String	url address	Y
method	String	request type	N
header	Array	header info	N
data	Object	submit data	N
callback	Function	callback	N
Example：

common.curl('https://xxxxx.com', 'post', ['token: sssss'], {data: '111'}, function (data) {
common.log(data);
});
shell

shell
Parameters	Parameter Type	Parameter Description	Required or not
content	String	content	Y
Example：

common.shell('curl https://xxxxx.com', function (data) {
common.log(data);
});
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
GitHub - Xposed-Modules-Repo/me.jsonet.jshook: 用js写hook / JsHook