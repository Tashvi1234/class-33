
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var myEngine, myWorld ;
var myGround ;
var Box1, Box2 ,Box3,Box4,Box5;
var Pig1,Pig2;
var Log1,Log2,Log3,Log4;
var bird;
var backgroundImg ;
var platform;
var constrainedLog ;
var slingshot ;
var gameState = "OnSling";

function preload() {
//  backgroundImg = loadImage("sprites/bg.png");
  getBackgroundImage ();
}

function setup() {

var name = "TASHVI";    // STRING
//console.log (name);

var num = 100;         // Numbers
//console.log (num);

var decision = true;     // boolean - true or false
//console.log (decision);

var object ;       // undefined
//console.log (object);

object = null;    // null
//console.log (object);

var array1 = [5, 10, 15, 2, 100, 25];  // array data type
//console.log (array1);
//console.log (array1[0]);
//console.log (array1[2]);
//console.log (array1[2]);

  createCanvas(1200,400);


  // create engine and world
  myEngine = Engine.create();
  myWorld = myEngine.world;

  // create the ground object
  myGround = new Ground (600,height, 1200, 20);
   platform = new Ground(150,305,300,170);
  // 1st layer objects
  Box1 = new Box(700,320,70,70);
  Box2 = new Box(920,320,70,70);
  Pig1 = new Pig(810,350);
  Log1 = new Log(810,260,300,PI/2)


  // 2nd layer objects
  Box3 = new Box(700,240,70,70);
  Box4 = new Box(920,240,70,70);
  Pig2 = new Pig(810,220);
  Log2 = new Log(810,180,300,PI/2);

  // 3rd layer or top row objects
  Box5 = new Box(810,160,70,70);
  Log3 = new Log(760,120,150,PI/7) ;
  Log4 = new Log(870,120,150,-PI/7);

  //create a bird
  bird = new Bird(200,50);

  // create constrained log
  //constrainedLog = new Log (230,180,80, PI/2);

  // create constraint
   slingshot = new SlingShot (bird.body,{x:200, y:50});
  
}

function draw() {
  if (backgroundImg != null) {
    background(backgroundImg  );  
  }
  Engine.update (myEngine); // update myEngine
  myGround.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  
  Pig1.display () ;
  Pig2.display () ;
 

  Log1.display () ;
  Log2.display () ;
  Log3.display () ;
  Log4.display () ;

  bird.display () ;

  platform.display();

 // constrainedLog.display();
  
 slingshot.display();
}

function keyPressed () {
  // put the bird back on the caterpault
  if (keyCode == 32){ //space key 
    Matter.Body.setPosition(bird.body,{x:200,y:50});
    slingshot.attach(bird.body);
    bird.trajectory = [];
    gameState = "OnSling";
  }
}

function mouseDragged() {
  if (gameState == "OnSling")
    Matter.Body.setPosition (bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased () {
  slingshot.fly ();
  gameState = "launched";
}

async function getBackgroundImage () {

  var myResponse = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 
  var responseJSON = await myResponse.json ();
 
  var hour = responseJSON.datetime.slice(11,13);


  console.log ( "RESPONSE : " + responseJSON);
  console.log ( "DATE TIME : " + responseJSON.datetime);
  console.log ( "HOUR :" + responseJSON.datetime.slice(11,13));


  if (hour>=6 && hour<=16){
      bg = "sprites/bg.png";  // morning time image
  } else  {
      bg = "sprites/bg2.jpg";  // evening time image
  }
  backgroundImg = loadImage (bg);

}