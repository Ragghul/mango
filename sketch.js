const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var boy,boyi,ground,tree,trri,stoni,mango1,mango2,mango3,mango4;



function preload() {
    boyi = loadImage("boy.png");
trri = loadImage("tree.png");
stoni = loadImage("stone.png");	
}



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100,620,20,20);
	boy.addImage(boyi);
	boy.scale = 0.1;

	ground = createSprite(500,690,1000,20);
	ground.shapeColor = color(225,0,0);

	tree = createSprite(700,400,20,20);
	tree.addImage(trri);
	tree.scale = 0.5;

	stone = new s(50,620,20)
	//stone.addImage(stoni);
	//stone.scale = 0.1;

	mango1 = new man(500,200,80);
    mango2 = new man(850,200,80);
    mango3 = new man(500,400,80);
    mango4 = new man(800,400,80);




	Engine.run(engine);
  
}



	
	
	function draw() {
		rectMode(CENTER);
		background(225,0,225);
		mango1.display();
		mango2.display();
		mango3.display();
		mango4.display();
		stone.display();
		drawSprites();
	   
	  }

	  function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();

}

function keyPressed(){
    if(keyCode === 32){

        Matter.Body.setPosition(stone.body,{x:200,y:50});
       stone.attach(stone.body);
       
    }
}






