// check if Gamepad.js is linked
// $("h1").css("color", "red");
// alert("hello");

// randomNumber 1 to 4 to pick 4 color  

var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4 );


    var randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

}