
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,ground;
var engine,world,wall1,wall2;
function preload()
{
	
}

function setup() {
	createCanvas(1440, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(720,650,1440,10)
	wall1 = new Ground(1120,595,10,100);
	wall2 = new Ground(1300,555,10,200);

  
	var ball_options = {
		isStatic:false,
		restitution:0,
		friction:0.5,
		density:1.2
	}
	ball = Matter.Bodies.circle(300,200,20,ball_options);
	World.add(world, ball);

	
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  fill(288,288,288)
 ellipse(ball.position.x,ball.position.y,20,20);
 ground.display();
  wall1.display();
 wall2.display();
 if(keyCode === 32){
	force();
 }
}
 function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1.05,y:0.5});
 }


