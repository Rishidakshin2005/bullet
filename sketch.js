var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1109,200,200,height/2);
  
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityY = 0;
  movingRect.velocityX = 5;
  
  
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect) ;
  drawSprites();
}

function  bounceOff(obj1,obj2) {
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  
  
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  
  
}
}

    
  

  
