/*
 * 右侧二维码特效部分
 */
function changeDisplay(){
	var code = document.getElementById("idCode");
	code.style.display = "block";
}
function backDisplay(){
	var code = document.getElementById("idCode");
	code.style.display = "none";
}
/*
 * 动画效果
 */
//鼠标放上去的效果
function run1(){
	var position_y = document.getElementById("r-img1");
	position_y.style.backgroundPositionY="-1800px";
}
function run2(){
	var position_y = document.getElementById("r-img2");
	position_y.style.backgroundPositionY="-1800px";
}
function run3(){
	var position_y = document.getElementById("r-img3");
	position_y.style.backgroundPositionY="-1800px";
}
function run4(){
	var position_y = document.getElementById("r-img4");
	position_y.style.backgroundPositionY="-1800px";
}

//鼠标拿走的效果
function back1(){
	var position_y = document.getElementById("r-img1");
	position_y.style.backgroundPositionY="-2850px";
}
function back2(){
	var position_y = document.getElementById("r-img2");
	position_y.style.backgroundPositionY="-2850px";
}
function back3(){
	var position_y = document.getElementById("r-img3");
	position_y.style.backgroundPositionY="-2850px";
}
function back4(){
	var position_y = document.getElementById("r-img4");
	position_y.style.backgroundPositionY="-2850px";
}
