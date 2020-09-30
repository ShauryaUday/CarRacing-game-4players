var form,game,player;
var cars,car1,car2,car3,car4;
var database,position;
var gameState = 0;
var playerCount=0;
var allPlayers;
function preload(){
    car1image=loadImage("images/car1.png");
    car2image=loadImage("images/car2.png");
    car3image=loadImage("images/car3.png");
    car4image=loadImage("images/car4.png");
    groundimage=loadImage("images/ground.png");
    trackimage=loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.Start();
}

function draw(){
    background(128,128,128);
    if(playerCount==4){
        game.update(1);
    }
    if(gameState==1){
        clear();
        game.play();
    }
    if(gameState==2){
        game.end();
    }
}

