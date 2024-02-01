<!DOCTYPE
html > < html
lang = "en" > < head > < title > 人工智能助手 < /title><meta charset="utf-8"><meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/ > < meta
name = "format-detection"
content = "telephone=no,email=no,date=no,address=no" > < style >
.
pageLoad
{
    position: relative;
    min - height
:
    40
    px;
    border - radius
:
    3
    px;
    width: 100 %;
    height: 100 %;
}
.
pageLoad.loadLayer
{
    width: 100
    px;
    position: absolute;
    z - index
:
    98;
    top: calc(50 % +5
    px
)
    ;
    left: 50 %;
    text - align
:
    center;
    transform: translate(-50 %, -50 %);
}
.
pageLoad.loadLayer
span
{
    display: inline - block;
    width: 8
    px;
    height: 100 %;
    border - radius
:
    4
    px;
    margin: 0
    px
    3
    px;
    background: #
    07
    C160;
    -webkit - animation
:
    load
    1.04
    s
    ease
    infinite;
}
.
pageLoad.loadLayer
span:nth - child(2)
{
    -webkit - animation - delay
:
    .13
    s;
}
.
pageLoad.loadLayer
span:nth - child(5)
{
    -webkit - animation - delay
:
    .52
    s;
}
.
pageLoad.loadLayer
span:nth - child(3)
{
    -webkit - animation - delay
:
    .26
    s;
}
@
-webkit - keyframes
load
{
    0 %, 100 % {
        height: 10px;
        background:
#
    07
    C160;
}
    50 % {
        height: 30px;
        margin-top
:
    -20
    px;
    background: #
    53
    d290;
}
}
</style>
<script>
    var _LoadingHtml = "
    <div id='loadingDiv' class='pageLoad'>
        <div class='loadLayer'><span></span><span></span><span></span><span></span><span></span></div>
    </div>
    ";
    document.write(_LoadingHtml);
    document.onreadystatechange = completeLoading();
    function completeLoading() {
    if (document.readyState == "complete") {

}
}
    window.onload = function(){
    setTimeout(function () {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }, 300);
}
    if (("standalone" in window.navigator) && window.navigator.standalone) {
    var noddy, remotes = false;
    document.addEventListener('click',function(event) {
    noddy = event.target;
    while (noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
    noddy = noddy.parentNode;
}

    if ('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes)) {
    event.preventDefault();
    document.location.href = noddy.href;
}
},
    false);
}
</script>
<if condition="$app_debug">
    <link rel="stylesheet" href="https://ai.paomob.cn/static/css/weui.css?v=1679900417"/>
    <link rel="stylesheet" href="https://ai.paomob.cn/static/css/weuix.css?v=1679900417"/>
    <link rel="stylesheet" href="https://ai.paomob.cn/static/fonts/iconfont.css?v=1679900417"/>
    <link rel="stylesheet" href="https://ai.paomob.cn/static/css/aihelper_common.css?v=1679900417"/>
    <meta name="theme-color" content="#028aff">
        <style>
            html,body{background: #fff !important;}
            .master_limitations{background:#f7f7f8;margin:15px;border-radius:15px;padding:8px 15px;text-align:center;}
            .master_limitations h2{font - size:16px;font-weight:bold;color:#666;padding:5px 0;}
            .master_limitations
            img{vertical - align:middle;width:20px;position:relative;top:-1px;margin-right:6px;opacity:.6;}
            .master_limitations p{font - size:14px;color:#666;padding:1px 0;}

            .master_main{overflow: hidden;}
            .master_box{margin:15px;}
            .master_tit{font - size:16px;font-weight:bold;color:#000;padding:10px 0 15px 0;}
            .master_tit img{width:20px;height:20px;vertical-align:middle;position:relative;top:-1px;margin-right:5px;}
            .master_wrap{background:#f7f7f8;border-radius:15px;padding:8px 0;}
            .master_item{padding:8px 15px;font-size:14px;color:#222;position:relative;}
            .master_item:after{content:'→';font-size:14px;color:#999;position:absolute;top:8;right:15px;}
            .master_item:active{opacity:.6;}

            .master_foot{height:70px;}
            .master_foot_fix{position:fixed;bottom:0;left:0;right:0;background:#fff;z-index:10}
            .master_send{height:50px;display:flex;background:#f7f7f8;margin:10px 15px;border-radius:100px;}
            .send_left{flex:1;}
            .send_left
            .ipt{width:100%;box-sizing:border-box;height:50px;outline:none;border:0;background:none;font-size:16px;color:#607D8B;padding:0 15px;}
            .send_left .ipt::placeholder{color:#999;}
            .send_right{padding:6px;}
            .send_right
            .btn{background:#10a37f;width:65px;height:38px;border-radius:100px;display:flex;align-items:center;justify-content:center;}
            .send_right .btn img{width:26px;height:26px;vertical-align:middle;}
            .send_right .btn:active{opacity:.8;}

            .chatbox_receiver{padding: 0 15px;margin-top: 20px;box-sizing: border-box;display: flex;}
            .chatbox_receiver .chatbox_img{position: relative;width: 40px;height: 40px;}
            .chatbox_receiver .chatbox_img img{border - radius: 100px;width: 40px;height: 40px;object-fit: cover;}
            .chatbox_receiver .chatbox_left{display: flex;flex: 1;position: relative;margin: 10px 0 0 12px;}
            .chatbox_receiver .chatbox_left
            .chatbox_content{position:relative;background: #f3f3f3;border-radius: 0 12px 12px 12px;min-height: 24px;font-size: 16px;line-height: 22px;color: #000;padding: 10px;word-break:break-all;}

            .chatbox_receiver .chatbox_right{display: flex;flex: 1;position: relative;margin: 10px 12px 0 0;}
            .chatbox_receiver .chatbox_right
            .chatbox_content{position:relative;background: #10a37f;border-radius: 12px 0 12px 12px;min-height: 24px;font-size: 16px;line-height: 22px;color: #fff;padding: 10px;word-break:break-all;}
            .chatbox_receiver .chatbox_status{flex: 1;padding: 0 2px;box-sizing: border-box;position: relative;}
            .chatbox_receiver .chatbox_content .text{display: inline-block;}
            .chatbox_receiver .chatbox_content .text .ctn{color: #607D8B;}


            .chatbox_receiver .chatbox_tag_box{position: relative;z-index:9;}
            .chatbox_receiver .chatbox_tag_item{border - top:0.03rem solid #e3e3e3;margin-top:5px;display:flex;}
            .chatbox_receiver .chatbox_tag_item .tag{font - size:12px;padding:4px 12px 0 0;white-space:nowrap;}
            .chatbox_tag_item .iconC,.chatbox_tag_item .iconK,.chatbox_tag_item
            .iconO{font - size:12px;color:#999;display:flex;position:relative;top:2px;z-index:1;}
            .chatbox_tag_item .iconC i,.chatbox_tag_item .iconK i,.chatbox_tag_item .iconO
            i{background - image: url(../../static/Ai/ai26.png);background-repeat:no-repeat;background-position:top left;background-size:40px;width:14px;height:14px;display: inline-block;font-style:normal;position:relative;top:4px;margin-right:2px;z-index:1;}
            .chatbox_tag_item .iconK i{background - position:top center;}
            .chatbox_tag_item .iconO i{background - position:top right;}

            .blinker {animation: blinker 1s infinite cubic-bezier(1, 0, 0, 1);display: inline-block;width: 5px;height: 16px;margin-left: 3px;border-radius:0px;background: #000;position:relative;top:2px;}
            @keyframes blinker {
            from {opacity: 1;}
            to {opacity: 0;}
        }

            .loading_shape{padding:6px 13px 0 0;}
            .shape {width: 9px;height: 9px;background: #10a37f;border-radius: 100px;display: inline-block;animation: anim 1.4s infinite ease-in-out;animation-fill-mode: both;}
            .shape:nth-child(1){animation - delay: -0.32s;}
            .shape:nth-child(2){animation - delay: -0.16s;}
            @keyframes anim {
            0 %, 80%, 100% {transform: scale(0.4);opacity: 0.4;}
            40% {transform: scale(1.0);opacity: 1;}
        }
            a{outline:none;text-decoration: none;}

            .gotmp{position: fixed;z-index: 300;bottom: 160px;right: 20px;display: none;}
            .gotmp
            .gotmp_txt{border - radius: 100px;height: 39px;width: 39px;text-align: center;padding: 3px;overflow: hidden;position: relative;z-index: 3;cursor: pointer;display: flex;align-items: center;justify-content: center;}
            .gotmp
            .gotmp_txt:before {content: "";position: absolute;z-index: -1;top: 0;left: 0;width: 100%;height: 100%;background: linear-gradient(90deg,#ff784f,#ebb363,#10a37f,#ebb363,#ff784f);opacity: .8;background-size: 200% 100%;background-position: 0 50%;-webkit-animation: anima 3s linear infinite;animation: anima 3s linear infinite;}
            .gotmp
            .gotmp_img{background: rgba(255,255,255,.7);-webkit-backdrop-filter: blur(20px);backdrop-filter: blur(20px);color: #fff;border-radius: 100px;height: 39px;width: 39px;line-height: 40px;}
            .gotmp .gotmp_img img{width: 20px;height: 20px;display: block;margin: 10px auto;}
            @keyframes anima{
            0 % {background-position:0 50%}
            50%{background-position:100% 50%}
            to{background-position:200% 50%}
        }
            .gotmp_tips{position: absolute;height: 40px;right: 55px;white-space:nowrap;top: 50%;margin-top: -20px;border-radius:6px;background: rgba(0,0,0,.05);padding: 8px;font-size: 12px;color: #000;pointer-events: none;box-sizing: border-box;display: flex;align-items: center;justify-content: center;-webkit-backdrop-filter: blur(20px);backdrop-filter: blur(20px);}
            .gotmp_tips:before{content: '';display: inline-block;width: 0;height: 0;position: absolute;top: 14px;right: -12px;border: 6px solid;border-color:transparent transparent transparent rgba(0,0,0,.05);}


            .open_layer{background: rgba(0,0,0,.6);z-index: 1;position: fixed;top: 0;bottom: 0;left: 0;right: 0;}
            .open_result_fix{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5);z-index:99999;}
            .open_result_box{background: linear-gradient(0deg, #fff 80%,#ffefb4);width:260px;height:280px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%); border-radius:20px;text-align:center;}
            .open_result_box
            .icon{vertical - align:middle;width:75px;height:75px;position:absolute;left:50%;top:-35px;margin-left:-37px;z-index:2;}
            .open_result_box
            .title{position:relative;z-index:2;padding-top:50px;color:#ff6445;font-size:16px;font-weight:bold;}
            .open_result_box
            .open{position:relative;z-index:2;color:#67390b;font-size:26px;line-height:26px;padding:20px 0;font-weight:bold;}
            .open_result_box .txt{position:relative;z-index:2;color:#999;font-size:15px;padding:0 30px;}
            .open_result_box
            .button{position:relative;z-index:2;background: linear-gradient(120deg, #e2b879, #cca163);border-radius: 100px;color: #67390b;text-align: center;font-size: 18px;padding:10px 0;width: 70%;font-weight: bold;margin:15px auto 0 auto;}
            .open_result_box .button:active{opacity:.8;}
            .open_result_close{position:absolute;bottom:-70px;left:50%;margin-left:-20px;width:30px;height:30px;line-height: 30px;border-radius:100px;text-align:center;font-size:16px;color:#fff;border:.05rem solid #fff;opacity:.6}

            .text h1{font - size:18px;font-weight:bold;margin:10px 0;}
            .text h2{font - size:16px;font-weight:bold;margin:8px 0 8px 3px;}
            .text
            h2:before{content:'●';color:#000;font-size:12px;transform:scale(.6);display:inline-block;position:relative;top:-1px;left:-3px;}
            .text
            ul{list - style:none;margin:8px 0;width: 260px;overflow: auto;background: #535353;color: #fff;border-radius: 6px;}
            .text ul li{margin: 10px;}
            .text ol{margin:8px 20px;}
            .text ol li{margin:5px 0;}
            .text p{margin:5px 0;}

            .text table{font - size:.8em}
            .text table thead tr{background - color:#64748b40;text-align:left}
            .text table th,.text table td{padding:.6rem 1rem}
            .text table tbody tr:last-of-type{border - bottom:2px solid #64748b40}
            .text table{font - size:.8em}
            .text table thead tr{background - color:#64748b40;text-align:left}
            .text table th,.text table td{padding:.6rem 1rem}
            .text table tbody tr:last-of-type{border - bottom:2px solid #64748b40}
            .float_client {
            width: 75px;
            height: 75px;
            background: #f5f5f5;
            border: 1px solid #c1c1c1;
            border-radius: 50%;
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #6d6d6d;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            right: 15px;
            bottom: 124px;
            z-index: 99;
        }


            .page-hd{
            padding - top:38px;
        }

            .page-hd-title{
            text - align:center;
            color: #fff;
        }

            .page-hd-desc{
            color:#fff;
            font-size:20px;
            text-align:center;
        }

            .page-bd-15 {
            padding: 0 15px;
            background: #fff;
            margin: 20px 30px;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 0 6px #dfdede;
        }
            .step{
            padding:20px;
        }
            .mp_qrcode{
            width: 100%;
            margin: 0 auto;
        }

            canvas{margin: 0 auto; width: 100%;}
            .logo{
            position: absolute;
            width: 20%;
            left: 40%;
            top: 40%;
        }

            .zst_pay_topa {
            padding:12px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 0.5rem;
            position: relative;
        }

            .zst_pay_topa li {
            width: 100%;
            height: 40px;
            background: #fff;
            display: flex;
            justify-content: flex-start;
        }
            .zst_pay_topa li img {
            width: 24px;
            height: 24px;
            margin-top: 8px;
        }
            .zst_pay_topa li p {
            height: 40px;
            line-height: 40px;
            margin-left: 10px;
            font-size: 14px;
            color: #333;
        }

            .mode_layer{background: rgba(0,0,0,.6);z-index: 888;position: fixed;top: 0;bottom: 0;left: 0;right: 0;}
            .mode_main{z - index:999;position: fixed;bottom: 0;left: 0;right: 0;min-height:500px;background: #fff;border-radius: 20px 20px 0 0;padding:0 20px;display: flex;flex-direction: column;}
            .mode_top{flex:1;}
            .mode_cont{overflow: hidden;padding-top:20px}
            .mode_tit{font - size:16px;padding:0 3px 10px 3px;}
            .mode_ipt{border:.04rem solid #aaa;border-radius:10px;}
            .mode_ipt
            .ipt{width:100%;box-sizing:border-box;padding:12px;font-size:16px;color:#000;outline:none;border:0;background:none;}
            .mode_ipt .ipt::placeholder{color:#999;}
            .mode_text{border:.04rem solid #aaa;border-radius:10px;height:110px;}
            .mode_text
            .text{width:100%;box-sizing:border-box;padding:15px;font-size:16px;color:#000;outline:none;border:0;background:none;resize:none;display: inherit;}
            .mode_text .text::placeholder{color:#999;}
            .mode_lang{border:.04rem solid #aaa;display:flex;border-radius:10px;margin:15px 0;padding:8px 10px;position:relative;}
            .mode_lang span{white - space:nowrap;font-size:16px;color:#000;margin-right:15px;}
            .mode_lang input{color:#000;position:relative;top:1px;width:100%;box-sizing:border-box;}
            .mode_lang:after{content:'▼';font-size:16px;color:#000;}
            .mode_run{text - align:center;height:100px;padding-top:40px}
            .run_btn{background:#10a37f;color:#fff;font-size:18px;width:60%;text-align:center;padding:12px 0;margin:0 auto;border-radius:100px;}
            .run_btn:active{opacity:.8;}
            .toolbar .toolbar-inner{height:2.5rem}
            .toolbar .picker-button{height:2.5rem;line-height: 2.5rem;color:#10a37f;font-size:1rem;}
            .toolbar .title{line - height: 2.5rem;font-size:1rem;}
            .weui-picker-modal .picker-items{font - size:1.2rem}

        </style>
    </head>
    <body>
    <div class="weui-header"
         style='display:none;margin: 0 auto; position: fixed; width: 100%;  z-index: 99; background: #028aff;'>
        <div class="weui-header-left"><a style='color:#fff !important' id='clean'>清理会话</a></div>
        <h1 class="weui-header-title f-white">人工智能助手</h1>
        <div class="weui-header-right"><a
            style='border-radius: 5px; font-size: 14px; line-height: 20px; padding: 3px 10px;background: #fff;'
            id='download_app'>下载App</a></div>
    </div>
    <div class="master_main">
        <div class="master_limitations" style="display: none;"><h2><img
            src="https://ai.paomob.cn/static/Ai/ai4.png?v=1679900417"/>局限性</h2><p>可能偶尔会产生不正确的信息</p>
            <p>可能偶尔会产生有害的指令或有偏见的内容</p><p>对 2021 年后的世界和事件了解有限</p>
            <p>禁止利用AI进行非法活动，所有提问由机器与人工审核</p></div>
        <div class="master_list" id="main"></div>
        <script id="main_tpl" type="text/html">
            <
            % for (var i in tips) {%><div class="master_box"><div class="master_tit"><img src="<%=CDN_URL+tips[i].icon%>" /><%=tips[i].title%></div><div class="master_wrap"><% for (var j in tips[i].item) {%><div class="master_item" data-text="<%=tips[i].item[j].text%>"><%=tips[i].item[j].text%></div><%} %>
    </div>
    </div>
    <
    % } %></script>
</div>
<div id="msg_content"></div>
<script id="demo_tpl" type="text/html">
    <
    % for (var i in history) {%><!-- 右文字消息 --><div class="chatbox_receiver"><div class="chatbox_right"><div class="chatbox_status"></div><div class="chatbox_content user_copy" data-prompt="<%=history[i].prompt%>"><%=history[i].prompt%></div></div><div class="chatbox_img"><img src="<%=CDN_URL+user.headimgurl%>" /></div></div><!-- 左文字消息 --><div class="chatbox_receiver"><div class="chatbox_img"><img src="https://ai.paomob.cn/static/Ai/user_ai_aihelper.png?v=1679900417" /></div><div class="chatbox_left"><div class="chatbox_content"><div data-id='<%=history[i].id%>' id='<%=history[i].id%>' class="text robot_copy"  ><span><%=md.render(history[i].answer)%></span></div><!-- 复制tag --><div class="chatbox_tag_box" ><div class="chatbox_tag_item"><div class="tag copy robot_copy" data-id='<%=history[i].id%>'><span class="iconC"><i></i>复制</span></div><div class="tag keep" data-is_fav="<%=history[i].is_fav%>" data-iid="<%=history[i].id%>"><% if (history[i].is_fav == 1) {%><span class="iconO"><i></i>已收藏</span><%} else {%><span class="iconK"><i></i>收藏</span><%} %></div></div></div></div><div class="chatbox_status"></div></div></div><% } %></script><!-- 右文字消息 --><script type="text/html" id="user_content_tpl"><div class="chatbox_receiver"><div class="chatbox_right"><div class="chatbox_status"></div><div class="chatbox_content user_copy" data-prompt="<%=prompt%>" ><!-- 复制tag --><!--<div class="chatbox_tag_box" style="display: none;"><div class="chatbox_tag_item"><div class="tag copy user_copy" data-prompt="<%=prompt%>">复制</div><div class="tag keep" data-is_fav="0" data-iid="<%=id%>">收藏</div></div></div>--><%=prompt%></div></div><div class="chatbox_img"><img src="<%=CDN_URL+headimgurl%>" /></div></div></script><script id="robot_content_tpl" type="text/html"><!-- 左文字消息 --><div class="chatbox_receiver"><div class="chatbox_img"><img src="https://ai.paomob.cn/static/Ai/user_ai_aihelper.png?v=1679900417" /></div><div class="chatbox_left"><!-- 加载... --><div class="loading_shape robot_shape_<%=id%>"><span class="shape"></span><span class="shape"></span><span class="shape"></span></div><div class="chatbox_content robot_content_<%=id%>" style="display:none;"><div class="text"  ><span class="ctn robot_copy" data-id="<%=id%>" id="<%=id%>"></span><span class="blinker"></span></div><!-- 复制tag --><div class="chatbox_tag_box" style="display: none;"><div class="chatbox_tag_item"><div class="tag copy robot_copy " data-id="<%=id%>">复制</div><div class="tag keep" data-is_fav="0" data-iid="<%=id%>">收藏</div></div></div></div><div class="chatbox_status"></div></div></div></script><div><a id="msg_end" name="1" href="#1">&nbsp</a></div><div class="master_foot"><div class="master_foot_fix"><div class="master_send"><div class="send_left"><input class="ipt" id='ipt' type="text" placeholder="请输入问题..."></div><div class="send_right"><div class="btn"><img src="https://ai.paomob.cn/static/Ai/ai7.png?v=1679900417" /></div><!-- 加载... --><div class="loading_shape" style="display:none;"><span class="shape"></span><span class="shape"></span><span class="shape"></span></div></div></div></div></div><div class="gotmp"><div class="gotmp_txt"><div class="gotmp_img"><img src="https://ai.paomob.cn/static/Ai/ai6.png?v=1679900417"></div></div><div class="gotmp_tips" style="display: none;">可编辑AI模版在这里啦!</div></div><div class="weui-tab" style="height:auto;display:none"><div class="weui-tabbar tab-bottom"><a href="javascript:void(0);" class="weui-tabbar__item"><span style="display: inline-block;position: relative;"><i class="icon iconshouye f20 weui-tabbar__icon"></i></span><p class="weui-tabbar__label">问答</p></a><a href="javascript:void(0);" class="weui-tabbar__item"><i class="icon iconfabu f20 weui-tabbar__icon"></i><p class="weui-tabbar__label">创作</p></a><a href="javascript:void(0);" class="weui-tabbar__item "><i class="icon iconwode1 f20 weui-tabbar__icon"></i><p class="weui-tabbar__label">我的</p></a></div></div><div id='viptips' style='display:none'><div class="open_layer" onclick="$('#viptips').hide()"></div><div class="open_result_fix"><div class="open_result_box"><img src="https://ai.paomob.cn/static/Ai/ai8.png?v=1677941005" class="icon"><div class="title">免费次数已用完</div><div class="open">暂未开通会员</div><div class="txt">低至0.01元/天，畅享AI对话</div><div class="button" onclick="goto('/Ai/User/member' , '解锁VIP' , true )">立即开通</div><div class="open_result_close" onclick="$('#viptips').hide()">✕</div></div></div></div><div class='float_client' style='display:none' onclick="$('#download').show()"><!-- 		<img src="/images/share.png" style='width: 20px;'/>
    --><span>下载</span><span>APP</span></div><div id="download" onclick="$(this).hide()" style="margin: 0px auto; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 1000; background: rgba(0, 0, 0, 0.65); display:none"><div style="width: 76%;margin: 0 auto;"><div class="page-hd"><h1 class="page-hd-title" id="pay_title">App专业版免费下载</h1><p class="page-hd-desc">请使用手机扫码下载</p></div><div class="page-bd-15" style="max-width: 320px;margin: 0 auto;"><div style="margin:0 auto;position: relative;"><img class="download_qrcode" style="width: 100%; margin: 0px auto; opacity: 1;" src=""><img class="logo" style="border-radius: 10px;" src="https://ai.paomob.cn//static/logo_aihelper.png"></div><div class="step"><p style="padding-top:10px;text-align:center;color:#ff5722">免费体验-效率更高-体验次数更多</p></div><!-- 	<a href="javascript:;" class="weui-btn weui-btn_primary" onclick="qr()">立即关注</a>--></div></div></div><div id='template_view' style='display:none'><div class="mode_layer" onclick="$('#template_view').hide()"></div><div class="mode_main" id="template"></div></div><script id="template_tpl" type="text/html"><div class="mode_top"><% for (var i in template) {%><% if (template[i].widget == 'input') {%><div class="mode_cont"><div class="mode_tit"><%=template[i].titile%></div><div class="mode_ipt"><input type="<%=template[i].type%>" id="<%=template[i].id%>" name="<%=template[i].num%>" class="ipt" maxlength="<%=template[i].max%>" placeholder="<%=template[i].placeholder%>" ></div></div><% } else { %><div class="mode_cont"><div class="mode_text"><textarea class="text" name="" id="" cols="30" rows="4"></textarea></div><div class="mode_lang"><span>目标语言: </span><input class="weui-input" id="language" type="text" value="英语"></div><div class="mode_text"><textarea class="text" name="" id="" cols="30" rows="4"></textarea></div></div><%} %><%} %></div><div class="mode_run"><div class="run_btn">AI 生成</div></div></script></body><script src="/Shop/Index/i18n_js?v=1679900417&lang=zh-cn" type="text/javascript"></script><script src="https://ai.paomob.cn/static/??js/zepto.min.js,js/zepto.weui.js,js/md5.js,js/echo.min.js,js/php.js,js/crypto.js,js/fastclick.js,js/miaoyan.js,js/common.js?v1=1679900417" type="text/javascript"></script><script type="text/javascript">
    var LANG = 'zh-cn';
    var CDN_URL = 'https://ai.paomob.cn/';
    var LOGIN_URL = '/Ai/Oauth/index';
    var APP_NAME = "人工智能助手";
    var IS_APP = 0;
    var APPID = 'wxf0946ac8300459d3';
    var MINI_TOKEN = "";
    var MINI_PROGRAM = "0";
    </script><link href="https://ai.paomob.cn//static/js/md/railscasts.min.css" rel="stylesheet"><script src="https://ai.paomob.cn//static/js/e.js?v=1679900417"></script><script src="https://ai.paomob.cn//static/js/md/highlight.min.js"></script><script src="https://ai.paomob.cn//static/js/md/markdown-it.min.js"></script><script src="https://ai.paomob.cn//static/js/md/mermaid.min.js"></script><script src="https://ai.paomob.cn//static/js/md/md.js?v=1679900417"></script><script src="https://ai.paomob.cn//static/js/qrcode.js?v=1679900417"></script><script src="https://ai.paomob.cn//static/js/jpush.js?v=1679900417"></script><!-- <script src="https://ai.paomob.cn//static/??js/md/highlight.min.js,js/md/markdown-it.min.js,js/md/mermaid.min.js,js/md/md.js,js/jpush.js,js/qrcode.js?v=1679900417"></script>
 --><script type="text/javascript">
    var params = getParams();
    var user_input = 1;
    var tabIndex = 0;
    var role_code = params.role_code || 'none';
    var template;
    var role;
    var load_num = 0;
    var title = '';
    var safe_bottom = 0;
    var try_num = 0;
    var titleTip = '正在回复中...';
    var is_loading = false;
    var web_clip = 0;
    var temp_num = 0;
    var robot_answer = '';
    var is_click = false;
    apiready = function () {
    if (role_code == 'none') {
    $('.master_limitations').show();
    api.addEventListener({
    name:'keyboardshow'
},function(ret, err){
    if( api.systemType =='android' ){return;}
    var h = ret.h - 20;
    $('.master_foot_fix').css( 'padding-bottom' , h +'px');
});
    app_start();
    load();
    loadHistory();
} else {
    $('.master_limitations').hide();
    safe_bottom  = api.safeArea.bottom+10;
    $('.master_foot_fix').css('padding-bottom',  safe_bottom+ 'px');
    title = api.pageParam.title || '';
    api.setNavBarAttr({
    rightButtons: [{
    iconPath: 'widget://image/clear_icon.png',
}]
});
    loadRole();
}

    api.addEventListener({
    name:'keyboardhide'
},function(ret, err){
    $('.master_foot_fix').css( 'padding-bottom' , safe_bottom+'px');
});

    api.addEventListener({
    name: 'send_server_error_event'
}, function (ret, err) {
    var msg = ret.value.msg;
    $.toast(msg,'text');
    $('.ipt').removeAttr("disabled");
    $('.btn').show();
    $('.loading_shape').hide();
});

    api.addEventListener({
    name: 'send_guide_content_event'
}, function (ret, err) {
    var content = ret.value.content;
    $('.ipt').val(content);
    $('.btn').click();
    console.log(JSON.stringify(ret));
});


    api.addEventListener({
    name: 'gen_template_event'
}, function (ret, err) {
    var params = ret.value;
    var content = role.content;
    for (var p in params) {
    content = content.replace(p, params[p]);
}
    $('.ipt').val(content);
    submit();
});


    api.addEventListener({
    name: 'navitembtn'
}, function (ret, err) {
    if (ret.type === "left") {
    if (ret.index == 0) {
    if ( needLogin() ){
    return;
}
    goto('/Ai/User/member','',true);
}
} else {
    if ( needLogin() ){
    return;
}
    clear();
}
});

    api.setAppIconBadge({
    badge: 0
});
};

    function app_start(){
    var shake_checked = get('shake_checked');
    if (shake_checked === '') {
    set('shake_checked',1);
}

    //监听登录成功
    api.addEventListener({
    name: 'user_login_success_event'
}, function (ret, err) {
    getUserInfo(function (user) {});
    setTimeout( function(){
    device();
    //getNotRead();
} , 2000 );
});

    var member = get('member');
    var guide_show = get('guide_show');
    if (!guide_show) {
    openFrame('guide_show','/Ai/Index/guidefrm');
}

    var clear_icon = api.readFile({
    sync: true,
    path: 'widget://image/clear_icon.png'
});

    if (empty(clear_icon)) {
    api.download({
    url: 'https://ai.paomob.cn/static/Ai/clear_icon.png',
    savePath: 'widget://image/clear_icon.png',
    report: true,
    cache: true,
    allowResume: true
}, function(ret, err) {
    if (ret.state == 1) {
    var thumb = ret.savePath;
    api.setNavBarAttr({
    rightButtons: [{
    iconPath: thumb,
}]
});
}
});
} else {
    api.setNavBarAttr({
    rightButtons: [{
    iconPath: 'widget://image/clear_icon.png',
}]
});
}


    if (member <= 0) {
    // alert('https://ai.paomob.cn/static/Ai/vip_icon.png');
    //同步返回结果：
    var data = api.readFile({
    sync: true,
    path: 'widget://image/vip_icon.png'
});

    if (empty(data)) {
    api.download({
    url: 'https://ai.paomob.cn/static/Ai/vip_icon.png',
    savePath: 'widget://image/vip_icon.png',
    report: true,
    cache: true,
    allowResume: true
}, function(ret, err) {
    if (ret.state == 1) {
    var thumb = ret.savePath;
    api.setNavBarAttr({
    leftButtons: [{
    iconPath: thumb,
    scale:3
}]
});
}
});
} else {
    api.setNavBarAttr({
    leftButtons: [{
    iconPath: 'widget://image/vip_icon.png',
    scale:3
}]
});
}
}


    api.addEventListener({
    name: 'goto_tab_event'
}, function (ret, err) {
    var tab = ret.value.index;
    api.setTabBarAttr({
    index: tab
});
});

    api.addEventListener({
    name: 'tabitembtn'
}, function (ret, err) {
    tabIndex = ret.index;
    device_notice(0);
    if (tabIndex > 1 ) {
    if ( needLogin() ){
    return;
}
    api.setNavBarAttr({
    leftButtons: [{}]
});

    api.setTabLayoutAttr({
    animated:false,
    hideNavigationBar: true
});
    api.setTabBarAttr({
    index: tabIndex
});
} else {

    if (member <= 0) {
    api.setNavBarAttr({
    leftButtons: [{
    iconPath: 'widget://image/vip_icon.png',
    scale:3
}]
});
} else {
    api.setNavBarAttr({
    leftButtons: [{}]
});
}

    if (tabIndex == 0) {
    api.setNavBarAttr({
    leftButtons: [{
    iconPath: 'widget://image/vip_icon.png',
    scale:3
}]
});
    api.setNavBarAttr({
    rightButtons: [{
    iconPath: 'widget://image/clear_icon.png',
}]
});
}


    if (tabIndex == 1) {
    api.setNavBarAttr({
    rightButtons: [{}]
});
}



    api.setTabLayoutAttr({
    animated:false,
    hideNavigationBar: false
});
    api.setTabBarAttr({
    index: tabIndex
});



    /*api.setNavBarAttr({
        leftButtons: [{
            iconPath:'widget://image/logo_left.png'
        }],
        rightButtons: [{
            iconPath:'widget://image/kefu.png'
        }],
    });*/
}
});

    //监听更新数据成功
    api.addEventListener({
    name: 'update_user_info_success_event'
}, function (ret, err) {
    var code = ret.value.code;
    if (code == 1){
    //监听开通会员
    getUserInfo( function(){

});
    _initJpush();
}
});


    //启动引导任务
    var appVersion = api.appVersion;
    var privacy = get('privacy'+appVersion);
    var recommend = get('recommend');
    var app_version_update = get('app_version_update');
    if( privacy != 1  ){
    //显示隐私协议
}else{

}
    init();
    // listener_clipboard();

    api.addEventListener({
    name: 'agreement_event'
}, function (ret, err) {
    init();
});

    //发送关闭登录窗口
    if (api.systemType == 'android') {
    api.addEventListener({
    name : 'keyback'
}, function(ret, err) {
    if (ret.longPress) {
    api.closeWidget();
} else {
    api.closeWidget();
    //api.toLauncher();
}
});
}

}


    function init(){
    _initJpush();

    if ( api.systemType == 'android' ) {
    setTimeout( function(){
    if( api.debug ){
    //return;
}
    //检测更新
    checkUpdateApp();
} , 1000);
}

    if( isLogin() ){
    setTimeout( function(){
    device();
    //getNotRead();
    //setInterval( getNotRead , 60*1000 );
} , 3000 );
    //_show_coupon();
}else{
    //_show_reg_guide();
    setTimeout( function(){
    activate();
} , 2000);
}

    if( api.systemType == 'ios' ){
    var idfa_obj = api.require('idfa');
    if( idfa_obj != null ){
    idfa_obj.requestTracking(function(ret,err){
    //alert(JSON.stringify(ret)+"  "+JSON.stringify(err));
    if( ret.status ){
    //开启了权限
    var idfa = idfa_obj.getIDFA();
    set( 'idfa' , idfa );
    //alert(idfa);
}else{
    //没有开启
}
});
}
}

}


    function loadHistory() {
    if ( isLogin() ) {
    _ajax(function (ret) {
    if (ret.code == 0) {
    _parseTemplete('msg_content','demo_tpl',ret.data,'append');
    resize()
} else {
    $.toast(ret.data,'text');
}
},'/Api/Ai/role_config',{role_code:role_code,new_version:1});
}
}

    function clear(){
    confirmDialog(function () {
    $.showLoading();
    _ajax( function(ret){
    $.hideLoading();
    if( ret.code == 0 ){
    $('#msg_content').empty();
    setTimeout( function(){
    $.toast( "共清理"+ret.data+'条会话数据' , 'text' );
} , 200 );
}else{
    $.toast( ret.data , 'text' );
}
} , '/Api/Ai/clear_chat'  , {} );
},'温馨提示','是否确认清理，清理后所有的对话数据被清空！','取消','确定');
}
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    $(function() {

    if (!isApp()) {
    $('.weui-header').show();
    $('.master_main').css( 'padding-top' , '60px' );
    $('.master_foot_fix').css('bottom' , '58px');
    $('#msg_content').css( 'padding-bottom' , '60px' );
    $('.weui-tab').show();
    $('.weui-tab').tab({
    defaultIndex: 0,
    activeClass: 'weui-bar__item_on',
    onToggle: function (index) {
    if (index === 0) {
    //goto('/Ai/Index/index');
} else if ( index === 1) {
    goto('/Ai/Feature/index');
}else {
    goto('/Ai/User/index');
}
}
});
    if( isIOS ){
    $('.tab-bottom').css( 'padding-bottom' , '20px' );
    $('.master_foot_fix').css('bottom' , '78px');
}

    if (role_code == 'none') {
    $('.master_limitations').show();
    load();
    loadHistory();
} else {
    if( isLogin() ){
    $('.master_limitations').hide();
    loadRole();
}
}
    if( isLogin() && isPC() ){
    var flag = get( 'show_app' );
    if( flag != 1 ){
    set( 'show_app' , 1);
    $('#download').show();
}
}

    if( isPC() ){
    var url = "https://ai.paomob.cn/chatgpt/";
    const canvas = qrcanvas.qrcanvas({data:url,size:300,foreground:'black',background:'white'});
    //$('#qr').empty().html(canvas);
    var img = canvas.toDataURL("image/jpeg", 1);
    $('.download_qrcode').attr( 'src' , img );
    $('.float_client').show();
}else{
    $('.float_client').hide();
}

    if( params.web_clip == 1 ){
    web_clip = 1;
}else{
    web_clip = get('web_clip');
}
    //web_clip
    if( web_clip ){
    web_clip = 1;
    $('#download_app').remove();
    set( 'web_clip' , 1 );
    var is_act = get( 'is_act');
    if( is_act != 1 ){
    _ajax( function(ret){
    if( ret.code == 0 ){
    set( 'download_id' , ret.data );
}
    set( 'is_act' , 1 );
} , '/Api/Index/activate' , {} );
}
    var is_device = get('device');
    if( isLogin() && is_device != 1 ){
    var download_id = get('donwload_id');
    var data = {
    'device_id':download_id,
    'app_version':navigator.appVersion,
    'system_type': 'ios',
    'system_version': navigator.userAgent,
    'api_appid': 'web_clip',
    'device_model':navigator.platform,
    'device_name':navigator.platform,
    'ui_mode':'ios',
    'screen_width': window.screen.width,
    'screen_height':window.screen.height,
    'download_id':download_id,
};
    _ajax( function(ret ){
    set( 'device' , 1 );
} , '/Api/User/device' , data );
}
}
}

    $(window).resize(function(){
    resize();
});

    $('#clean').click( function(){
    clear();
});

    //下载APP
    $('#download_app').click( function(){
    if( isPC() ){
    //显示二维码
    $('#download').show();
    return
}
    if( !isApp() ){
    goto( "https://ai.paomob.cn/chatgpt" );
    return;
}
    alert( "您已经在使用的是App" );
});

    //模板生成
    $(document).on('click','.run_btn',function () {
    if (isApp()) {
    device_notice(0);
}
    var flag = true;
    var params = {};
    console.log('template:' + JSON.stringify(template));
    for (var i in template) {
    var id = template[i].id
    var name = template[i].name;
    var titile = template[i].titile;
    var max = template[i].max;
    var placeholder = template[i].placeholder;
    var widget = template[i].widget;
    var val = $('#' + template[i].id).val();
    console.log('id:' + id);
    console.log('val:' + val);
    if (empty(val)) {
    $.toast('请输入' + titile,'text');
    flag = false;
    return false;
} else if (name == 'num' && val > max) {
    $.toast('最多只能' + max + '个字哦','text');
    flag = false;
    return false;
} else {
    flag = true;
}

    params[name] = val;
}

    if (!flag) return;
    var content = role.content;
    for (var p in params) {
    content = content.replace(p, params[p]);
}
    setTimeout(function () {
    //api.closeFrame();
    $('#template_view').hide();
},300);
    $('.ipt').val(content);
    submit();
    /*
    api.sendEvent({
        name: 'gen_template_event',
        extra: params
    });*/

});

    $("#language").picker({
    title: "选择目标语言",
    showDistrict: false,
    cols: [
{
    textAlign: 'center',
    values: ['英语','汉语','日语','韩语','法语','德语','意大利语','西班牙语','葡萄语']
}
    ],
    onChange: function(p, v, dv) {
    console.log(p, v, dv);
},
    onClose: function(p, v, d) {
    console.log("close");
}
});

    $(document).keydown(function (event) {
    if (event.keyCode == 13) {
    if (is_click) return;
    $('.btn').click();
}
});

    $(document).on('click','.master_item',function () {
    if (isApp()) {
    device_notice(0);
}
    var text = $(this).data('text');
    $('.ipt').val(text);
    user_input = 0;
});



    $(document).on('click','.btn',function () {
    if (isApp()) {
    device_notice(0);
}

    submit();
});

    var isInput = false;

    $(document).on( 'click','.ipt',function () {

});

    $(document).on('input','.ipt',function () {
    user_input = 1;
    isInput = true;
    console.info( isInput );
});


    $('.ipt').blur(function(){
    //保存
    //var text = $('.weui-textarea').val();
    //set('chat_text'+to_uid , text );
    isInput = false;
    //scrollBottom();
    //$("textarea").css( 'height' ,'auto' );
});


    $(document).on('click','.chatbox_right',function () {
    /* var obj = $(this).find('.chatbox_tag_box');
    var display = obj.css('display');
    if (display == 'none') {
        $('.chatbox_tag_box').hide();
        obj.show();
    } else {
        obj.hide();
    } */
});


    $(document).on('click','.chatbox_left',function () {
    /* var obj = $(this).find('.chatbox_tag_box');
    var display = obj.css('display');
    if (display == 'none') {
        $('.chatbox_tag_box').hide();
        obj.show();
    } else {
        obj.hide();
    } */
});

    $('.gotmp_txt').click(function () {
    if (isApp()) {
    device_notice(0);
}

    if (is_loading) return;
    var role_tips = get('role_tips');
    var that = $(this);

    if (role_tips) {
    that.next().hide();
} else {
    that.next().show();
}

    that.next().hide();
    set('role_tips',1);
    if( isApp() ){
    openFrame('role_template','/Ai/Index/rolefrm',{template:template},{
    animation:{
    type:"fade",                //动画类型（详见动画类型常量）
    subType:"from_bottom",       //动画子类型（详见动画子类型常量）
    duration:300                //动画过渡时间，默认300毫秒
}
})
}else{
    $('#template_view').show();
}

});

    $(document).on('click','.keep',function () {
    if (isApp()) {
    device_notice(0);
}
    var id = $(this).data('iid');
    var flag = $(this).data('is_fav');
    flag = flag ? 0 : 1;
    _ajax(function (ret) {
    if (ret.code == 0) {
    if (flag == 0) {
    $('div[data-iid="' + id + '"]').text('收藏');
    $('div[data-iid="' + id + '"]').data('is_fav',0);
} else {
    $('div[data-iid="' + id + '"]').text('已收藏');
    $('div[data-iid="' + id + '"]').data('is_fav',1);
}
    $.toast(ret.data,'text');
} else {

}
},'/Api/Talk/fav',{type:7,id:id,flag:flag});
});

    $(document).on('click','.robot_copy',function () {
    if (isApp()) {
    device_notice(0);
}
    var id = $(this).data('id');
    var content = $('#' + id).text();
    copyPrompt(content);
});

    $(document).on('click','.user_copy',function () {
    if (isApp()) {
    device_notice(0);
}
    var prompt = $(this).data('prompt');
    copyPrompt(prompt);
});
});

    function copyPrompt(str) {
    if (isApp()) {
    var clipBoard = api.require('clipBoard');
    clipBoard.set({
    value: str
}, function(ret, err) {
    if (ret) {
    $.toast( '已复制到粘贴板' ,'text');
} else {
    $.toast( '复制失败' ,'text');
}
});
} else {
    var aux = document.createElement("input");
    aux.setAttribute("value", str);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    $.toast("复制成功",'text');
}
}

    function submit() {
    is_click = true;
    if ( needLogin() ){
    is_click = false;
    return;
}

    var obj = $('.btn');
    var prompt =  $('.ipt').val();
    if (empty(prompt)) {
    is_click = false;
    $.toast('请输入提问内容','text');
    return;
}

    obj.hide();
    obj.next().show();
    try_num = 0;
    _ajax(function (ret) {
    if (ret.code == 0) {
    $('.ipt').val('');
    var data = ret.data;
    id = data.id;
    var headimgurl = data.headimgurl;
    var uid = data.uid;
    var member = data.member;
    data.prompt = prompt;
    _parseTemplete('msg_content','user_content_tpl',data,'append');
    if (isApp()) {
    api.setTabLayoutAttr({
    title: titleTip
});
}
    robot(data.id);
    setTimeout( function(){
    scrollBottom();
} , 100 );
} else if (ret.code == -10) {
    obj.show();
    obj.next().hide();
    if( isApp() ){
    openVipTips();
}else{
    if( web_clip ){
    $('#viptips').show();
    return;
}
    $.confirm( '您的免费次数已用完,请升级会员或下载App', '温馨提示',function () {
    if( isPC() ){
    $('#download').show();
}else{
    goto('/chatgpt/index.html?v='+time());
}
},function(){
    $('#viptips').show();
});
}

} else {
    obj.show();
    obj.next().hide();
    $.toast(ret.data,'text');
}

    is_click = false;
},'/Api/Ai/chat_post',{user_input:user_input,role_code:role_code,prompt:prompt});
}

    function listenMsg(id) {
    $('#' + id).html("");
    var is_frist_wrap = false;
    var last_wrap = false;
    var is_done = false;
    is_loading = true;
    if(window.EventSource) {

    var chat_api_list = JSON.parse(get('chat_api_list'));
    var url = api_url + '/Ai/Index/chat?format=json&id=' + id
    if (!empty(chat_api_list)) {
    url = chat_api_list[Math.floor((Math.random()*chat_api_list.length))] + '?format=json&id=' + id;
}
    //var url = '/Ai/Index/chat?id=' + id;
    var eventSourceInitDict = {headers: {'xxxxxx': 'test=test'}};
    var eventSource = new EventSource(url, eventSourceInitDict);

    eventSource.onmessage = function (e) {
    //document.getElementById(id).innerHTML += e.data + '';
    // document.body.innerHTML += e.data + '';
};

    eventSource.addEventListener("open", function () {
    robot_answer = '';
    is_done = false;
    temp_num = 0;
    console.log("和服务器建立连接");
});

    //监听msg事件
    eventSource.addEventListener('msg', function (e) {
    $('.robot_shape_' + id).hide();
    $('.robot_content_' + id).show();
    $('.ipt').attr('disabled','disabled');
    console.log('服务器msg数据为:' + e.data);
    /*
    if (empty(e.data) || e.data == '</br>'  || e.data == '<br>'  ) {
        console.log('msg:null');
        if(  !is_frist_wrap ){
            return;
        }
        if( !last_wrap )
        {

        }
        document.getElementById(id).innerHTML += '</br>';
        last_wrap = true;
        is_loading = false;
    } else {
        is_frist_wrap = true;
        last_wrap = false;
        document.getElementById(id).innerHTML += e.data + '';
        is_loading = true;
    }*/
    var json = str2json( e.data );
    var word = json['word'];
    if( word == null ){
    word = '';
}
    robot_answer = robot_answer + word;
    temp_num = temp_num +1;
    if( temp_num >= 1 )
{
    $('#'+id).html( md.render( robot_answer ) );
    temp_num = 0;
    setTimeout( function(){
    scrollBottom();
} , 100 );
}

});

    //监听done事件
    eventSource.addEventListener('done', function (e) {
    temp_num = 0;
    $('#'+id).html( md.render( robot_answer ) );
    is_done = true;
    try_num = 0;
    resize();
    if (isApp()) {
    if (role_code == 'none') {
    api.setTabLayoutAttr({
    title: '首页'
});
} else {
    api.setTabLayoutAttr({
    title: title
});
}
}
    is_loading = false;
    $('.ipt').removeAttr("disabled");
    console.log('服务器done');
    $('#' + id).next().hide();
    $('.btn').show();
    $('.loading_shape').hide();
    eventSource.close();
    setTimeout( function(){
    scrollBottom();
} , 100 );
});


    //处理服务器响应报文中的load事件
    eventSource.addEventListener("load", function (e) {
    try_num = 0;
    console.log("服务器load数据为:" + e.data);
});

    //如果服务器响应报文中没有指明事件，默认触发message事件
    eventSource.addEventListener("message", function (e) {
    console.log("服务器发送给客户端的数据为:" + e.data);
});

    //发生错误，重试输出
    eventSource.addEventListener("try", function (e) {
    robot_answer = '';
    eventSource.close();
    if( try_num > 3 ){
    $('#' + id).html( "抱歉，当前AI服务器繁忙，请稍后再试哈。");
    return;
}
    confirmDialog(function () {
    try_num = try_num +1;
    $('#' + id).html(e.data);
    listenMsg(id);
},'温馨提示','当前AI出现了点小故障，未能完成回答，是否需要重新获取回答？','取消','重新获取');
});

    //50x 40x类
    eventSource.addEventListener("onerror", function (e) {
    is_loading = false;
});
    //发生错误，则会触发error事件
    eventSource.addEventListener("error", function (e) {
    eventSource.close();
    if( is_done ){
    return;
}
    robot_answer = '';
    console.log("服务器error数据为:" + e.data);
    if( try_num > 3 ){
    $('#' + id).html( "抱歉，当前AI服务器繁忙，请稍后再试哈。");
    return;
}
    if (isApp()) {
    if (role_code == 'none') {
    api.setTabLayoutAttr({
    title: '首页'
});
} else {
    api.setTabLayoutAttr({
    title: title
});
}
}
    $('#' + id).html("有点小故障...");
    confirmDialog(function () {
    try_num = try_num +1;
    listenMsg(id);
},'温馨提示','当前AI出现了点小故障，未能完成回答，是否需要重新获取回答？','取消','重新获取');

    $('.ipt').removeAttr("disabled");
    $('.btn').show();
    $('.loading_shape').hide();
    $('.robot_content_' + id).show();
    $('.blinker').remove();
    //$('#' + id).html(e.data);
    is_loading = false;
});
}else{
    console.log("服务器不支持EvenSource对象");
}
}

    function load() {
    load_num = load_num + 1;
    _ajax(function (ret) {
    if (ret.code == 0) {
    if( ret.data.display == 0 && load_num == 1) {
    if( isApp() ){
    _getImei( function(){});
}
}
    var chat_api_list = ret.data.chat_api_list
    if (empty(chat_api_list)) {
    chat_api_list = [api_url + '/Ai/Index/chat'];
}
    set('chat_api_list',JSON.stringify(chat_api_list));
    append(ret.data);
} else {
    $.toast(ret.data,'text');
}
},'/Api/Index/ai_index')
}


    function loadRole() {
    _ajax(function (ret) {
    if (ret.code == 0) {
    role = ret.data.role;
    template = ret.data.template;
    if (!empty(template)) {
    $('.gotmp').show();
    var role_tips = get('role_tips');

    if (role_tips) {
    $('.gotmp_tips').hide();
} else {
    $('.gotmp_tips').show();
}
    if( isApp() ){
    $('.gotmp_txt').click();
}else{
    _parseTemplete('template','template_tpl',{template:template});
    $('.gotmp_txt').click();
}

} else {
    $('.gotmp').hide();
}
    _parseTemplete('msg_content','demo_tpl',ret.data,'append');
    resize()
} else {
    $.toast(ret.data,'text');
}
},'/Api/Ai/role_config',{role_code:role_code,new_version:1});
}

    function robot(id) {
    resize();
    _parseTemplete('msg_content','robot_content_tpl',{id:id},'append');
    listenMsg(id);
}

    function append(data) {
    _parseTemplete('main','main_tpl',data);
}

    function resize(){
    var width = $('body').width();
    width = width - 100;
    if( isPC() ){
    width = 600;
}
    $('.hljs').css( 'overflow-x'  , ' auto');
    $('.hljs').css( 'max-width'  , width + 'px');
    $('.text').css('max-width', width + 'px')
    $('code').css('max-width', width + 'px');
    $('.text ul').css('max-width',width + 'px');
    $('.text ul').css('width',width + 'px');

}

    function scrollBottom(){
    $('#msg_end').click();
    /*  if( $('#msg_content').children().length == 0){
         return;
     }
     $('#msg_content').children( ".chatbox_receiver")[0].scrollIntoView(); */
}
    </script></html>