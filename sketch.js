const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var ground_options={
 
  isStatic: true,

}

ground = Bodies.rectangle(400,390,800,10,ground_options);
World.add(world,ground)

}
function draw()
{
  background("yellow");
  rectMode(CENTER);
  fill("black");
  rect(ground.position.x,ground.position.y,800,10);
  
}
