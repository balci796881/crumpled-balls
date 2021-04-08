
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,670,1600,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,450,60,60)
  
}


function draw() {
  background(230);
 Engine.update(engine);
 paper.display();
  groundObject.display();
  dustbinObj.display();
  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y: -145}) 
  }

}
//function keyPressed(){
	//if( keyCode === UP_ARROW) {
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y: -45})
	//}
