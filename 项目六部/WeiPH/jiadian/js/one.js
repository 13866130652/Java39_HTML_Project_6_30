function change(){
    var i=document.getElementById("img1");
    i.src="image/11.png";
    var n=document.getElementById("one");
    n.style.backgroundColor="white";
    var n=document.getElementById("two");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("three");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("four");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("five");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("six");
    n.style.backgroundColor="#f4f4f4";
}
function change1(){
    var i=document.getElementById("img1");
    i.src="image/13.png";
    var n=document.getElementById("one");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("two");
    n.style.backgroundColor="white";
    var n=document.getElementById("three");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("four");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("five");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("six");
    n.style.backgroundColor="#f4f4f4";
}
function change2(){
    var i=document.getElementById("img1");
    i.src="image/14.png";
    var n=document.getElementById("one");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("two");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("three");
    n.style.backgroundColor="white";
    var n=document.getElementById("four");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("five");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("six");
    n.style.backgroundColor="#f4f4f4";
}
function change3(){
    var i=document.getElementById("img1");
    i.src="image/15.png";
    var n=document.getElementById("one");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("two");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("three");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("four");
    n.style.backgroundColor="white";
    var n=document.getElementById("five");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("six");
    n.style.backgroundColor="#f4f4f4";
}
function change4(){
    var i=document.getElementById("img1");
    i.src="image/16.png";
    var n=document.getElementById("one");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("two");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("three");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("four");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("five");
    n.style.backgroundColor="white";
    var n=document.getElementById("six");
    n.style.backgroundColor="#f4f4f4";
}
function change5(){
    var i=document.getElementById("img1");
    i.src="image/17.png";
    var n=document.getElementById("one");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("two");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("three");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("four");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("five");
    n.style.backgroundColor="#f4f4f4";
    var n=document.getElementById("six");
    n.style.backgroundColor="white";
}
var n=0;
var m="";
function changeImg(){
    var v=document.getElementById("img2");
    var arr=["image/111.jpg","image/112.jpg","image/113.jpg"];
    v.src=arr[n];
    n++
    if(n==3){
        n=0;
    }
}
function auto(){
    m=setInterval("changeImg()",1500)
}
function stop1(i){
    clearInterval(m);
    var arr=["image/111.jpg","image/112.jpg","image/113.jpg"];
    document.getElementById("img2").src=arr[i];
}