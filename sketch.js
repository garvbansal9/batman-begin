const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrela;
var maxdropes = 100;
var dropes = []
function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);  
    engine = Engine.create();
    world = engine.world;

    umbrela = new Umbrela(1000, 370);

}

function draw(){
    background(0);
    Engine.update(engine);

    umbrela.display();
    if(frameCount % 1 === 0){
dropes.push(new Drop(random(0, 400), 0 ));
    }

    for(var j = 0; j<dropes.length ; j++){
        dropes[j].display();
            }



}   

