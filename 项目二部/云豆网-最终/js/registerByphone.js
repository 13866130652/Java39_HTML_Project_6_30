/**
 * Created by Administrator on 2017/6/27.
 */
function checkNumber(){
    var numberzz=/^1[0-9]{10}$/;
    var number=$("#number1").val();
    if(numberzz.test(number)==false){
        $("#number").css({"color":"red"});
        return false;
    }else{
        $("#number").css({"color":"gray"});
    }
}
function checkPass(){
    var passzz=/^[0-9a-zA-Z\S]{6,16}$/;
    var pass=$("#pass").val();
    if(passzz.test(pass)==false){
        $(".sp1").css("color","red");
        return false;
    }else{
        $(".sp1").css("color","gray");
    }
}
$(function(){
    $("#form").submit(
        function(){
            checkNumber();
            checkPass();
            if(checkNumber()==""){
                alert("账号不能为空!");
                return false;
            }else if(checkPass()==""){
                alert("密码不能为空!");
                return false;
            }else if(checkNumber()==false||checkPass()==false){
                alert("账号或密码错误!");
                return false;
            }else{
                alert("注册成功!");
            }

        }
    )
});

var i=60;
function jishi(){
    if(i>=0){
        $(".div1-div").html(i);

    }else{

        $(".div1-div").html("获取验证码");
    }
    i--;
}
var num=0;
function checkyanzhen(){
    clearInterval(num);
    setTimeout("clearInterval(num)",80000);
    num=setInterval("jishi()",1000);

}

