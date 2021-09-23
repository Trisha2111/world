
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle=2


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
ground=Bodies.rectangle(150,200,80,20,ground_options)
World.add(world,ground);
  ball = Bodies.circle(150,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(ground,angle)

  ellipse(ball.position.x,ball.position.y,20);

push()
translate(ground.position.x,ground.position.y)
rotate(angle)

  rect(0,0,80,20)
pop()

angle+=0.1
 


  
  
}

