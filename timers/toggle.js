$(document).ready(function() {
   $("button#startButton").on("click", startToggling);
   $("button#stopButton").on("click", stopToggling);
});

let theIntervalId;

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

function finalBoss() {
    $("p").addClass("boss");
}