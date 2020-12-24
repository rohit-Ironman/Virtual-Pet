var dog, dogIMG, dogHappyIMG, database;
var foodS, foodStock;
var lastFed, fedTime, foodObj; 
var feed; 
var addFood;
var milk1, milk2, milk3, milk4, milk5;
var milkIMG;

function preload()
{
  dogIMG = loadImage("images/dogImg.png")
  dogHappyIMG = loadImage("images/dogImg1.png"); 
  milkIMG = loadImage("images/Milk.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  dog = createSprite(400, 250, 10,10); 
  dog.scale = 0.3;
  dog.addImage(dogIMG);

  milk1 = createSprite(200,300,10,10);
  milk1.addImage(milkIMG);
  milk1.scale = 0.1;

  milk2 = createSprite(150,300,10,10);
  milk2.addImage(milkIMG);
  milk2.scale = 0.1;

  milk3 = createSprite(100,300,10,10); 
  milk3.addImage(milkIMG); 
  milk3.scale = 0.1;

  milk4 = createSprite(50,300,10,10);
  milk4.addImage(milkIMG);
  milk4.scale = 0.1;




  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);


  addFood = createButton("Add Food"); 
  addFood.position(500,95); 
  addFood.mousePressed(addFoods);
 






}

function draw() {  

 

  
  background("green");
  fill("red"); 
  textSize(15);
  text("PRESS THE UP ARR0W KEY TO FEED THE FRICKIN' DOG",50, 20);

    fedTime = database.ref("FeedTime"); 
    fedTime.on("value", function(data){
      lastFed = data.val();
    }); 
 
  drawSprites();


  
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


function feedDog(){
  milk2.remove(); 
  dog.addImage(dogHappyIMG);
  

}

function addFoods(){
  milk2 = createSprite(150,300,10,10);
  milk2.addImage(milkIMG);
  milk2.scale = 0.1;

  dog.addImage(dogIMG);

  foodS++; 
  database.ref("/").update({Food:foodS})
}
