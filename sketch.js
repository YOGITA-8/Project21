var bullet,wall;
var speed,weight,thickness;



function setup() {

  createCanvas(1600,400);

    //random values to speed and weight
    speed=random(223,321);
    weight=random(30,52);
  
    //random value to thickness of wall
    thickness=random(22,83);
  
    //bullet creating sprite ,color and velocity
    bullet=createSprite(50,200,50,5);
    bullet.shapeColor=color(225);
    bullet.velocityX=speed;
  
    //wall creating sprite and color
    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);
  

}



function draw() {

  //dark yellow background
  background(230,200,0);  

 
   if (hasCollided(bullet,wall)){

    bullet.velocityX=0;
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=color(225,0,0);
      bullet.velocityX=0;

      fill(0,20,225);
      text("Speed is :"+speed,400,50);
      text("Weight is :"+weight,400,150);
      text("Wall Thickness is :"+thickness,400,250);
      text("Material is rejected",400,350);
      
    }

    if (damage<10){
      wall.shapeColor=color(0,225,0);
      bullet.velocityX=0;

      fill(0,20,225);
      text("Speed is :"+speed,400,50);
      text("Weight is :"+weight,400,150);
      text("Wall Thickness is :"+thickness,400,250);
      text("Material is perfect",400,350);
    }

   }

  

  drawSprites();

}



function hasCollided(Ibullet,Iwall){

  bulletRightEdge =Ibullet.x + Ibullet.width;
  wallLeftEdge = Iwall.x;
  if (bulletRightEdge >=wallLeftEdge){

    return true;
  }
  return false;
  
}