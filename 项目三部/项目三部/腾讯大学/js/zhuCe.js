function remain(id) {
	return document.getElementById(id);
}

function remindName(name) {
	if(name.value == "") {
		remain("td1").innerHTML = "&times;请输入昵称";
		remain("td1").style.color = "red"
		return false;
	} else {
		remain("td1").innerHTML = "&radic;";
		remain("td1").style.color = "green"
		return true;
	}
}

function clearRemind1() {
	remain("td1").innerHTML = "";
}

function remainMima() {
	if(pass.value.length < 6 || pass.value.length > 16 || pass.value == "") {
		remain("td2").innerHTML = "&times;密码长度为6-16位字符";
		remain("td2").style.color = "red"
		return false;
	} else {
		remain("td2").innerHTML = "&radic;";
		remain("td2").style.color = "green"
		return true;
	}
}

function clearRemain2() {
	remain("td2").innerHTML = "";
}

function remindAffirm(affirm) {
	if(affirm.value == "") {
		remain("td3").innerHTML = "&times;请确认密码";
		remain("td3").style.color = "red";
		return false;
	}
	else if(affirm.value == remain("pass").value) {
		remain("td3").innerHTML = "&radic;";
		remain("td3").style.color = "green"
		return true;
	}  else {
		remain("td3").innerHTML = "&times;密码确认不正确";
		remain("td3").style.color = "red";
		return false;
	}
}

function clearRemind3() {
	remain("td3").innerHTML = "";
}

function remindNumber(number) {
	if(number.value.length != 11 || number.value == "") {
		remain("td4").innerHTML = "&times;请输入11位数手机号码";
		remain("td4").style.color = "red";
		return false;
	} else {
		remain("td4").innerHTML = "&radic;";
		remain("td4").style.color = "green"
		return true;
	}
}

function clearRemind4() {
	remain("td4").innerHTML = "";
}

function remindId(yanZheng) {
	if(yanZheng.value == "") {
		remain("td5").innerHTML = "&times;请输入验证码";
		remain("td5").style.color = "red";
		return false;
	} else {
		remain("td5").innerHTML = "&radic;";
		remain("td5").style.color = "green"
		return true;
	}
}

function clearRemind5() {
	remain("td5").innerHTML = "";
}
function ch(){
	if(remindName(name)==false||remainMima()==false||remindAffirm(affirm) ==false||remindNumber(number)==false||remindId(yanZheng)==false){
		return false;
	}
	return true;
}
function faSong(){
	var tt=document.getElementById("p1");
	tt.style.display="inline-block"
	setInterval(times,1000)
}
var i=59;
function times(){
	var yy=document.getElementById("p1");
	var ss=document.getElementById("span3");
	ss.innerHTML=i;
	i--
	if(i==-2){
		yy.style.display="none"
	}
}
