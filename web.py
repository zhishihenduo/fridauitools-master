from PyQt5 import QtCore, QtWidgets
from PyQt5 import QtWebEngineWidgets


class MainWindow(QtWidgets.QMainWindow):
	def __init__(self):
		super().__init__()
		self.setWindowFlag(QtCore.Qt.WindowStaysOnTopHint)
		self.setWindowTitle("聪明的二狗子")
		# 设置窗口大小和位置，这里设置为桌面右上角
		desktop = QtWidgets.QApplication.desktop()
		screenRect = desktop.screenGeometry()
		self.setGeometry(screenRect.width() - 500 - 50, 80, 500, 700)
		
		# 创建 QWebEngineView 对象并加载页面
		self.webview = QtWebEngineWidgets.QWebEngineView(self)
		# self.webview.setFixedSize(500, 700)  # 设置 webview 视图大小
		self.webview.load(QtCore.QUrl("http://luocaca.cn:1002"))
		
		# 将 QWebEngineView 添加到 QWidget 中
		widget = QtWidgets.QWidget(self)
		layout = QtWidgets.QVBoxLayout(widget)
		layout.addWidget(self.webview)
		self.setCentralWidget(widget)


if __name__ == "__main__":
	app = QtWidgets.QApplication([])
	window = MainWindow()
	window.show()
	app.exec_()
