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
    userClickedPattern.push(userChosenColour);
    // can add this id to userChosenColour 
    console.log("Button ID" + this.id);
    // check if the user input is in array
    console.log("userClickedPattern: ", userClickedPattern);
    //call playSound with clicked color
    playSound(userChosenColour);
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4 );
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    playSound(randomChosenColour);
}
//(currentColor)location is called single input parameter
//add pressed class to the button
function animatePress(currentColor) {
    console.log("Animating press for color: " + currentColor);

    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
        console.log("Pressed class removed for color: " + currentColor);
    }, 100);
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();


}