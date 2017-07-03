/**
 * Created by Administrator on 2017/6/28.
 */
function picInt(s){
    s.style.display="none";
    var input=document.getElementById("searchid");
    input.style.border="1px solid blue";
    input.style.borderBottom="1px solid #999";
    input.setAttribute("placeholder","在此处黏贴图片的网址");
    input.style.textIndent="10px";
    var div=document.getElementById("searpic");
    div.style.display="block";
}
function closepic(){
    var div=document.getElementById("searpic");
    div.style.display="none";
    var input=document.getElementById("searchid");
    input.style.border="1px solid #999";
    input.setAttribute("placeholder","")
    input.style.textIndent="0px";
    document.getElementsByClassName("picture")[0].style.display="block";
}
function chage(s){
    var im=document.getElementById("image");
    if (typeof FileReader != "undefined") {
        var reader = new FileReader();
        reader.onload = function(e) {
            im.src = e.target.result + "";
        }
        reader.readAsDataURL(s.files[0]);
    }
}