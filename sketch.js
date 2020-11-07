var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1250, 575);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 25, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(125, 75, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,20);
	groundSprite.shapeColor="brown";


	engine = Engine.create();
	world = engine.world;

	var packageOptions={
		isStatic:true,
		friction:5,
	}
	packageBody = Bodies.circle(width/2 , 75, 20,packageOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Wall(width/2,550,75,20);
  Wall(576.5,500,20,100);
  Wall(672.5,500,20,100);
  
  packageSprite.y= packageBody.position.y;
  
  drawSprites();
  
  packageSprite.x=helicopterSprite.x;

  if(keyDown("left")){
	  helicopterSprite.x=helicopterSprite.x-10;
  }
  if(keyDown("right")){
	helicopterSprite.x=helicopterSprite.x+10;
  }
  if(keyDown("down")){
    Matter.Body.setStatic(packageBody,false);
  }
  
}




