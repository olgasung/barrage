$(document).ready(function(){
  function moveTo(){
    var txt=$(".txt").val();
    var top= parseInt(Math.random()*270);    
    var speed= 20000 + 10000 * Math.random();
    $(".txt").val("");
    $(".show").append("<p></p>");
    $(".show>p:last-child").text(txt).css("top",top);
    $(".show>p:last-child").animate({left:'-30%'},speed,"linear",end);
  }
  function end(){
    var lis=$(".show>p");
    for(var i=0;i<lis.length;i++){
      if(lis[i].style.left==="-30%"){
        lis[i].remove();
      }
    }
  }
 
  $(".sub").click(moveTo);
  
  $(".txt").keydown(function(event) {
     if (event.keyCode == "13") {
         moveTo();
     }
  });
  $(".del").click(function() {
	    $('.show').empty();
	 });
  
})