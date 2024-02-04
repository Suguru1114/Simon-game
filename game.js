// check if Gamepad.js is linked
// $("h1").css("color", "red");
// alert("hello");

// randomNumber 1 to 4 to pick 4 color  
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).keypress(function(){
    if(!gameStarted){
        //get level-tytle class from .html and change "press A" message to Level
        $("#level-title").text("Level " + level );
        nextSequence()    
        gameStarted = true;
    }
});

// handler function
// $(".btn").on("click", function(){
$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

//(currentColor)location is called single input parameter
//add pressed class to the button
function animatePress(currentColor) {
    // console.log("Animating press for color: " + currentColor);

    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
        // console.log("Pressed class removed for color: " + currentColor);
    }, 100);　
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Correct!");
        
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence(); 
            }, 1000);
        }
    } else {
        console.log("Wrong!");
    }
}

function nextSequence(){
    //refresh the array to start over 
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level)

    var randomNumber = Math.floor(Math.random()*4 );
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio.play();
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}
