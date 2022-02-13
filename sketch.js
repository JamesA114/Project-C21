
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 650, width,20)
	leftSide = new Ground(650,615,10,50)
	rightSide = new Ground(750,615,10,50)
	var ball_options = {
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	
	}
	//Create the Bodies Here
	ellipseMode(RADIUS);
	ball = Bodies.circle(100,100,15,ball_options)
	World.add(world,ball)

	Engine.run(engine);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:30,y:-50})
	}
}

function draw() {
  rectMode(CENTER);
  


  background(0);
  ellipse(ball.position.x,ball.position.y,15)
  ground.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
 
}



