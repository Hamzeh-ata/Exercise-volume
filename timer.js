var second,minute,milliseconds;
milliseconds=0;
minute=0;
second=0;
let int=null;
var boolean=0;
$("#start").click(function(){
    if(boolean!=1){
        int=setInterval(mainTime,-1);
    }
  boolean=1;
});
$("#pause").click(function(){
    clearInterval(int);
    boolean=0;
});
function mainTime(){
    milliseconds+=1;
    if(milliseconds== 100){
        milliseconds=0;
        second+=1; 
       
      
        if(second==60){
            minute++;
            second=0;
        if(minute==60){
            minute++;
            minute=0;
        }
    }
}
$("#milliseconds").text(milliseconds);
let s = second< 10 ? "0" + second:second;
let m = minute< 10 ? "0" + minute:minute;
$("#mainsecond").text(s);
$("#mainminute").text(m);
}
$("#rest").click(function(){
    clearInterval(int);
     [milliseconds,second,minute]=[0,0,0];
    $("#milliseconds").text("00");
    $("#mainsecond").text("00");
    $("#mainminute").text("00");
    boolean=0;

});
