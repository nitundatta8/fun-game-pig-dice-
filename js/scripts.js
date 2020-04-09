
var player1;
var player2;

function Player(){
  this.name = name,
  this.currentId = 0;
  this.roll = 0,
  this.tempScore = 0,
  this.totalScore = 0;
}

var toss = function(){
  var randomDice = Math.floor((Math.random() *6))+1;
  return randomDice;
}

Player.prototype.assingId = function(){
  this.currentId += 1;
  return this.currentId;
}

Player.prototype.scoreCheck = function() {
  
  if(this.roll === 1) {
     this.tempScore = 0 ; 
    alert(this.name + ", your turn is over, pass the mouse!");
    
  }else{
    this.tempScore += this.roll;
  }
};

Player.prototype.hold = function(){
  this.totalScore += this.tempScore;
  this.tempScore = 0 ;
  alert(this.name + ", your turn is over, pass the mouse!");
}


//user business logic
$(document).ready(function(){
  $("#play-game").submit(function(event){
    event.preventDefault();
    $("#player2-roll").attr('disabled','disabled');
    $("#player2-hold").attr('disabled','disabled');
    var player1Input = $("#player1").val();
    var player2Input = $("#player2").val();
    $("#intro").hide();
    $("#player-console").show();
    
    player1 = new Player();
    player1.name = player1Input;
    $(".player1Name").text(player1.name);

    player2 = new Player();
    player2.name = player2Input;
    $(".player2Name").text(player2.name);

    //set id
    player1.id = player1.assingId();
    console.log(player1.id)
    player2.id = player2.assingId();
    console.log(player2.id)
    

    //get random number for player1
    $("#player1-roll").click(function(event){
      player1.roll = toss();
      $(".die-roll-1").text( player1.roll)
       player1.scoreCheck();
      $(".round-total-1").text(player1.tempScore)

      if( player1.roll === 1){
        $("#player1-roll").attr('disabled','disabled');
        $("#player1-hold").attr('disabled','disabled');
        $("#player2-roll").removeAttr('disabled');
        $("#player2-hold").removeAttr('disabled');
 
      } 

    });

    // hold for player1 
    $("#player1-hold").click(function(){
       player1.hold();
       $(".total-score-1").text(player1.totalScore);
       $("#player2-roll").removeAttr('disabled');
       $("#player2-hold").removeAttr('disabled');
       //disable player1 
       $("#player1-roll").attr('disabled','disabled');
       $("#player1-hold").attr('disabled','disabled');
    });

    //player 2
    $("#player2-roll").click(function(event){
      player2.roll = toss();

     

      $(".die-roll-2").text( player2.roll)
       player2.scoreCheck();
      $(".round-total-2").text(player2.tempScore)

      if( player2.roll === 1){
        $("#player2-roll").attr('disabled','disabled');
        $("#player2-hold").attr('disabled','disabled');
        $("#player1-roll").removeAttr('disabled');
        $("#player1-hold").removeAttr('disabled');
 
      } 

    });

    $("#player2-hold").click(function(){
       player2.hold();
       $(".total-score-2").text(player2.totalScore);
       $("#player1-roll").removeAttr('disabled');
       $("#player1-hold").removeAttr('disabled');
       //disable player2
       $("#player2-roll").attr('disabled','disabled');
       $("#player2-hold").attr('disabled','disabled');
       
    });



  });
});

// $("#player1-roll").click(function(event){
//   event.preventDefault();
//   var diceNumber = Math.floor(Math.random()*6)+1;
//   $("#player1-dice").attr("src","img/dice_"+diceNumber+".jpg");
  
// });
