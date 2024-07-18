var buttonColour = ['red', 'blue', 'green', 'yellow']

var gamepattern = [];

var userClickedPattern = [];

var level = 0;

var start = false

$(document).keypress(function(){
    if(!start){
        $('level-title').text('Level' + level);
        nextSequence();
        start = true;
    }
})

$('.btn').click(function(){
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence (){

    userClickedPattern = [];
    level++;
    $('level-title').text('Level' + level);

    var randomNumber = Math.floor(math.random() * 4 );
    var randomChosenColor = buttonColour[randomNumber];
    gamepattern.push(randomChosenColor);
    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColor)
}



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
        console.log('success')
        setTimeout(function () {
            nextSequence();
          }, 1000)
    }
    else{
        console.log('wrong')
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
  }
function startOver(){
    level = 0;
    gamepattern = [];
    start = false;

}

function playSound(name){
    var audio = new Audio ('/sounds' + name + 'mp3');
    audio.play();
}
function animatePress(currentColor){
    $('#' + currentColor).addClass('.pressed')
    setTimeout(function(){
        $('#' + currentColor).removeClass('.pressed')
    },100)
}

