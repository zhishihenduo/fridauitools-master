from capstone import *
import re,struct

def disasm(cmbidx,code):
    outdata=""
    if cmbidx==1:
        cs=Cs(CS_ARCH_ARM,CS_MODE_THUMB)
    else:
        cs = Cs(CS_ARCH_ARM64, CS_MODE_ARM)
    for i in cs.disasm(code,len(code)):
        outdata+="%s %s"%(i.mnemonic,i.op_str)
    return outdata


def StrToHexSplit(input):
    buf = bytes(0)
    lines = re.split(r'[\r\n ]',input)
    for code in lines:
        if len (code) <= 0:
            continue
        num = int(code,16)
        bnum = struct.pack('B',num)
        buf += bnum
    return buf
