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