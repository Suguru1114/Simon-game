// check if Gamepad.js is linked
// $("h1").css("color", "red");
// alert("hello");

// randomNumber 1 to 4 to pick 4 color  
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

// handler function
$(".btn").on("click", function(){

    var userChosenColour = $(this).attr("id");
    // can add this id to userChosenColour 
    console.log("Button ID" + this.id);

    
    // alert("the button is clicked");
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4 );
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}