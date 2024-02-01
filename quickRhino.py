import requests

if __name__ == '__main__':
	
	file_object1 = open("rhino.js", 'r', encoding='utf-8')
	read = file_object1.readlines()
	
	app = ""
	for line in read:
		if not app.startswith("//"):
			app += line
	
	print("result\n", app)
	url = "http://192.168.3.12:5602/invoke?group=test1&action=test1"
	data = {"js": app}
	res = requests.post(url=url, data=data)
	print(res.text)
	
	