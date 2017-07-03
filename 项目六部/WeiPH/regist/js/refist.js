var usersAll=new Array(10);
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
        var userNew=new Array(document.getElementById("username").value,document.getElementById("wordNext").value);
        for(var i=0;i<=9;i++){
            if(usersAll[i]==null){
                usersAll[i]=userNew;
                break;
            }
        }
        var j=0;
        if( confirm("注册成功，是否登录？")){
            window.open("http://www.baidu.com");
        }
    }
}
function yanTrue(){
    var getn = document.getElementById("numYan");
    var no = document.getElementById("yan");
    var str1 = document.getElementById("isTrue").value;
    var str2 = document.getElementById("numYan").textContent;
    if(str1==str2){
        getn.style.borderColor="green";
        no.style.color ="green";
        no.innerHTML="验证码正确";
        getn.style.color="green";
        return true;
    }else{
        getn.style.borderColor="deeppink";
        no.innerHTML="验证码错误";
        return false;
    }
}

function checkYan(){
    var getn = document.getElementById("numYan");
    var no = document.getElementById("yan");
    var str1 = document.getElementById("isTrue").value;
    var str2 = document.getElementById("numYan").textContent;
    if(str1==str2){
        getn.style.borderColor="green";
        no.style.color ="green";
        no.innerHTML="验证码正确";
        getn.style.color="green";
        return true;
    }else if(str1=="" ){
        no.style.color ="deeppink";
        getn.style.borderColor="deeppink";
        no.innerHTML="请输入验证码";
        getn.style.color="deeppink";
        return false;
    }else{
        no.style.color ="deeppink";
        getn.style.borderColor="deeppink";
        no.innerHTML="验证码错误";
        getn.style.color="deeppink";
        return false;
    }
}
function check(){
    if(userB()&&passBN()&&passB()&&checkYan()) {
        return true;
    }else
    {
        return false;
    }
}
function shuzi(){
    var num1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    var str="";
    for(var i=1;i<5;i++){
        var index=Math.floor(Math.random()*62);
        str+=num1[index];
    }
    return str;
}
function getNum(){
    var getn = document.getElementById("numYan");
    var no = document.getElementById("yan");
    no.innerHTML="请输入验证码";
    var st=shuzi();
    getn.textContent=st;
    getn.style.fontStyle = "italic";
    getn.style.color="deeppink";
}