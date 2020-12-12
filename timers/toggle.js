$(document).ready(function() {
   $("button#startButton").click(startToggling);
   $("button#stopButton").click(stopToggling);

   var theIntervalId;

   function startToggling() {
       theIntervalId = setInterval(toggleStyle, 750);
   }

   function toggleStyle() {
       $("p").toggleClass("plain fancy");
   }

   function stopToggling() {
       clearInterval(theIntervalId);

       setTimeout(finalBoss, 3000);
   }

   function playerTurn() {
       // do player's stuff

       setTimeout(computerPlayerTurn, 500);
   }

   function computerPlayerTurn() {

   }

   function finalBoss() {
       $("p").addClass("boss");
   }
});