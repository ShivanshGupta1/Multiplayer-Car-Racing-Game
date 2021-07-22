var database;
var gameState = 0;
var playerCount = 0;
var car1, car2, car3,car4, cars;
var carimg1, carimg2,carimg3, carimg4, trackimg;
var form, player, game;
var allPlayers;
var carEllipse;
function preload(){
  carimg1 = loadImage("images/car1.png")
  carimg2 = loadImage("images/car2.png")
  carimg3 = loadImage("images/car3.png")
  carimg4 = loadImage("images/car4.png")
  trackimg = loadImage("images/track.jpg")
}
function setup(){
  database = firebase.database();


  createCanvas(windowWidth-50,windowHeight-50);
  game = new Game();
  game.getState();
  game.start();

  
}

function draw(){
 
  if (playerCount===4 && gameState == 0){
    game.update(1);
    game.getState();
  }
  

  
  if (gameState==1){
    game.play();
  }
 else if (gameState==2){
    game.end();
 } 
  

 

 

  
}

