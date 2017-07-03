var usersAll=new Array(10);
var userNew=new Array("15675509532","123456");
usersAll[0]=userNew;
function userF(){
    var num = document.getElementById("username");
    var no = document.getElementById("cell");
    if(num.value==""||num.value.length<11){
        no.className="userinput";
        no.innerHTML="     ";
    }
}
function userB(){
    var num = document.getElementById("username");
    var no = document.getElementById("cell");
    if(num.value==""||num.value.length<11){
        no.className="userwrong";
        num.className="xinxiwrong";
        no.innerHTML="输入11位手机号码";
        return false;
    }
    else if(num.value.length==11){
        no.className="userright";
        no.innerHTML="输入正确";
        num.className="xinxiright";
        return true;
    }
}

function passF(){
    var num = document.getElementById("word");
    var no = document.getElementById("pass1");
    if(num.value==""||num.value.length<11){
        no.className="passinput";
        no.innerHTML="     ";
    }
}
function passB(){
    var num = document.getElementById("word");
    var no = document.getElementById("pass1");
    if(num.value==""||num.value.length>12||num.value.length<6){
        no.className="passwrong";
        num.className="xinxiwrong";
        no.innerHTML="输入6-12位的密码";
        return false;
    }
    else if(num.value.length<=12&&num.value.length>=6){
        no.className="passright";
        no.innerHTML="输入正确";
        num.className="xinxiright";
        return true;

    }
}
function passFN(){
    var num = document.getElementById("wordNext");
    var no = document.getElementById("pass2");
    if(num.value==""||num.value.length<11){
        no.className="passinput";
        no.innerHTML="     ";
    }
}
function passBN(){
    var noY = document.getElementById("pass1");
    var numY =document.getElementById("word");
    var num = document.getElementById("wordNext");
    var no = document.getElementById("pass2");
    if(num.value!=numY.value){
        no.className="passwrong";
        num.className="xinxiwrong";
        no.innerHTML="两次密码不一致";
        return false;
    }
    else if(num.value==numY.value && (num.value=="" || num.value.length<6)){
        numY.className="xinxiwrong";
        noY.className="passwrong";
        num.className="xinxiwrong";
        noY.innerHTML="输入6-12位的密码";
        no.className="passwrong";
        num.className="xinxiwrong";
        return false;
    }
    else{
        no.className="passright";
        no.innerHTML="输入正确";
        num.className="xinxiright";
        return true;
    }
}
function userData(){
    if(userB()&&passBN()&&passB()){
        return true;
    }else{
        return false;
    }
}