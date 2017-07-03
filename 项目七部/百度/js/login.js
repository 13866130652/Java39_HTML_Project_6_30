/**
 * Created by Administrator on 2017/6/24.
 */
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