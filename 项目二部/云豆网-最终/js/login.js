$(function(){
    $("#douhao").focus(checkName);
    $("#douhao").blur(checkName);
    $("#pass").focus(checkPass);
    $("#pass").blur(checkPass);
    $("#form").submit(
        function(){
            checkName();
            checkPass();
            if(checkName()==false||checkPass()==false){
                alert("账号或密码错误!");
                return false;
            }else{
                alert("输入正确");
            }
        }
    )
});

function checkName(){
    var namezz=/^[0-9a-zA-Z_]{4,10}$/;
    var name=$("#douhao").val();
    if(namezz.test(name)==false){
        $("#douhao2").css({"display":"block","color":"red"});
        return false;
    }else {
        $("#douhao2").css({"display":"none","color":"black"});
    }
}
function checkPass(){
    var passzz=/^[0-9a-zA-Z]{6,16}$/;
    var pass=$("#pass").val();
    if(passzz.test(pass)==false){
        $("#pass2").css({"display":"block","color":"red"});
    }else{
        $("#pass2").css({"display":"none","color":"red"});
    }
}