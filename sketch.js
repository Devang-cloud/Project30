const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22,block23,block24,block25;
var sling;

var Polygon;
var img;

function preload(){
  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


    block1 = new Block(600,260,30,40);
    block2 = new Block(570,260,30,40);
    block3 = new Block(540,260,30,40);
    block4 = new Block(630,260,30,40);
    block5 = new Block(660,260,30,40);
    block24= new Block(510,260,30,40);
    block25= new Block (690,260,30,40);

  block6= new Block(600,220,30,40);
  block7 = new Block(570,220,30,40);
  block8 = new Block(540,220,30,40);
  block9 = new Block(630,220,30,40);
  block23= new Block(660,220,30,40);


  block10 = new Block(600,180,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,250,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750,600,1500,10);


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  //player = new Player(50,200,30,30);

  Polygon = Bodies.circle(50,200,20);
  World.add(world,Polygon);

  sling = new Chain(this.Polygon,{x:100, y:200});

}

function draw() {
  background("black");
  Engine.update(engine);

 
  text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",200,20);
  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block24.display();
  block25.display();

  fill("pink")
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block23.display();

  fill("cyan");
  block10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("cyan");

  block19.display();
  block20.display();
  block21.display();
  fill("pink");

  block22.display();
  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,Polygon.position.x,Polygon.position.y,40,40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.Polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    sling.attach(this.Polygon);
  }
}

