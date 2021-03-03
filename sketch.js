
function setup() {
  createCanvas(800,400);
  FixRectangle=createSprite(400, 200, 50, 50);
  FixRectangle.shapeColor="orange";
moveRect=createSprite(500,300,50,50)
moveRect.shapeColor="orange";
}
function draw() {
  background("lightgreen");  
  moveRect.x=World.mouseX;
  moveRect.y=World.mouseY;
if(moveRect.x-FixRectangle.x < FixRectangle.width/2 + moveRect.width/2 &&
  FixRectangle.x-moveRect.x < moveRect.width/2 + FixRectangle.width/2 &&
  moveRect.y-FixRectangle.y< FixRectangle.width/2 + moveRect.width/2 &&

  FixRectangle.y-moveRect.y < moveRect.width/2 + FixRectangle.width/2
  ){
moveRect.shapeColor="pink"
FixRectangle.shapeColor="pink"
}
else{
  moveRect.shapeColor="orange"
  FixRectangle.shapeColor="orange"
  
}
  drawSprites();
}