/**
 * Created by Administrator on 2017/6/18.
 */
function showa2(){
    var a1=document.getElementById("a1");
    var a2=document.getElementById("a2");
    var a1s=document.getElementById("a1s");
    var a2s=document.getElementById("a2s");
    a1s.style.display="none";
    a2s.style.display="block";
    a2.style.color="#1a66b3";
    a2.style.borderBottom="2px solid #1a66b3";
    a1.style.color="#555555";
    a1.style.borderBottom="none";
}
function showa1(){
    var a1=document.getElementById("a1");
    var a2=document.getElementById("a2");
    var a1s=document.getElementById("a1s");
    var a2s=document.getElementById("a2s");
    a1s.style.display="block";
    a2s.style.display="none";
    a1.style.color="";
    a1.style.borderBottom="";
    a2.style.color="#555555";
    a2.style.borderBottom="none";
}
function showWeek(){
    var list1=document.getElementById("ollist1");
    var list2=document.getElementById("ollist2");
    var day=document.getElementById("bj-phb-days");
    var week=document.getElementById("bj-phb-weeks");
    list2.style.display="block";
    list1.style.display="none";
    day.style.borderBottom="1px solid #cccccc";
    week.style.borderBottom="none";
}
function showDay(){
    var list1=document.getElementById("ollist1");
    var list2=document.getElementById("ollist2");
    var day=document.getElementById("bj-phb-days");
    var week=document.getElementById("bj-phb-weeks");
    list2.style.display="none";
    list1.style.display="block";
    day.style.borderBottom="none";
    week.style.borderBottom="1px solid #cccccc";
}

function showCity(s){
    s.style.background="url('../img1/arrow-up_769a6bb.png') 60px 9px no-repeat";
    s.style.backgroundColor="#4372c1";
    document.getElementById('city').style.display='block';
}
function noneCity(){
    document.getElementById("city").style.display='none';
    document.getElementById("qhcity").style.background="url('../img1/arrow-down_6ce55cf.png') 60px 9px no-repeat";
    document.getElementById("qhcity").style.backgroundColor="#4372c1";
}
function replaceCity(s){
    var local=document.getElementById("local");
    var hf=document.getElementById("heFei");
    hf.style.display="none";
    local.innerHTML=s.textContent+"新闻";

}
function replaceCity2(){
    document.getElementById("city-f").style.display="none";
    document.getElementById("city-ca").style.display="block";
    document.getElementById("back").style.display="inline-block";
}
function backCityF(s){
    document.getElementById("city-f").style.display="block";
    document.getElementById("city-ca").style.display="none";
    s.style.display="none";
}
