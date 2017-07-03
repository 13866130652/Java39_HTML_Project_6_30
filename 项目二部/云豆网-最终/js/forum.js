function jian1(){
	//对图片进行切换
	var jian=document.getElementById("jian1");
	jian.style.display="none";
	var jia=document.getElementById("jia1");
	jia.style.display="block";
	//对里面的内容进行切换
	var div1=document.getElementById("first12");
	div1.style.display="none";
}
function jia1(){
	//对图片进行切换
	var jian=document.getElementById("jian1");
	jian.style.display="block";
	var jia=document.getElementById("jia1");
	jia.style.display="none";
	//对里面的内容进行切换
	var div1=document.getElementById("first12");
	div1.style.display="block";
}
function jian2(){
	//对图片进行切换
	var jian=document.getElementById("jian2");
	jian.style.display="none";
	var jia=document.getElementById("jia2");
	jia.style.display="block";
	//对里面的内容进行切换
	var d1=document.getElementById("first22");
	d1.style.display="none";
}
function jia2(){
	//对图片进行切换
	var jian=document.getElementById("jian2");
	jian.style.display="block";
	var jia=document.getElementById("jia2");
	jia.style.display="none";
	//对里面的内容进行切换
	var d2=document.getElementById("first22");
	d2.style.display="block";
}
function jian3(){
	//对图片进行切换
	var jian=document.getElementById("jian3");
	jian.style.display="none";
	var jia=document.getElementById("jia3");
	jia.style.display="block";
	//对里面的内容进行切换
	var d1=document.getElementById("first32");
	d1.style.display="none";
}
function jia3(){
	//对图片进行切换
	var jian=document.getElementById("jian3");
	jian.style.display="block";
	var jia=document.getElementById("jia3");
	jia.style.display="none";
	//对里面的内容进行切换
	var d2=document.getElementById("first32");
	d2.style.display="block";
}
function jian4(){
	//对图片进行切换
	var jian=document.getElementById("jian4");
	jian.style.display="none";
	var jia=document.getElementById("jia4");
	jia.style.display="block";
	//对里面的内容进行切换
	var d1=document.getElementById("first42");
	d1.style.display="none";
}
function jia4(){
	//对图片进行切换
	var jian=document.getElementById("jian4");
	jian.style.display="block";
	var jia=document.getElementById("jia4");
	jia.style.display="none";
	//对里面的内容进行切换
	var d2=document.getElementById("first42");
	d2.style.display="block";
}
function jian5(){
	//对图片进行切换
	var jian=document.getElementById("jian5");
	jian.style.display="none";
	var jia=document.getElementById("jia5");
	jia.style.display="block";
	//对里面的内容进行切换
	var d1=document.getElementById("first52");
	d1.style.display="none";
}
function jia5(){
	//对图片进行切换
	var jian=document.getElementById("jian5");
	jian.style.display="block";
	var jia=document.getElementById("jia5");
	jia.style.display="none";
	//对里面的内容进行切换
	var d2=document.getElementById("first52");
	d2.style.display="block";
}
function jian6(){
	//对图片进行切换
	var jian=document.getElementById("jian6");
	jian.style.display="none";
	var jia=document.getElementById("jia6");
	jia.style.display="block";
	//对里面的内容进行切换
	var d1=document.getElementById("first62");
	d1.style.display="none";
}
function jia6(){
	//对图片进行切换
	var jian=document.getElementById("jian6");
	jian.style.display="block";
	var jia=document.getElementById("jia6");
	jia.style.display="none";
	//对里面的内容进行切换
	var d2=document.getElementById("first62");
	d2.style.display="block";
}
function showpic(){
         $(document).scroll(function(){
        	 var mytop =$(this).scrollTop();
        if (mytop > 300) {
            $(".sho").css('display','block');
        } else {
            $(".sho").css('display', 'none');
        }
        });
        
        $(".sho").click(function(){
        	//点击时,文本滑动到顶部
        	$(document).scrollIntoView();
        });
        
}
