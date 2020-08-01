const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  stone1=new Stone();
  sling1=new Sling({x:180,y:200},stone1.body);

  ground1=new Ground(600,220,300,20)

  box1=new Box(600,100,30,30);
  box2=new Box(570,100,30,30);
  box3=new Box(630,100,30,30);
  box4=new Box(600,60,30,30);
  box5=new Box(570,60,30,30);
  box6=new Box(630,60,30,30);
  box7=new Box(600,10,30,30);
  box8=new Box(570,10,30,30);
  box9=new Box(630,10,30,30);


}

function draw() {
  Engine.update(engine)
  background("white"); 
  
  rectMode(CENTER)


  stone1.display()
  sling1.display()
  ground1.display()

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling1.fly();
}