# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'jnitrace.ui'
#
# Created by: PyQt5 UI code generator 5.11.3
#
# WARNING! All changes made in this file will be lost!

from PyQt5 import QtCore, QtGui, QtWidgets

class Ui_JniTraceDialog(object):
    def setupUi(self, Dialog):
        Dialog.setObjectName("Dialog")
        Dialog.resize(412, 372)
        self.gridLayout_3 = QtWidgets.QGridLayout(Dialog)
        self.gridLayout_3.setObjectName("gridLayout_3")
        self.groupBox = QtWidgets.QGroupBox(Dialog)
        self.groupBox.setObjectName("groupBox")
        self.gridLayout = QtWidgets.QGridLayout(self.groupBox)
        self.gridLayout.setObjectName("gridLayout")
        self.label = QtWidgets.QLabel(self.groupBox)
        self.label.setMaximumSize(QtCore.QSize(60, 16777215))
        self.label.setObjectName("label")
        self.gridLayout.addWidget(self.label, 0, 0, 1, 1)
        self.cmbPackage = QtWidgets.QComboBox(self.groupBox)
        self.cmbPackage.setObjectName("cmbPackage")
        self.cmbPackage.addItem("")
        self.gridLayout.addWidget(self.cmbPackage, 0, 1, 1, 1)
        self.gridLayout_3.addWidget(self.groupBox, 0, 0, 1, 1)
        self.groupBox_2 = QtWidgets.QGroupBox(Dialog)
        self.groupBox_2.setObjectName("groupBox_2")
        self.gridLayout_2 = QtWidgets.QGridLayout(self.groupBox_2)
        self.gridLayout_2.setObjectName("gridLayout_2")
        self.label_3 = QtWidgets.QLabel(self.groupBox_2)
        self.label_3.setObjectName("label_3")
        self.gridLayout_2.addWidget(self.label_3, 0, 0, 1, 1)
        self.txtModule = QtWidgets.QLineEdit(self.groupBox_2)
        self.txtModule.setObjectName("txtModule")
        self.gridLayout_2.addWidget(self.txtModule, 0, 1, 1, 1)
        self.label_2 = QtWidgets.QLabel(self.groupBox_2)
        self.label_2.setObjectName("label_2")
        self.gridLayout_2.addWidget(self.label_2, 2, 0, 1, 1)
        self.txtMethod = QtWidgets.QLineEdit(self.groupBox_2)
        self.txtMethod.setObjectName("txtMethod")
        self.gridLayout_2.addWidget(self.txtMethod, 2, 1, 1, 1)
        self.horizontalLayout = QtWidgets.QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.btnSubmit = QtWidgets.QPushButton(self.groupBox_2)
        self.btnSubmit.setMaximumSize(QtCore.QSize(120, 16777215))
        self.btnSubmit.setObjectName("btnSubmit")
        self.horizontalLayout.addWidget(self.btnSubmit)
        self.btnClear = QtWidgets.QPushButton(self.groupBox_2)
        self.btnClear.setMaximumSize(QtCore.QSize(120, 16777215))
        self.btnClear.setObjectName("btnClear")
        self.horizontalLayout.addWidget(self.btnClear)
        self.gridLayout_2.addLayout(self.horizontalLayout, 3, 1, 1, 1)
        self.listModule = QtWidgets.QListWidget(self.groupBox_2)
        self.listModule.setObjectName("listModule")
        self.gridLayout_2.addWidget(self.listModule, 1, 1, 1, 1)
        self.gridLayout_3.addWidget(self.groupBox_2, 1, 0, 1, 1)

        self.retranslateUi(Dialog)
        QtCore.QMetaObject.connectSlotsByName(Dialog)

    def retranslateUi(self, Dialog):
        _translate = QtCore.QCoreApplication.translate
        Dialog.setWindowTitle(_translate("Dialog", "jnitrace"))
        self.groupBox.setTitle(_translate("Dialog", "指定缓存数据"))
        self.label.setText(_translate("Dialog", "进程名："))
        self.cmbPackage.setItemText(0, _translate("Dialog", "选择缓存数据"))
        self.groupBox_2.setTitle(_translate("Dialog", "jni_trace"))
        self.label_3.setText(_translate("Dialog", "模块名："))
        self.label_2.setText(_translate("Dialog", "函数名："))
        self.btnSubmit.setText(_translate("Dialog", "提交"))
        self.btnClear.setText(_translate("Dialog", "清空"))

