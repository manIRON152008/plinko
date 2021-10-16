
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(240 , 470 , 700 , 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
 
}



