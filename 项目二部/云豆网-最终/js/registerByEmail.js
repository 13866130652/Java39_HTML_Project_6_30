/**
 * Created by Administrator on 2017/6/27.
 */
function checkEmial(){
    var emailzz=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    var email=$("#email").val();
    if(emailzz.test(email)==false){
        $("#sp1").html("请输入正确的邮箱").css("color","red");
        return false;
    }else{
        $("#sp1").html("请输入您的常用邮箱").css("color","black");
    }
}
function checkName(){
    var namezz=/^\S{4,12}$/;
    var name=$("#name").val();
    if(namezz.test(name)==false){
        $("#sp2").html("4-12位字符、英文、数字或者中文均可").css("color","red");
        return false;
    }else{
        $("#sp2").html("4-12位字符、英文、数字或者中文均可").css("color","black");
    }
}
function checkPass(){
    var passzz=/^[0-9a-zA-Z]{6,16}$/;
    var pass=$("#pass").val();
    if(passzz.test(pass)==false){
        $("#sp3").html("6-16位字符或数字、字母,区分大小写").css("color","red");
        return false;
    }else{
        $("#sp3").html("6-16位字符或数字、字母,区分大小写").css("color","black");
    }
}
function checkRepass(){
    var passzz=/^[0-9a-zA-Z]{6,16}$/;
    var pass=$("#pass").val();
    var Repass=$("#repass").val();
    if(Repass!=pass||passzz.test(Repass)==false){
        //alert(Repass);
        $("#sp4").html("两次输入的密码必须一致").css("color","red");
        return false;
    }else{
        $("#sp4").html("");
    }
}
function get(id) {
    return document.getElementById(id);
}

function getCode() {
    var arr = ['a','B','E','z','N','A','b','e','Z','n','0','1','2','3','5'];
    var st ="";
    for(var i = 0 ; i < 4; i++){
        st+= arr[parseInt(Math.random()*15)];
    }
    get("p1").innerHTML=st;
}



function checkCd(){

    var x = $("#yanzhenma").val();

    //alert($("p1").val().length);
    var y = $("#p1").html();
    //alert(x);
    //alert(y);
    if(x.toLowerCase()==y.toLowerCase()||x.toUpperCase()==y.toUpperCase()){
        //alert(true);
        return true;
    }
    alert("验证码错误!");
    return false;
}


$(function(){
    getCode();
    $("#form").submit(
        function(){
            checkName();
            checkEmial();
            checkPass();
            checkRepass();
            checkCd();
            if(checkName()==false||checkEmial()==false||checkPass()==false||checkRepass()==false||checkCd()==false){
                return false;
            }else{
                alert("注册成功!");
            }

        });

});