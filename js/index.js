$(document).ready(function() {

  var sound = new Audio("http://taira-komori.jpn.org/sound_os/game01/Ikkyu_san.mp3")
  var countBreak = parseInt($("#breakNum5").html());
  var countSession = parseInt($("#sessionNumber25").html());

  $("#reset").hide();

  $("#start").click(function() {
    
    countSession *= 60;
    countBreak *= 60;
    // in milliseconds, so every second
    var increment = setInterval(timer, 1000);

    function timer() {

      $("#start, #minus5time, #add5time, #minus25time, #add25time, #breakNum5, #sessionTitle, #breakTitle, #back1, #back2, #back3, #back4").hide();
      $("#timeOn").html("Session Time Countdown");

      countSession -= 1;

      if (countSession === 0) {

        sound.play();
        clearInterval(increment);
        var timeForBreak = setInterval(goBreak, 1000);
        $("#sessionNumber25").hide();
      }
      
      //not single digit like 2 compared to 20
      //%60 gets you seconds
      if(countSession%60 >= 10){
        $("#sessionNumber25").html(Math.floor(countSession/60) + ":" + countSession%60);
      }
      
      else{
        $("#sessionNumber25").html(Math.floor(countSession/60) + ":" + "0" + countSession%60);
      }

      //$("#sessionNumber25").html(countSession);
      
      

      function goBreak(){

        $("#timeOn").html("Break Time");
        $("#breakNum5").show();
        
        countBreak -= 1;
        if (countBreak === 0) {
          clearInterval(timeForBreak);
          
          sound.play();
          $("#reset").show();
          $("#breakNum5, #timeOn").hide();
          
        }
        
        if(countBreak%60 >= 10){
        $("#breakNum5").html(Math.floor(countBreak/60) + ":" + countBreak%60);
      }
      
      else{
        $("#breakNum5").html(Math.floor(countBreak/60) + ":" + "0" + countBreak%60);
      }
        
      }
    }

  });
  
  $("#reset").click(function(){
                    countSession = 25;
                    countBreak = 5;
                    $("#sessionNumber25").html(countSession);
                    $("#breakNum5").html(countBreak);
                    $("#start, #minus5time, #add5time, #minus25time, #add25time, #breakNum5, #sessionNumber25, #sessionTitle, #breakTitle").show();
    $("#reset, #timeOn").hide();
    
                    
                    });

  $("#minus5time").click(function() {
    if (countBreak > 0) {
      countBreak -= 1;
      $("#breakNum5").html(countBreak);
    }
  });

  $("#add5time").click(function() {
    countBreak += 1;
    $("#breakNum5").html(countBreak);

  });

  $("#minus25time").click(function() {
    if (countSession > 0) {
      countSession -= 1;
      $("#sessionNumber25").html(countSession);
    }
  });

  $("#add25time").click(function() {
    countSession += 1;
    $("#sessionNumber25").html(countSession);

  });

});