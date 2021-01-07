const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball;  
function setup() {
  var canvas = createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  var ground_options ={
    isStatic : true
  }
  ground = Bodies.rectangle(200,400,150,40,ground_options);
  World.add(world,ground);
  var ball_options ={
    restitution: 1.0
  }
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);
  fill("cyan");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,150,40);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}