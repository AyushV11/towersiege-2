const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground1 = new Ground(600,height,1200,20)
    ground2 = new Ground(600,300,300,20)
    ground3 = new Ground(1000,200,300,20)

    box1 = new Box(500,270,30,30)
    box2 = new Box(540,270,30,30)
    box3 = new Box(580,270,30,30)
    box4 = new Box(620,270,30,30)
    box5 = new Box(660,270,30,30)
    box6 = new Box(700,270,30,30)
    box7 = new Box(520,200,30,30)
    box8 = new Box(560,200,30,30)
    box9 = new Box(600,200,30,30)
    box10 = new Box(640,200,30,30)
   box11 = new Box(680,200,30,30)
   box12 = new Box(540,130,30,30)
   box13 = new Box(580,130,30,30)
   box14 = new Box(620,130,30,30)
   box15 = new Box(660,130,30,30)
   box16 = new Box(560,60,30,30)
   box17 = new Box(600,60,30,30)
   box18 = new Box(640,60,30,30)
   box19 = new Box(580,20,30,30)
   box20 = new Box(620,20,30,30)
   box21 = new Box(600,0,30,30)

   box22 = new Box(880,100,30,30)
   box23 = new Box(910,100,30,30)
   box24 = new Box(940,100,30,30)
   box25 = new Box(970,100,30,30)
   box26 = new Box(1000,100,30,30)
   box27 = new Box(910,50,30,30)
   box28 = new Box(940,50,30,30)
   box29 = new Box(970,50,30,30)
   box30 = new Box(940,0,30,30)
   box31 = new Box(940,0,30,30)

   stone = new Stone(400,0,30,30)

   launcher = new Launcher(stone.body,{x:200,y:200});

}

function draw(){
    background("blue");
    Engine.update(engine);
   
    
    ground1.display();
   ground2.display()
   ground3.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   box9.display()
   box10.display()
   box11.display()
   box12.display() 
   box13.display()
   box14.display()
  box15.display()
   box16.display() 
   box17.display()
   box18.display()
    box19.display()
    box20.display()
    box21.display()

    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()

    stone.display()

    launcher.display()
}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
    launcher.attach(stone.body)
  }
}