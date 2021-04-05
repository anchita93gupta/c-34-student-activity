const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pig=[];
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";

var score = 0;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        
    Engine.update(engine);
    //strokeWeight(4);
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
    


}

