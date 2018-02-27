var express = require("express");
var fs = require("fs");
var http = express();

http.listen(8080, function() {
	console.log("启动成功")
})                

http.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	next()
})

//接收前台发送的id 与 json 文件id 匹配 返回前台相对的数据
http.get("/getshop", function(req, res) {
	var id = req.query.id;
	fs.readFile("./src/data/shop1.json", "utf-8", function(err, data) {
		var arr = JSON.parse(data)
		console.log(arr)
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].shop_id == id) {
				res.send(arr[i])
			}
		}

	})

})
//注册登陆
http.get("/zhuce", function(req, res) {
	res.header("Access-Control-Allow-Origin", "*")

	var obj = req.query; //获取内容
	obj.id = (new Date()).getTime(); //定义毫秒为id
	fs.readFile("./src/data/userlist.json", "utf-8", function(err, data) { //读取json文件 添加
		if(err) {
			console.log(err)
		} else {
			var arr = JSON.parse(data) //转为对象
			arr.push(obj); //添加到数组
			fs.writeFile("./src/data/userlist.json", JSON.stringify(arr), "utf-8", function() { //从新写入
				res.send("注册成功");
			})
		}
	})
})
//注册登陆
//登陆登陆
http.get("/denglu", function(req, res) {
	var obj = req.query; //获取内容
	var flag = false
	fs.readFile("./src/data/userlist.json", "utf-8", function(err, data) { //读取json文件 添加
		if(err) {
			console.log(err)
		} else {
			var arr = JSON.parse(data) //转为对象
			for(var i = 0; i < arr.length; i++) {
				if(arr[i].user == obj.user&&arr[i].pass == obj.pass) {
					res.send("1")
					flag = true;
					break;
				} 
			}
			if(!flag)
			{
				res.send("0")
			}
		}
	})
})
//登陆登陆
//文本框失焦
http.get("/yanzheng", function(req, res) {
	var obj = req.query; //获取内容
	var flag = false
	fs.readFile("./src/data/userlist.json", "utf-8", function(err, data) { //读取json文件 添加
		if(err) {
			console.log(err)
		} else {
			var arr = JSON.parse(data) //转为对象
			for(var i = 0; i < arr.length; i++) {
				if(arr[i].user == obj.user) {
					res.send("1")
					flag = true;
					break;
				} 
			}
			if(!flag)
			{
				res.send("0")
			}
		}
	})
})
//文本框失焦
//跳转发送id
http.get("/src/html/dome.html/:id", function(req, res) {
	console.log(req.params["id"])
	res.sendFile(__dirname + "/src/html/dome.html")
})

http.all("*", function(req, res) {
	//	console.log(1)
	res.sendFile(__dirname + req.url)
})