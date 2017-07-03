/**
 * Created by zshock on 2017/6/28.
 */
var count=0;
function sub1(t){
    var count=parseFloat(document.getElementById("thingCount").textContent);
    if(document.getElementById("num1").value==0){
        document.getElementById("num1").value=0;
    }else{
        document.getElementById("num1").value--;
        document.getElementById("item_1money").textContent = (parseFloat(document.getElementById("item_1money").textContent)-parseFloat(document.getElementById("item_1perprice").textContent)).toFixed(2);
        document.getElementById("thingCount").innerHTML=--count;
        document.getElementById("allMoney").textContent = (parseFloat(document.getElementById("allMoney").textContent)-parseFloat(document.getElementById("item_1perprice").textContent)).toFixed(2);
    }
}
function add1(t){
    var count=parseFloat(document.getElementById("thingCount").textContent);
    count++;
    document.getElementById("num1").value++;
    document.getElementById("item_1money").textContent = (parseFloat(document.getElementById("item_1money").textContent)+parseFloat(document.getElementById("item_1perprice").textContent)).toFixed(2);
    document.getElementById("thingCount").innerHTML=count;
    document.getElementById("allMoney").textContent = (parseFloat(document.getElementById("allMoney").textContent)+parseFloat(document.getElementById("item_1perprice").textContent)).toFixed(2);
}
function sub2(t){
    var count=parseFloat(document.getElementById("thingCount").textContent);
    if(document.getElementById("num2").value==0){
        document.getElementById("num2").value=0;
    }else{
        document.getElementById("num2").value--;
        document.getElementById("item_2money").textContent = (parseFloat(document.getElementById("item_2money").textContent)-parseFloat(document.getElementById("item_2perprice").textContent)).toFixed(2);
        document.getElementById("thingCount").innerHTML=--count;
        document.getElementById("allMoney").textContent = (parseFloat(document.getElementById("allMoney").textContent)-parseFloat(document.getElementById("item_2perprice").textContent)).toFixed(2);
    }
}
function add2(t){
    var count=parseFloat(document.getElementById("thingCount").textContent);
    count++;
    document.getElementById("num2").value++;
    document.getElementById("item_2money").textContent = (parseFloat(document.getElementById("item_2money").textContent)+parseFloat(document.getElementById("item_2perprice").textContent)).toFixed(2);
    document.getElementById("thingCount").innerHTML=count;
    document.getElementById("allMoney").textContent = (parseFloat(document.getElementById("allMoney").textContent)+parseFloat(document.getElementById("item_2perprice").textContent)).toFixed(2);
}
function del_1(t){
    document.getElementById("thingCount").innerHTML=parseFloat(document.getElementById("thingCount").textContent)-parseFloat(document.getElementById("num1").value);
    document.getElementById("allMoney").textContent = (parseFloat(document.getElementById("allMoney").textContent)-parseFloat(document.getElementById("item_1money").textContent)).toFixed(2);
    t.parentNode.parentNode.parentNode.parentNode.removeChild(t.parentNode.parentNode.parentNode);
}
function del_2(t){
    document.getElementById("allMoney").textContent = (parseFloat(document.getElementById("allMoney").textContent)-parseFloat(document.getElementById("item_2money").textContent)).toFixed(2);
    document.getElementById("thingCount").innerHTML=parseFloat(document.getElementById("thingCount").textContent)-parseFloat(document.getElementById("num2").value);
    t.parentNode.parentNode.parentNode.parentNode.removeChild(t.parentNode.parentNode.parentNode);

}
function delall(){
    if(document.getElementById("allitem").children.length==0){
        document.getElementById("allitem").className="page1";
        document.getElementById("goBuy").parentNode.removeChild(document.getElementById("goBuy"));
        document.getElementById("jiesuan").parentNode.removeChild(document.getElementById("jiesuan"));
    }
}
