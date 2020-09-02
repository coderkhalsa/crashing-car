//creating global variable for car , wall, weight , speed 
var car,wall;
var speed,weight;

function setup() {

  //creating canvas
  createCanvas(1600,400);

  //giving random number to speed and weight
   speed = random(55,90);
  weight = random(400,1500);
  
  //creating car
  car=createSprite(50,50,60,20);
 
 //creating car1
  car1=createSprite(50,150,60,20);
  
  //creating car2
  car2=createSprite(50,250,60,20);

 
 // creating wall sprite
  wall = createSprite(1500,200,60,height/1)
 
}
function draw() {

// color of canvas
  background(0,0,0);
  
 // seting velocity for each car
  car.velocityX=speed;
  car1.velocityX=speed
  car2.velocityX=speed
 
  
  // giving color to car
if (wall.x - car.x <(car.width + wall.width/2))
{
  car.velocityX=0;
  var deformation=0.5 * width * speed * speed/22509;
  if(deformation>180)                 
  {
car.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if (deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
}

// giving color to car1
if (wall.x - car1.x <(car1.width + wall.width/3))
{
  car1.velocityX=0;
  var deformation=0.5 * width * speed * speed/22509;
  if(deformation>180)                 
  {
car1.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100)
  {
    car1.shapeColor=color(230,230,0);
  }
  if (deformation<100)
  {
    car1.shapeColor=color(0,255,0);
  }
}

//giving color to car 2 
if (wall.x - car2.x <(car2.width + wall.width/3))
{
  car2.velocityX=0;
  var deformation=0.5 * width * speed * speed/22509;
  if(deformation>180)                 
  {
car2.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100)
  {
    car2.shapeColor=color(230,230,0);
  }
  if (deformation<100)
  {
    car2.shapeColor=color(0,255,0);
  }

    }

//displaying all the objects
  drawSprites();
}
