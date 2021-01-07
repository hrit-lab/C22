const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var obj;
function setup() {
  var canvas = createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  var obj_options ={
    isStatic : true
  }
  obj = Bodies.rectangle(400,400,90,21,obj_options);
  World.add(world,obj);
  console.log(obj);
  console.log(obj.position.x);
  console.log(obj.position.y);
}

function draw() {
  background(0);
  fill("cyan");
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,90,25);  
  
}