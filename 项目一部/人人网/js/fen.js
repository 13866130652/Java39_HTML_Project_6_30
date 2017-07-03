/**
 * Created by Administrator on 2017/6/15 0015.
 */
function check(t) {
    var result=t.value;
    var sp=document.getElementById("userspan");
    if(result==""){
        sp.innerHTML="用户名不能为空";
        sp.style.color="red";
    }else if(result.length<6){
        sp.innerHTML="请输入正确的账号";
        sp.style.color="red";
    }
}
function deng() {
    var a=document.getElementById("ee");
    a.style.display="none";
    var b=document.getElementById("dd");
    b.style.display="block";
}
function lu() {
    var a=document.getElementById("ee");
    a.style.display="block";
    var b=document.getElementById("dd");
    b.style.display="none";
}
