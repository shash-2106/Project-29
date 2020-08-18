const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var Slingshot;
var ball;


function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);

  ground1 = new ground(570,height-30,450,20);
  box1 = new box1st(430,height-60,70,30);
  box2 = new box1st(500,height-60,70,30);
  box3 = new box1st(570,height-60,70,30);
  box4 = new box1st(640,height-60,70,30);
  box5 = new box1st(710,height-60,70,30);
  box6 = new box2nd(465,height-90,70,30);
  box7 = new box2nd(535,height-90,70,30);
  box8 = new box2nd(605,height-90,70,30);
  box9 = new box2nd(675,height-90,70,30);
  box10 = new box3rd(500,height-120,70,30);
  box11 = new box3rd(570,height-120,70,30);
  box12 = new box3rd(640,height-120,70,30);
  box13= new box1st(535,height-150,70,30);
  box14 = new box1st(605,height-150,70,30);
  box15 = new box2nd(570,height-180,70,30);

  ball = new Polygon(100,height-60,25,25);

  slingshot = new pull(ball.body,{x:100,y:height-60});
  
  Engine.run(engine);

}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground1.display();
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display();
  box6.display(); 
  box7.display(); 
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  slingshot.display();
  
  ball.display();
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
/*function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(ball.body,{x:100,y:height-60});
    slingshot.attach();
  }
}*/
