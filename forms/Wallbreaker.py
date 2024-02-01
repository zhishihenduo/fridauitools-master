import json

from PyQt5.QtWidgets import QDialog, QMessageBox

from ui.wallBreaker import Ui_Wallbreaker


class DvmDescConverter:
    def __init__(self, desc):
        self.dvm_desc = desc

    def to_java(self):
        result = str(self.dvm_desc)
        result = result.strip()
        dim = 0
        while result.startswith('['):
            result = result[1:]
            dim += 1

        if result.startswith('L') and result.endswith(';'):
            result = result[1: -1]

        result = result.replace('/', '')

        result += "[]" * dim
        return result

    def short_name(self):
        result = self.to_java()
        if '.' in result:
            result = result[result.rindex(".") + 1:]
        return result


class wallBreakerForm(QDialog,Ui_Wallbreaker):
    def __init__(self, parent=None):
        super(wallBreakerForm, self).__init__(parent)
        self.setupUi(self)
        self.setWindowOpacity(0.93)
        self.btnClassSearch.clicked.connect(self.classSearch)
        self.btnClassDump.clicked.connect(self.classDump)
        self.btnObjectSearch.clicked.connect(self.objectSearch)
        self.btnObjectDump.clicked.connect(self.objectDump)
        self.btnClearUI.clicked.connect(self.clearUi)
        self.clearUi()
        self.listClasses.itemClicked.connect(self.ClassItemClick)
        self.txtClassName.textChanged.connect(self.changeClass)
        self.classes = None
        self.api=None

    def initData(self):
        self.listClasses.clear()
        for item in self.classes:
            self.listClasses.addItem(item)

    def ClassItemClick(self, item):
        self.txtClassName.setText(item.text())

    def changeClass(self, data):
        if self.classes==None or len(self.classes)<=0:
            return
        self.listClasses.clear()
        if len(data) > 0:
            for item in self.classes:
                if data in item:
                    self.listClasses.addItem(item)
        else:
            for item in self.classes:
                self.listClasses.addItem(item)

    def clearUi(self):
        self.txtClassName.setText("")
        self.txtSearchData.setPlainText("")
        self.txtAddress.setText("1")

    def class_match(self, pattern):
        return self.api.class_match(pattern)

    def class_use(self, name):
        return json.loads(self.api.class_use(name))

    def object_get_classname(self, handle):
        return self.api.object_get_class(handle)



    def object_get_field(self, handle, field, as_class=None):
        return self.api.object_get_field(handle, field, as_class)

    def object_search(self, clazz, stop=False):
        return self.api.object_search(clazz, stop)



    def appendLog(self,logstr):
        self.txtSearchData.appendPlainText(logstr)

    def classSearch(self):
        className=self.txtClassName.text()
        if len(className)<=0:
            QMessageBox().information(self, "提示", "未填写类名")
            return
        if self.api==None:
            QMessageBox().information(self, "提示", "未设置api,可能附加失败")
            return
        instances = self.api.class_match(className)
        self.appendLog("\n".join(instances))

    def classDump(self):
        className = self.txtClassName.text()
        if len(className) <= 0:
            QMessageBox().information(self, "提示", "未填写类名")
            return
        if self.api==None:
            QMessageBox().information(self, "提示", "未设置api,可能附加失败")
            return
        result= self.class_dump(className, pretty_print=False, short_name=True)
        self.appendLog(result)

    def objectSearch(self):
        className = self.txtClassName.text()
        if len(className) <= 0:
            QMessageBox().information(self, "提示", "未填写类名")
            return
        if self.api==None:
            QMessageBox().information(self, "提示", "未设置api,可能附加失败")
            return
        instances = self.object_search(className, stop=False)
        for handle in instances:
            self.appendLog("[{}]: {}".format(handle, instances[handle]))


    def objectDump(self):
        className = self.txtClassName.text()
        address = self.txtAddress.text()
        if len(address) <= 0:
            QMessageBox().information(self, "提示", "未填写地址")
            return
        if self.api==None:
            QMessageBox().information(self, "提示", "未设置api,可能附加失败")
            return
        res=self.object_dump(address, as_class=className, pretty_print=False, short_name=True)
        self.appendLog(res)
