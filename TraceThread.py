# -*- coding: utf-8 -*-
import re
import socket
import struct
from copy import copy

from PyQt5.QtCore import *
import frida
import json
import hexdump
import hashlib
import os

from utils import CmdUtil

md5 = lambda bs: hashlib.md5(bs).hexdigest()


# 继承QThread
class Runthread(QThread):
    #  通过类成员对象定义信号对象
    # 功能日志信号
    loggerSignel = pyqtSignal(str)
    # 输出日志
    outloggerSignel = pyqtSignal(str)
    # 线程退出信号
    taskOverSignel = pyqtSignal()
    # 获取一些附加成功就可以取的通用信息。这里暂时还不知道初始化一些啥信息比较好。先打通流程
    loadAppInfoSignel = pyqtSignal(str)
    searchAppInfoSignel = pyqtSignal(str)
    # 附加成功的信号
    attachOverSignel = pyqtSignal(str)

    def __init__(self, hooksData, attachName, isSpawn, connType):
        super(Runthread, self).__init__()
        self.hooksData = hooksData
        self.attachName = attachName
        self.scripts = []
        self.default_script = None
        self.device = None
        self.isSpawn = isSpawn
        self.DEXDump = False
        self.enable_deep_search = False
        self.customCallFuns = []
        self.connType = connType
        self.address = ""
        self.port = ""

    def quit(self):
        if self.scripts:
            for s in copy(self.scripts):
                try:
                    s.unload()
                    self.log("trace script unload")
                    self.scripts.remove(s)
                except Exception as ex:
                    print(ex)
        self.taskOverSignel.emit()

    def log(self, msg):
        self.loggerSignel.emit(msg)

    def outlog(self, msg):
        self.outloggerSignel.emit(msg)

    def _attach(self, pname):
        if not self.device: return
        self.log("attach '{}'".format(pname))
        try:
            if self.isSpawn:
                pid = self.device.spawn([pname])
                session = self.device.attach(pid)
                self.device.resume(pid)
            else:
                session = self.device.attach(pname)
            # session.enable_child_gating()
            source = ""
        except Exception as ex:
            self.log("附加异常:" + str(ex))
            return

        for item in self.hooksData:
            if item == "r0capture":
                source += open('./js/r0capture.js', 'r', encoding="utf8").read()
            elif item == "jnitrace":
                source += open('./js/jni_trace_new.js', 'r', encoding="utf8").read()
                source = source.replace("%moduleName%", self.hooksData[item]["class"])
                source = source.replace("%methodName%", self.hooksData[item]["method"])
                source = source.replace("%spawn%", "")
            elif item == "ZenTracer":
                source += open('./js/trace.js', 'r', encoding="utf8").read()
                match_s = str(self.hooksData[item]["traceClass"]).replace('u\'', '\'')
                black_s = str(self.hooksData[item]["traceBClass"]).replace('u\'', '\'')
                match_method = str(self.hooksData[item]["traceMethod"]).replace('u\'', '\'')
                match_bmethod = str(self.hooksData[item]["traceBMethod"]).replace('u\'', '\'')
                source = source.replace('{MATCHREGEX}', match_s).replace("{BLACKREGEX}", black_s)
                source = source.replace('{MATCHREGEXMETHOD}', match_method).replace("{BLACKREGEXMETHOD}", match_bmethod)
                source = source.replace('%stack%', self.hooksData[item]["stack"])
                source = source.replace('%hookInit%', self.hooksData[item]["hookInit"])
                source = source.replace('%isMatch%', self.hooksData[item]["isMatch"])
                source = source.replace('%isMatchMethod%', self.hooksData[item]["isMatchMethod"])
            elif item == "match_sub":
                source += open('./js/traceNative.js', 'r', encoding="utf8").read()
                source = source.replace("%moduleName%", self.hooksData[item]["class"])
                source = source.replace("%spawn%", "")
                methods = self.hooksData[item]["method"].split(",")
                methods_s = str(methods).replace('u\'', '\'')
                source = source.replace('{methodName}', methods_s)
            elif item == "sslpining":
                source += open('./js/DroidSSLUnpinning.js', 'r', encoding="utf8").read()
            elif item == "hookEvent":
                source += open("./js/hookEvent.js", 'r', encoding="utf8").read()
            elif item == "RegisterNative":
                source += open("./js/hook_RegisterNatives.js", 'r', encoding="utf8").read()
            elif item == "ArtMethod":
                source += open("./js/hook_artmethod.js", 'r', encoding="utf8").read()
            elif item == "libArm":
                source += open("./js/hook_art.js", 'r', encoding="utf8").read()
            elif item == "javaEnc":
                source += open("./js/javaEnc.js", 'r', encoding="utf8").read()
            elif item == "stakler":
                source += open("./js/sktrace.js", 'r', encoding="utf8").read()
                source = source.replace("%moduleName%", self.hooksData[item]["class"])
                source = source.replace("%spawn%", "1" if self.isSpawn else "")
                source = source.replace("%symbol%", self.hooksData[item]["symbol"])
                source = source.replace("%offset%", self.hooksData[item]["offset"])
            elif item == "custom":
                for item in self.hooksData["custom"]:
                    customJs = open("./custom/" + item["fileName"], 'r', encoding="utf8").read()
                    customJs = customJs.replace("%customName%", item["class"])
                    customJs = customJs.replace("%customFileName%", item["fileName"])
                    # rpc.export.call_demo1= 匹配出主动调用要用的rpc函数
                    it = re.finditer(r"call_funs\.(.+?)=", customJs)
                    self.customCallFuns.clear()
                    for match in it:
                        self.customCallFuns.append(match.group(1))
                    source += "(function(){\n%s\n})();" % customJs
            elif item == "tuoke":
                tuokeType = self.hooksData[item]["class"]
                if tuokeType == "dumpdex":
                    res = CmdUtil.dumpdexInit(self.attachName)
                    self.log(res)
                    source += open("./js/dump_dex.js", 'r', encoding="utf8").read()
                    source = source.replace("%spawn%", "1" if self.isSpawn else "")
                elif tuokeType == "dumpdexclass":
                    res = CmdUtil.dumpdexInit(self.attachName)
                    self.log(res)
                    source += open("./js/dump_dex_class.js", 'r', encoding="utf8").read()
                    source = source.replace("%spawn%", "1" if self.isSpawn else "")
                elif tuokeType == "FRIDA-DEXDump":
                    source += open("./js/FRIDA-DEXDump.js", 'r', encoding="utf8").read()
                    self.DEXDump = True
                elif tuokeType == "cookieDump":
                    source += open("./js/cookieDump.js", 'r', encoding="utf8").read()
                elif tuokeType == "fart":
                    # savepath="/data/local/tmp/fart/"+self.attachName
                    savepath = "/data/data/" + self.attachName + "/fart/"
                    res = CmdUtil.fartInit(savepath)
                    self.log(res)
                    source += open("./js/frida_fart_hook.js", 'r', encoding="utf8").read()
                    source = source.replace("%savepath%", savepath)
            elif item == "patch":
                patchList = {}
                moduleName = ""
                for patch in self.hooksData[item]:
                    patchList[patch["address"]] = {
                        "moduleName": patch["class"],
                        "code": patch["code"],
                    }
                    moduleName = patch["class"]
                if len(patchList) > 0:
                    source += open("./js/patchCode.js", 'r', encoding="utf8").read()
                    print(json.dumps(patchList))
                    source = source.replace("{PATCHLIST}", json.dumps(patchList))
                    source = source.replace("%spawn%", "1" if self.isSpawn else "")
                    source = source.replace("%moduleName%", moduleName)

        source += open("./js/default.js", 'r', encoding="utf8").read()
        source = source.replace("%spawn%", "1" if self.isSpawn else "")
        source += open("./js/Wallbreaker.js", 'r', encoding="utf8").read()

        self.source = source;

        script = session.create_script(source)
        script.on("message", self.on_message)
        self.attachOverSignel.emit(pname)
        script.load()

        # <frida.core.ScriptExports object at 0x00000220537BE790>
        self.default_script = script
        self.scripts.append(script)
        if self.DEXDump:
            if self.enable_deep_search:
                script.exports.switchmode(True)
                self.outlog("[DEXDump]: deep search mode is enable, maybe wait long time.")
            mds = []
            self.dump(pname, script.exports, mds=mds)

    # 重载 代码
    def reloadScript(self):
        self.outlog("SSL Session: " + p["ssl_session_id"])

    def r0capture_message(self, p, data):
        if data == None or len(data) == 1:
            self.outlog(p["function"])
            if len(p["stack"]) > 0:
                self.outlog(p["stack"])
            return

        src_addr = socket.inet_ntop(socket.AF_INET,
                                    struct.pack(">I", p["src_addr"]))
        dst_addr = socket.inet_ntop(socket.AF_INET,
                                    struct.pack(">I", p["dst_addr"]))
        self.outlog("SSL Session: " + p["ssl_session_id"])
        self.outlog("[%s] %s:%d --> %s:%d" % (
            p["function"],
            src_addr,
            p["src_port"],
            dst_addr,
            p["dst_port"]))

        self.outlog(p["stack"])
        res = hexdump.hexdump(data, "return")
        self.outlog("\n" + res)

    def default_message(self, p):
        if "appinfo" in p:
            self.loadAppInfoSignel.emit(p["appinfo"])
        elif "appinfo_search" in p:
            self.searchAppInfoSignel.emit(p["appinfo_search"])
        self.outlog(p["data"])

    def sktrace_message(self, p):
        if "data" in p:
            self.outlog(p["data"])
            return
        optype = p["type"]
        if optype == "inst":
            # print(p)
            inst = json.loads(p["val"])
            address = int(p["address"], 16)
            oplist = []
            for opdata in inst["operands"]:
                if opdata["type"] == "reg":
                    if opdata["value"] not in oplist:
                        oplist.append(opdata["value"])
                elif opdata["type"] == "mem":
                    memdata = opdata["value"]
                    if memdata["base"] not in oplist:
                        oplist.append(memdata["base"])
            enddata = ""
            for item in oplist:
                enddata += "%s={%s} " % (item, item)
            outdata = "tid:%s address:%s %s %s\t\t//%s" % (
                str(p["tid"]), str(hex(address)), inst["mnemonic"], inst["opStr"], enddata)
            self.outlog(outdata)
        elif optype == "ctx":
            context = json.loads(p["val"])
            address = int(p["address"], 16)
            self.outlog("tid:" + str(p["tid"]) + " address:" + str(hex(address)) + " context:" + p["val"])
        else:
            self.outlog(json.dumps(p))

    def other_message(self, p):
        self.outlog(p["data"])

    def showMethods(self, postdata):
        postdata["func"] = "showMethod"
        self.default_script.post({'type': 'input', 'payload': postdata})
        self.log("post showMethods:" + postdata["className"] + "," + postdata["methodName"])

    def showExport(self, postdata):
        postdata["func"] = "showExport"
        self.default_script.post({'type': 'input', 'payload': postdata})
        self.log("post showExport:" + postdata["moduleName"] + "," + postdata["methodName"])

    def dumpPtr(self, postdata):
        postdata["func"] = "dumpPtr"
        self.default_script.post({'type': 'input', 'payload': postdata})
        self.log("post dumpPtr:" + postdata["moduleName"] + "," + str(hex(postdata["address"])))

    def dumpSoPtr(self, postdata):
        postdata["func"] = "dumpSoPtr"
        self.default_script.post({'type': 'input', 'payload': postdata})
        self.log("post dumpSoPtr:" + postdata["moduleName"])

    def searchInfo(self, postdata):
        postdata["func"] = "searchInfo"
        self.default_script.post({'type': 'input', 'payload': postdata})
        self.log("post searchInfo")

    def fart(self, fartType, classes):
        # postdata["func"] = "fart"
        # self.default_script.post({'type': 'input', 'payload': postdata})
        # self.log("post fart")
        api = self.default_script.exports
        if fartType == 1:  # 使用frida的fart处理部分类
            api.fartclass(classes)
        elif fartType == 2:  # 使用frida的fart
            api.fart()
        elif fartType == 3:  # 使用rom的fart处理部分类
            api.romfartclass(classes)
        elif fartType == 4:  # 使用rom的fart完整处理
            api.romfart()

    def dumpdex(self):
        api = self.default_script.exports
        api.dumpdex()

    def on_message(self, message, data):
        if message["type"] == "error":
            self.outlog(json.dumps(message))
            return
        if "init" in message["payload"]:
            self.outlog(message["payload"]["init"])
            self.log(message["payload"]["init"])
            return
        if "jsname" not in message["payload"]:
            print("message data not found jsname payload:" + str(message["payload"]))
            return

        if message["payload"]["jsname"] == "default":
            self.default_message(message["payload"])
            return
        elif message["payload"]["jsname"] == "r0capture":
            self.r0capture_message(message["payload"], data)
        elif message["payload"]["jsname"] == "sktrace":
            self.sktrace_message(message["payload"])
        else:
            self.other_message(message["payload"])

    def _on_child_added(self, child):
        print("_on_child_added")
        for item in self.hooksData:
            self._attach(child.pid, item)
        self._attach(child.pid, "default")

    def run(self):
        if self.connType == "usb":
            self.device = frida.get_usb_device()
            # self.device.on("child-added", self._on_child_added)

        elif self.connType == "wifi":
            str_host = "%s:%s" % (self.address, self.port)
            manager = frida.get_device_manager()
            self.device = manager.add_remote_device(str_host)

        application = self.device.get_frontmost_application()

        if application == None:
            self.log("附加异常,application is None")
            self.attachOverSignel.emit("ERROR.无法获取到进程列表")
            return

        target = 'Gadget' if application.identifier == 're.frida.Gadget' else application.name
        packageName = application.identifier
        if len(self.attachName) <= 0:
            for process in self.device.enumerate_processes():
                if target == process.name:
                    self.attachName = process.name
                    break
                if packageName == process.name:
                    self.attachName = packageName
                    break

        self._attach(self.attachName)
        print("thread over")
        # self.taskOverSignel.emit()

    # DEXDump相关的
    def dex_fix(self, dex_bytes):
        import struct
        dex_size = len(dex_bytes)

        if dex_bytes[:4] != b"dex\n":
            dex_bytes = b"dex\n035\x00" + dex_bytes[8:]

        if dex_size >= 0x24:
            dex_bytes = dex_bytes[:0x20] + struct.Struct("<I").pack(dex_size) + dex_bytes[0x24:]

        if dex_size >= 0x28:
            dex_bytes = dex_bytes[:0x24] + struct.Struct("<I").pack(0x70) + dex_bytes[0x28:]

        if dex_size >= 0x2C and dex_bytes[0x28:0x2C] not in [b'\x78\x56\x34\x12', b'\x12\x34\x56\x78']:
            dex_bytes = dex_bytes[:0x28] + b'\x78\x56\x34\x12' + dex_bytes[0x2C:]

        return dex_bytes

    def dump(self, pkg_name, api, mds=None):
        """
        """
        if mds is None:
            mds = []
        matches = api.scandex()
        for info in matches:
            try:
                bs = api.memorydump(info['addr'], info['size'])
                md = md5(bs)
                if md in mds:
                    self.outlog("[DEXDump]: Skip duplicate dex {}<{}>".format(info['addr'], md))
                    continue
                mds.append(md)
                savePath = "./FRIDA_DEXDump/" + pkg_name + "/"
                if not os.path.exists(savePath):
                    os.makedirs(savePath)
                bs = self.dex_fix(bs)
                with open(savePath + info['addr'] + ".dex", 'wb') as out:
                    out.write(bs)
                self.outlog("[DEXDump]: DexSize={}, DexMd5={}, SavePath={}/{}.dex"
                            .format(hex(info['size']), md, savePath, info['addr']))
            except Exception as e:
                self.outlog("[Except] - {}: {}".format(e, info))
