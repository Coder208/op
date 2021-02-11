var car, wall;
var speed, weight;

function setup() {
  createCanvas(1000,400);
  background.shapeColor = "black";
    
  car=createSprite(50, 200, 50, 50);
  car.shapeColor = "blue";
  speed=random(50,80)
  weight=random(400,1500)

  wall=createSprite(1000,200, 60, height/2)
  wall.shapeColor= "black";
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  

if (wall.x-car.x < (car.width + wall.width)/2) {

  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22500;

  if (deformation>180) {
    car.shapeColor= "red"
  }

  if (deformation < 180 && deformation > 100){
    car.shapeColor= ("orange")
  }

  if (deformation<100){
    car.shapeColor= "green"
  }

}


  drawSprites();
}