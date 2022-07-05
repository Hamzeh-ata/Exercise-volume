var counter=0;
var set_counter=4;
var weightsVolume=0;
var RepsVolume=0;
var exerciseVolume = 0;
var sets=0;
$("#addSet").click(function(){
   
    if(set_counter<=6){
        if(counter==0){

            $("#tBody").append("<tr class='inputRow'><td class='setNumber2'> Set "+set_counter+"</td><td class='inputFeild'><input class='inputValue2' name='weightsVolume' value='0'></td> <td> <input class='inputValue2' value='0' name='RepsVolume'> </td> </tr>");   
            ++counter;
        }
        else if(counter==1){
            $("#tBody").append("<tr class='inputRow'><td class='setNumber'> Set "+set_counter +"</td> <td class='inputFeild'><input class='inputValue' name='weightsVolume' value='0'></td> <td> <input class='inputValue' value='0' name='RepsVolume'> </td> </tr>");   
           --counter;
        }
        ++set_counter;                                    
    }
    else{
        alert("Cant add more");
    }
});

/*$("input[name='additionaltitlename']").each(function(){
    weightsVolumeTemp= $(this).val();
    weightsVolume = weightsVolume + parseInt(weightsVolumeTemp);
});*/

/*$("input[name='additionaltitlename']").change('input', function() {

$("input[name='additionaltitlename']").each(function(){
    weightsVolumeTemp=weightsVolumeTemp +parseInt($("input[name=additionaltitlename]").val());

})
});*/

/*$("input[name='additionaltitlename']").change(function(){


    $("input[name='additionaltitlename']").each(function(){
        weightsVolumeTemp=weightsVolumeTemp +parseInt($("input[name=additionaltitlename]").val());
    
    });

    
});*/

function createDialog(){
   
  $("#body").prepend("<div id='dialogOverlay' class='dialogSection h-100 w-100 ' style=' overflow-y: scroll; position: fixed;  z-index:9999;'> <div class='container h-100' > <div class='row h-100 justify-content-center'> <div class='col-12 align-self-center'> <div class='dialogWrap' id='dialogWrap'>  <div class='dialog' style=' background-color: #131212;'>  <div class='row'> <div class='col-12'> <div class='dialogQuit d-flex justify-content-end'> <a class='exitDialog' id='exitDialog'> <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-square-x' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#C54545' fill='none' stroke-linecap='round' stroke-linejoin='round'> <path stroke='none' d='M0 0h24v24H0z' fill='none'/> <rect x='4' y='4' width='16' height='16' rx='2' /> <path d='M10 10l4 4m0 -4l-4 4' />  </svg> </a>  </div>   </div>  </div><div class='row justify-content-center'><div class='col-sm-12 col-lg-6 align-self-center'><div class='totalWeight d-flex justify-content-center align-content-center'> <span>Total weight :</span> <span id='totalWeight' >0</span> </div> <div class='totalReps d-flex justify-content-center align-content-center'><span>Total reps :</span><span id='totalReps' >0</span></div> <div class='volume d-flex justify-content-center align-content-center'><span>Exercise volume</span><span id='exerciseVolume' >0</span></div></div></div></div>  </div></div></div>  </div></div>"
    );
    $("#body").prepend("<div class='white-background' id='white-background'</div>");

}
function dialogBox(){

    var whitebg = document.getElementById("white-background");     
    var dlg = document.getElementById("dialogOverlay");
    var dlgW=document.getElementById("dialogWrap");
    whitebg.style.display="none";
    dlg.style.display="none";
    dlgW.style.pointerEvents="none";
}
function showDialog(){
    
    var dlg = document.getElementById("dialogOverlay");
    var dlgW=document.getElementById("dialogWrap");
    var whitebg = document.getElementById("white-background");     
    dlg.style.display="block";
    whitebg.style.display="block";
    var winWidth=window.innerWidth;
    var winHeight=window.innerHeight;
    dlgW.style.pointerEvents="all";
}
function volumeCalc(){
    $("input[name='weightsVolume']").each(function(){
        weightsVolume=weightsVolume+parseInt($(this).val());
        sets++;
     });
    $("input[name='RepsVolume']").each(function(){
     RepsVolume = RepsVolume + parseInt($(this).val());
    });
     $("#totalWeight").text(weightsVolume);
     $("#totalReps").text(RepsVolume);
     exerciseVolume = weightsVolume * RepsVolume * (set_counter-1) ; 
     $("#exerciseVolume").text(exerciseVolume);
}
$("#calcVolume").click(function(){

   showDialog(); 
   volumeCalc();
    weightsVolume=0;
    RepsVolume=0;
    $("input[name=weightsVolume]").val(0);
    $("input[name=RepsVolume]").val(0);

});
$("#exitDialog").click(function(){
    dialogBox();
});

