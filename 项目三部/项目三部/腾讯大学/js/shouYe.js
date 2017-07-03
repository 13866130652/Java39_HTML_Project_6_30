function ys() {
	document.getElementById("ys")
}

function shouQi() {
	var div = document.getElementById("shouQi");
	var img = document.getElementById("zhanKai");
	if(div.style.display == "none") {
		div.style.display = "block"
	} else {
		img.style.display = "inline-block"
		div.style.display = "none"
	}
}

function zhanKai() {
	var div = document.getElementById("shouQi");
	var img = document.getElementById("zhanKai");
	if(img.style.display != "none") {
		img.style.display = "none"
		div.style.display = "block"
	}
}

function guanBi() {
	var ss = document.getElementById("div1");
	ss.style.display = "none";
}

function daKai() {
	var ss = document.getElementById("div1");
	ss.style.display = "block";
}

function weiXinDengLu() {
	var ss = document.getElementById("div2");
	ss.style.display = "block";
	var tt = document.getElementById("form1");
	tt.style.display = "none";
	var yy=document.getElementById("a1");
	var zz=document.getElementById("a2");
	yy.style.backgroundColor="#d8d8d8";
	zz.style.backgroundColor="white";
}

function QQdengLu() {
	var ss = document.getElementById("form1");
	ss.style.display = "block";
	var tt = document.getElementById("div2");
	tt.style.display = "none";
	var yy=document.getElementById("a1");
	var zz=document.getElementById("a2");
	yy.style.backgroundColor="white";
	zz.style.backgroundColor="#d8d8d8";
}
function checkUser(){
	var ss=document.getElementById("input1");
	if(ss.value==""){
		ss.nextSibling.innerHTML="&times;账号不能为空！"
		return false;
	}
	return true;
}
function checkPass(){
	var ss=document.getElementById("input2");
	if(ss.value==""){
		ss.nextSibling.innerHTML="&times;密码不能为空！"
		return false;
	}
	return true;
}
function ch(){
	if(checkPass()==false||checkUser()==false){
		return false;
	}
	return true;
}
function qingChu1(){
	var ss=document.getElementById("span1");
	ss.innerHTML="";
}
function qingChu2(){
	var ss=document.getElementById("span2");
	ss.innerHTML="";
}
function tupian(){
	var ss=document.getElementById("div6");
	
	if(ss.style.display=="block"){
		ss.style.display="none"
	}else{
		ss.style.display="block"
	}
}
