# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'wifi.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_WifiDialog(object):
    def setupUi(self, Dialog):
        Dialog.setObjectName("Dialog")
        Dialog.resize(372, 212)
        self.gridLayout_2 = QtWidgets.QGridLayout(Dialog)
        self.gridLayout_2.setObjectName("gridLayout_2")
        self.groupBox = QtWidgets.QGroupBox(Dialog)
        self.groupBox.setObjectName("groupBox")
        self.gridLayout = QtWidgets.QGridLayout(self.groupBox)
        self.gridLayout.setObjectName("gridLayout")
        self.label_3 = QtWidgets.QLabel(self.groupBox)
        self.label_3.setObjectName("label_3")
        self.gridLayout.addWidget(self.label_3, 0, 0, 1, 1)
        self.txtAddress = QtWidgets.QLineEdit(self.groupBox)
        self.txtAddress.setObjectName("txtAddress")
        self.gridLayout.addWidget(self.txtAddress, 0, 1, 1, 2)
        self.label_4 = QtWidgets.QLabel(self.groupBox)
        self.label_4.setObjectName("label_4")
        self.gridLayout.addWidget(self.label_4, 1, 0, 1, 1)
        self.txtPort = QtWidgets.QLineEdit(self.groupBox)
        self.txtPort.setObjectName("txtPort")
        self.gridLayout.addWidget(self.txtPort, 1, 1, 1, 2)
        self.btnClear = QtWidgets.QPushButton(self.groupBox)
        self.btnClear.setMaximumSize(QtCore.QSize(120, 16777215))
        self.btnClear.setObjectName("btnClear")
        self.gridLayout.addWidget(self.btnClear, 2, 1, 1, 1)
        self.btnSubmit = QtWidgets.QPushButton(self.groupBox)
        self.btnSubmit.setMaximumSize(QtCore.QSize(120, 16777215))
        self.btnSubmit.setObjectName("btnSubmit")
        self.gridLayout.addWidget(self.btnSubmit, 2, 2, 1, 1)
        self.gridLayout_2.addWidget(self.groupBox, 0, 0, 1, 1)

        self.retranslateUi(Dialog)
        QtCore.QMetaObject.connectSlotsByName(Dialog)

    def retranslateUi(self, Dialog):
        _translate = QtCore.QCoreApplication.translate
        Dialog.setWindowTitle(_translate("Dialog", "无线连接设置"))
        self.groupBox.setTitle(_translate("Dialog", "设置"))
        self.label_3.setText(_translate("Dialog", "地址："))
        self.label_4.setText(_translate("Dialog", "端口："))
        self.txtPort.setText(_translate("Dialog", "1234"))
        self.txtAddress.setText(_translate("Dialog", "192.168.3.215"))
        self.btnClear.setText(_translate("Dialog", "清空"))
        self.btnSubmit.setText(_translate("Dialog", "提交"))
