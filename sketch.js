var dog, dogIMG, dogHappyIMG, database;
var foodS, foodStock;
var feed; 
var milk1, milk2, milk3;

function preload()
{
  dogIMG = loadImage("images/dogImg.png")
  dogHappyIMG = loadImage("images/dogImg1.png"); 

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  dog = createSprite(250, 250, 10,10); 
  dog.scale = 0.3;
  dog.addImage(dogIMG);
  feed = createButton("Feed the Dog");
  feed.position(700,95);

  
  milk1 = new Food(100,250); 



}

function draw() {  

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogHappyIMG);
    
  }

  
  background("green");
  fill("red"); 
  textSize(15);
  text("PRESS THE UP ARR0W KEY TO FEED THE FRICKIN' DOG",50, 20);

    
 
 
  drawSprites();

  milk1.display();
  
}
function readStock(data){
  foodS = data.val();
}
function writeStock(foodCount){
  
  if(foodCount<=0){
    foodCount = 0
  }
  else{foodCount = foodCount - 1}
  database.ref("/").update({food: foodCount});
}



function mousePressed(){

}