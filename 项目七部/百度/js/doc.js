/**
 * Created by Huan_Wang on 2017/6/21.
 */
var sum=1;
function a1(s){
    var list=document.getElementById("searchList");
    if(sum%2==1){
        s.style.transform="rotate(180deg)";
        list.style.display="block";
    }else{
        s.style.transform="rotate(0deg)";
        list.style.display="none";
    }
    sum++;
}


