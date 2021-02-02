
 const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;
// const Render = Matter.Render;
// const Constraint = Matter.Constraint;


const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;
var dustbinobj, dustbinobjp;
var Slingshot;

var gameState = "onSling";
function preload(){
  dustbinobjp = loadImage("dustbingreen.png");

}



function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50, height - 90, 40);


  dustbinObj=new Dustbin(900,650);

  ground1 = new Ground(width/2, 670, width, 20);

  slingshot = new SlingShot(paper1.body,{x:200, y:50});
  Engine.run(engine);


	
  
}

function draw() {
  rectMode(CENTER);
  background(180);
   Engine.update(engine);
  ground1.display();
  dustbinObj.display();

  paper1.display();

  launcherObject.display();
  

}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     // slingshot.attach(bird.body);
  }
}