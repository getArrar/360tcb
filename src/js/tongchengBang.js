//city.json热门城市部分
var hotCity;
var cityList;
$.getJSON("http://localhost:8080/src/data/city.json", function(res) {
	var cityObj = res.result;
	hotCity = cityObj.hotcity;
	cityList = cityObj.citylist;
	$(".hot").html(baidu.template("temohou", {
		hotCity: hotCity
	}))
	$(".list").html(baidu.template("temolist", {
		obj: cityList
	}))

})
//city.json热门城市部分

//xiu1.json修手机pad部分，
$.getJSON("http://localhost:8080/src/data/xiu1.json", function(res) {
	var xiu1Obj = res.result;
	$(".li1-div").html(baidu.template("temoXiu", {
		xiu1Obj: xiu1Obj
	}));
})
//xiu1.json修手机pad部分，

//xiu2.json修电脑部分
var hot;
var other;
$.getJSON("http://localhost:8080/src/data/xiu2.json", function(res) {
	var xiu2Obj = res.result;
	hot = xiu2Obj.hot;
	other = xiu2Obj.other;
	$("#top").html(baidu.template("temoXiu2top", {
		xiu2Obj: xiu2Obj
	}));
	$("#botm").html(baidu.template("temoXiu2btom", {
		xiu2Obj: xiu2Obj
	}));
})
//xiu2.json修电脑部分

//xiu3.json卖手机/电脑部分

$.getJSON("http://localhost:8080/src/data/xiu3.json", function(res) {
	var xiu3Obj = res.result;
	$(".li3-div").html(baidu.template("temoXiu3", {
		xiu3Obj: xiu3Obj
	}));
})
//xiu3.json卖手机/电脑部分

//xiu4.json卖二手手机部分

$.getJSON("http://localhost:8080/src/data/xiu4.json", function(res) {
	var xiu4Obj = res.result;
	$(".li4-div").html(baidu.template("temoXiu4", {
		xiu4Obj: xiu4Obj
	}));
})
//xiu4.json卖二手手机部分

//shoujihuishou.json热门手机回收部分

$.getJSON("http://localhost:8080/src/data/shoujihuishou.json", function(res) {
	var huiShou = res.result;
	$(".right").html(baidu.template("huiShou", {
		huiShou: huiShou
	}));

})
//shoujihuishou.json热门手机回收部分

//shoujihuishou.json优品精选部分

$.getJSON("http://localhost:8080/src/data/youpinjingxuan.json", function(res) {
	var youpin = res.result;
	$(".right2").html(baidu.template("youpin", {
		youpin: youpin
	}));

})
//shoujihuishou.json优品精选部分

//shop1.json店铺详情部分
function moren() {

	$.getJSON("http://localhost:8080/src/data/shop1.json", function(req, res) {
		$(".v_2").html(baidu.template("shop1", {
			req: req
		}));
	})
}
moren()

$.getJSON("http://localhost:8080/src/data/shop1.json", function(req, res) {
	$(".ul_5").html(baidu.template("remen", {
		req: req
	}));

})
//shop1.json店铺详情部分
//shop2.json成交量部分
function chengJiao() {

	$.getJSON("http://localhost:8080/src/data/shop2.json", function(res) {
		var chengJiao = res.shop_data;
		$(".v_2").html(baidu.template("shop2", {
			chengJiao: chengJiao
		}));

	})
}
//shop2.json成交量部分
//shop3.json人气部分
function renqi() {
	$.getJSON("http://localhost:8080/src/data/shop3.json", function(res) {
		var chengJiao = res.shop_data;
		console.log(chengJiao);
		$(".v_2").html(baidu.template("shop3", {
			chengJiao: chengJiao
		}));
	})
}
//shop3.json人气部分
function changeCity(key) {
	var City = cityList[key];
	$(".city").html(baidu.template("temoCity", {
		City: City
	}))
}
//选择城市写入html中
function chrngshi(city) {
	$("#city").html(city)
	$("#nav").stop().hide()
}
//显示隐藏部分
$("#btn").click(function() {
	$("#nav").stop().hide()
});

$("#xianshi").click(function() {
	$("#nav").stop().show();
});

$(".li1").hover(function() {
	$(".li1-div").stop().show();
}, function() {
	$(".li1-div").stop().hide()
});

$(".li2").hover(function() {
	$(".li2-div").stop().show();
}, function() {
	$(".li2-div").stop().hide()
});

$(".li3").hover(function() {
	$(".li3-div").stop().show();
}, function() {
	$(".li3-div").stop().hide()
});

$(".li4").hover(function() {
	$(".li4-div").stop().show();
}, function() {
	$(".li4-div").stop().hide()
});
//进入店铺跳转发送id函数
function oPon(id) {
	window.open("http://localhost:8080/src/html/dome.html/" + id);
}

//登陆
$("#login").click(function() {
	$("#zhezhao").stop().show()
	$("#denglu_1").stop().hide()
})
$("#deng").click(function() {
	$("#denglu_1").stop().show()
	$("#zhezhao").stop().hide()
})

//注册 发送前台文本框的value
$("#zhuce").click(function() {

	var obj = {
		user: $("#user").val(),
		pass: $("#pwd").val()
	}
	$.get("http://localhost:8080/zhuce", obj, function(res) {
		if(res == "注册成功") {
			$("#zhezhao").css("display", "none")
			$("#denglu_1").css("display", "block")
			$("#user").val("")
			$("#pwd").val("")
		}
	})
})
//注册 发送前台文本框的value
//登陆 发送前台文本框的value
$("#denglu").click(function() {
	var obj = {

		user: $("#user1").val(),
		pass: $("#pwd1").val()
	}
	$.get("http://localhost:8080/denglu", obj, function(res) {
		if(res == 1) {
			$("#user1").val("")
			$("#pwd1").val("")
		}
	})
})
//登陆 发送前台文本框的value

//用户名文本框失焦事件
$("#user").blur(function() {
	var obj = {
		user: $("#user").val()
	}
	$.get("http://localhost:8080/yanzheng", obj, function(res) {

		if(res == 1) {
			$(".span-1").html("用户名已存在")
		} else {
			$(".span-1").html("用户名已可用")
		}
	})

})
//登陆
$("#denglu").click(function() {
	var obj = {
		user: $("#user1").val(),
		pass: $("#pwd1").val()
	}
	$.get("http://localhost:8080/denglu", obj, function(res) {
		if(res == 1) {
			$("#denglu_1").css("display", "none")
			alert("登陆成功")
		} else {
			alert("账号或密码错误")
		}
	})
})

var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 2000,
	},

});