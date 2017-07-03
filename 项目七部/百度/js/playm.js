/**
 * Created by Administrator on 2017/6/29.
 */

function playm(s){
    var play1= s.parentNode.parentNode.lastElementChild;
    if(play1.paused){
        play1.play();
    }else{
        play1.pause();
    }

}