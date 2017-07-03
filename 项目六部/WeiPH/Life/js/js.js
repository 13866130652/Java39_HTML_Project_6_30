/**
 * Created by Administrator on 2017/6/22.
 */
window.onscroll=function(){
    var t=document.documentElement.scrollTop||document.body.scrollTop;
    var d=document.getElementById("d4");
    if(t>=440){
        d.style.position="fixed";
    }else{
        d.style.position="static";
    }
}