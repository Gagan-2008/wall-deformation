var bullet,wall;
var speed,weight;



function setup() {
createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
thickness=random(22,100)



bullet=createSprite(50,200,50,10);
bullet.velocityX=speed;
bullet.shapeColor=color(255);

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0); 
  if(hasColided(wall,bullet))
  {
    bullet.velocityX = 0;
    var damage =(0.5* weight *speed *speed)/(thickness*thickness*thickness);
    console.log(damage)
    if (damage >10)
    {
      wall.shapeColor=color(0,255,0);
    }
    else 
    {
      wall.shapeColor=color(255,0,0);
    }
 } 
  
 drawSprites();
}
function hasColided(obj1, obj2) {
  if(obj1.x-obj2.x < (obj2.width+obj1.width)/2)
  {
    return true;
  }
  else
  {
    return false;
  }

}
