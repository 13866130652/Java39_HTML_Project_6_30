/**
 * Created by Administrator on 2017/6/25.
 */
var count=1;
function playlist1(){
    var head1=document.getElementById("head1").textContent;
    var head2=document.getElementById("head2").textContent;
    document.getElementById("head1").textContent=head2;
    document.getElementById("head2").textContent=head1;
    var img=document.getElementsByClassName("img1");
    var img1=img[0].src;
    var img2=img[1].src;
    document.getElementsByClassName("img1")[0].src=img2;
    document.getElementsByClassName("img1")[1].src=img1;
    var span1=document.getElementsByClassName("span1");
    var span2=document.getElementsByClassName("span2");
    var span11=span1[0].textContent;
    var span12=span1[1].textContent;
    var span21=span2[0].textContent;
    var span22=span2[1].textContent;
    document.getElementsByClassName("span1")[0].textContent=span21;
    document.getElementsByClassName("span1")[1].textContent=span22;
    document.getElementsByClassName("span2")[0].textContent=span11;
    document.getElementsByClassName("span2")[1].textContent=span12;
    if(count%2==1){
        document.getElementById("play").src="../video/[赵文卓]凯歌_bd.mp4";
    }else{
        document.getElementById("play").src="../video/[赵丽颖&张碧晨]望_bd.mp4";
    }
    count++;
}
//点赞功能，可取消点赞
var jia=0;
var jian=0;
function zanjia(){
    var span=document.getElementById("span1");
    //如果点的是踩，就不能再点赞
    if(jian%2==1) {
        return;
    }
    if(jia%2==0){
        var s1 = parseInt(span.innerHTML) + 1;
        span.innerHTML = s1;
        document.getElementById("i11").style.backgroundPositionX = "-60px";
    }else{
        var s1 = parseInt(span.innerHTML) - 1;
        span.innerHTML = s1;
        document.getElementById("i11").style.backgroundPositionX = "-20px";
    }
    jia++;
}
function zanjian(){
    var span=document.getElementById("span2");
    if(jia%2==1) {
        return;
    }
    if(jian%2==0){
        var s1=parseInt(span.innerHTML)+1;
        span.innerHTML=s1;
        document.getElementById("i77").style.backgroundPositionX="-140px";
    }else {
        var s1=parseInt(span.innerHTML)-1;
        span.innerHTML=s1;
        document.getElementById("i77").style.backgroundPositionX="-100px";
    }
    jian++;
}
