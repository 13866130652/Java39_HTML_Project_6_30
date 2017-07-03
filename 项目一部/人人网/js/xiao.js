/**
 * Created by Administrator on 2017/6/26 0026.
 */
function show() {
    document.getElementById("fo").style.display="block";
    document.getElementById("img6").style.display="none";
}
function disappear() {
    document.getElementById("fo").style.display="none";
    document.getElementById("img6").style.display="block";
}
function show1() {
    document.getElementById("s4").style.display="block";
    document.getElementById("img8").style.display="none";
}
function disappear1() {
    document.getElementById("s4").style.display="none";
    document.getElementById("img8").style.display="block";
}
function chage() {
    document.getElementById("show").style.display="block";
    document.getElementById("show1").style.display="none";
}
function chage1() {
    document.getElementById("show").style.display="none";
    document.getElementById("show1").style.display="block";
    history.back();
}
function show2() {
    document.getElementById("div3").style.display="block";
    document.getElementById("sn").style.display="none";
}
function disappear2() {
    document.getElementById("div3").style.display="none";
    document.getElementById("sn").style.display="block";
}
var i=0;
var arr=["../img/ww1.jpg","../img/ww2.jpg","../img/ww3.jpg","../img/ww4.jpg","../img/ww5.jpg","../img/ww6.jpg",
    "../img/ww7.jpg"]
function change() {
    var img=document.getElementById("image");
    img.src=arr[i];
    i++;
    if(i==7){
        i=0;
    }
    document.getElementById("sp").innerHTML=i+1;
}
var num=setInterval("change()",2500);
function chang4() {
    clearInterval(num);
    i--;
    if(i<=0){
        i=0;
    }
    document.getElementById("image").src=arr[i];
    document.getElementById("sp").innerHTML=i+1;
}
function chang5() {
    clearInterval(num);
    i++;
    if(i>=6){
        i=6;
    }
    document.getElementById("image").src=arr[i];
    document.getElementById("sp").innerHTML=(i+1);
}
setInterval("change()",2500);
