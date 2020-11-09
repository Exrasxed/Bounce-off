var movingrect
var fixedrect
var box1, box2, box3, box4;
function setup() {
  createCanvas(800,400);
  //movingrect = createSprite (400,200,50,50)
 // fixedrect= createSprite (500,200,50,50)
  box1 = createSprite (0,50,50,50)
  box1.velocityX = 3
  box2 = createSprite(400,50,50,50)
  box3 = createSprite(700,0,50,50)
  box2.velocityX = -3
  box4 = createSprite(700,400,50,50)
  box3.velocityY = 3
  box4.velocityY = -3
    
 // movingrect.shapeColor = "green"
 // fixedrect.shapeColor = "green"
  box1.shapeColor = "green"
  box2.shapeColor = "red"
  box3.shapeColor = "blue"
  box4.shapeColor = "yellow"
  
  
  
}

function draw() {
  background("orange"); 
  //movingrect.x = mouseX
  //movingrect.y = mouseY ;
 /* if(isTouching(movingrect, box2)){
      movingrect.shapeColor = "red" 
      box2.shapeColor = "red"
  }
  else {
      movingrect.shapeColor = "green"
      box2.shapeColor = "green"
  }*/
  bounceOff(box1, box2)
  bounceOff(box3, box4);
  drawSprites();


}
//function with argument list

function bounceOff(obj1, obj2){
  if (obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2 ){

      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
    }
 if(obj1.y - obj2.y < obj2.height/2 + obj2.height/2
    &&obj2.y - obj1.y < obj2.height/2 + obj1.height/2)
    {
      obj1.velocityY = obj1.velocityY * (-1);
      obj2.velocityY = obj2.velocityY * (-1);
    }
}
