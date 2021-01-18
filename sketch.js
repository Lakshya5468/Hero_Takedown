const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,ground,hero,fly;

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,100,50);
    box2 = new Box(400,300,100,50);
    box3 = new Box(400,300,100,50);
    box4 = new Box(400,300,100,50);
    box5 = new Box(400,200,100,50);
    ground=new Ground(width/2,height-10,width,20);
    hero=new Hero(300,200,100);
    chain=new Chain(hero.body,{x:400,y:0});
}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    hero.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}