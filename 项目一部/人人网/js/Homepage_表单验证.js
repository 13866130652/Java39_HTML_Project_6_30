/*
 * 表单验证
 */
//输入账号
function check(t){
	var result=t.value;
	if(result==""){
		var remind=document.getElementById("prove");
		remind.innerHTML="请输入用户名和密码";
		remind.style.display="block";
	}
	if(result!=""){
		var remind=document.getElementById("prove");
		remind.style.display="none";
	}
}

//输入密码
function checkpass(t){
	var result=t.value;
	if(result==""){
		var remind=document.getElementById("prove");
		remind.innerHTML="密码还没有输入";
		remind.style.display="block";
	}
	if(result!=""){
		var remind=document.getElementById("prove");
		remind.style.display="none";
	}
}
