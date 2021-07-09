var  ground , ground2, ground3, ground4, ground5;

var bob1, bob2, bob3, bob4, bob5;

var rope1, rope2, rope3, rope4, rope5;

var ballImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
     
	
	ground=new roof(400,200,300,20);
	
	
	bob1=new bob(300,500,49);
	bob2=new bob(350,500,49);
	bob3=new bob(400,500,49);
	bob4=new bob(450,500,49);
	bob5=new bob(500,500,49);
    
	var bobDiameter = 40;

    rope1=new rope(bob1.body,{x:300, y:200});
	rope2=new rope(bob2.body,{x:350, y:200});
	rope3=new rope(bob3.body,{x:400, y:200});
	rope4=new rope(bob4.body,{x:450, y:200});
	rope5=new rope(bob5.body,{x:500, y:200});

	//Engine.run(engine);
  
}


function draw()
 {background(255,229,204);
	
	Engine.update(engine);
	ground.display();
	

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display()
	rope4.display();
	rope5.display();
	
  drawSprites();
 
  
}
function keyPressed()
{
	if(keyCode===38)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50, y:-50})

	}

}
