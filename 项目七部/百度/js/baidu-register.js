/**
 * Created by Administrator on 2017/6/20.
 */
function checkName(){
    var val= document.getElementById("user").value;
    var str1=/^([^\x00-\xff]|[\w]){2,7}$/;
    if(str1.test(val)){
        document.getElementById("usere").className="error1";
        document.getElementById("span1").style.display="none";
        document.getElementById("usere").style.display="block";
        return true;
    }else if(val!=""){
    }else{
        document.getElementById("user").setAttribute("placeholder","请设置用户名");
    }
    document.getElementById("usere").className="error";
    document.getElementById("span1").style.display="none";
    document.getElementById("usere").style.display="block";
    return false;
}
function checktel(){
    var val= document.getElementById("teles").value;
    var str=/^1[3578]\d{9}$/;
    var span=document.getElementById("span2");
    var tel=document.getElementById("tele");
    if(str.test(val)){
        span.style.display='none';
        tel.className="error1";
        tel.style.display='block';
        return true;
    }else if(val!=""){

    }else{
        document.getElementById("teles").setAttribute("placeholder","用于登录和找回密码");
    }
    tel.className="error";
    span.style.display='none';
    tel.style.display='block';
    return false;
}
function checkPass(){
    var val= document.getElementById("pass").value;
    var span=document.getElementById("span4");
    var pass=document.getElementById("passe");
    var str=/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*()_?<>{}~、/\\]){6,14}$/;
    if(str.test(val)) {
        span.style.display = 'none';
        pass.className = "error1";
        pass.style.display = 'block';
        return true;
    } else if(val!=""){

    }
    else{
        document.getElementById("pass").setAttribute("placeholder","请设置登录密码");
        }
    pass.className="error";
    span.style.display='none';
    pass.style.display='block';
    return false;
}
function checkY(s){
    var val= document.getElementById("yzms").value;
    var yzme=document.getElementById("yzme");
    var span=document.getElementById("span5");
    var a=document.getElementById("yzmmm");
    if(val.toLowerCase()== a.textContent.toLowerCase()||val.toUpperCase()== a.textContent.toUpperCase()){
        yzme.className="error1";
        yzme.style.display = 'block';
        span.style.display = 'none';
        return true;
    }else if(val!=""){

    }
    else{
        document.getElementById("yzms").setAttribute("placeholder","请输入验证码");
    }
    span.style.display = 'none';
    yzme.style.display = 'block';
    yzme.className="error";
    return false;
}
function submit1() {
    if (checkY() && checkPass() && checktel() && checkName()) {
        return true;
    } else {
        return false;
    }
}

function shuzi(){
    var num1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    var str="";
    for(var i=0;i<6;i++){
        var index=Math.floor(Math.random()*62);
        str+=num1[index];
    }
    var color=['red','yellow','black','green','gray','blue',''];
    var index1=Math.floor(Math.random()*7);
    var s=document.getElementById("yzmmm");
    s.style.color=color[index1];
    s.style.borderColor=color[index1];
    s.textContent=str;
}
function picture12(){
    shuzi();
}


function loginshow(){
    document.getElementById("loginid").style.display="block";
}
function phoneLogin(){
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
}
function account(){
    document.getElementById("form1").style.display="block";
    document.getElementById("form2").style.display="none";
}
var flag=1;
function loginqh(s){
    if(flag%2==0){
        document.getElementById("form1").style.display="block";
        document.getElementById("form3").style.display="none";
        s.style.background="url('../img1/login-cord1.png') no-repeat";
    }else{
        document.getElementById("form1").style.display="none";
        document.getElementById("form3").style.display="block";
        s.style.background="url('../img1/login-cord2.png') no-repeat";
    }
    document.getElementById("form2").style.display="none";
    flag++;
}
function passlables(){
    document.getElementById("passlabel").style.background="url('../img1/login-input-password-h.png') no-repeat";
    document.getElementById("passlabel").style.backgroundSize="cover";
}
function passlablen(){
    document.getElementById("passlabel").style.background="url('../img1/login-input-password.png') no-repeat";
    document.getElementById("passlabel").style.backgroundSize="cover";
}
function userlables(){
    document.getElementById("userabel").style.background="url('../img1/login-input-user-h.png') no-repeat";
    document.getElementById("userabel").style.backgroundSize="cover";
}
function userlablesn(){
    document.getElementById("userabel").style.background="url('../img1/login-input-user.png') no-repeat";
    document.getElementById("userabel").style.backgroundSize="cover";
}
function tellabels(){
    document.getElementById("tels").style.background="url('../img1/login-input-phone-h.png') no-repeat";
    document.getElementById("tels").style.backgroundSize="cover";
}
function tellabeln(){
    document.getElementById("tels").style.background="url('../img1/login-input-phone.png') no-repeat";
    document.getElementById("tels").style.backgroundSize="cover";
}

