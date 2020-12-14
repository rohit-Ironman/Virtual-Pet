var dog, dogIMG, dogHappyIMG, database;
var foodS, foodStock;
var foodCount = 20; 
function preload()
{
  dogIMG = loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(250, 250, 10,10); 
  dog.scale = 0.3;
  dog.addImage(dogIMG);
}

function draw() {  

  if(keyWentDown(UP_ARROW)){
    foodCount = foodCount - 1;
    
  }
  background("green");
  fill("red"); 
  textSize(15);
  text("PRESS THE UPP ARR0W KEY TO FEED THE FRICKIN' DOG",50, 20);
  if(foodCount <= 0){
    foodCount = 0;
  }
  text("Food Remaining: " + foodCount, 200, 50);
 
 
 
  drawSprites();
  
}


