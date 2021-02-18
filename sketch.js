const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;

function preload(){
    
}

function setup(){
    createCanvas(400, 690)
    engine = Engine.create();
   
    drops= new Drops(200, 200, 5, {isStatic:true});
    
}

function draw(){
     background(0)
    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)))
    }
    
}   

