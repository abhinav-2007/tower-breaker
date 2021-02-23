
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var polyimg;
var ball,ground1,slingshot1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block13,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var plat1,plat2;
function preload()
{
	polyimg=loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    block1=new Block(300,445,30,40);
    block2=new Block(315,445,30,40);
    block3=new Block(285,445,30,40);
    block4=new Block(330,445,30,40);
    block5=new Block(270,445,30,40);
    block6=new Block(345,445,30,40);
    block7=new Block(255,445,30,40);
    block8=new Block(300,405,30,40);
    block9=new Block(315,405,30,40);
    block10=new Block(285,405,30,40);
    block11=new Block(320,405,30,40);
    block12=new Block(280,405,30,40);

    block22=new Block(305,375,30,40);
    block23=new Block(320,375,30,40);
    block24=new Block(290,375,30,40);
    block25=new Block(305,345,30,40);


    block13=new Block(700,185,30,40);
    block14=new Block(715,185,30,40);
    block15=new Block(685,185,30,40);
    block16=new Block(730,185,30,40);
    block17=new Block(760,185,30,40);
    block18=new Block(715,165,30,40);
    block19=new Block(730,165,30,40);
    block20=new Block(700,165,30,40);
    block21=new Block(715,145,30,40);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    
    slingshot1=new SlingShot(this.ball,{x:100,y:200});
    


    plat1=new Platform(300,455,270,10);
    plat2=new Platform(720,205,240,10);

	Engine.run(engine);
    ground1=new Ground();
    

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground1.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()

  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()

  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()


  plat1.display()
  plat2.display()


  imageMode(CENTER);
  image(polyimg,ball.position.x,ball.position.y,40,40);
  slingshot1.display()

  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
  function mouseReleased(){
    slingshot1.fly();
  }


