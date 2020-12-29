var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;
var gameState;
var readStock;
var garden; 
var washroom; 
var bedroom; 

function preload(){
sadDog=loadImage("images/Dog.png");
happyDog=loadImage("images/happy dog.png");
garden = loadImage("images/Garden.png"); 
bedroom = loadImage("images/Bed Room.png"); 
washroom = loadImage("images/Wash Room.png")
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  foodObj = new Food();

  /*milk1 = createSprite(200,300,10,10);
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
  milk4.scale = 0.1;*/

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  readStock = database.ref("gameState"); 
  readStock.on("value", function(data){
    gameState = data.val();
  })
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();


 
  fill(255,255,254);
  textSize(15);
    currentTime = hour(); 
    if(currentTime ==(lastFed + 1)){
      update("Playing"); 
      foodObj.garden(); 

    }else if(currentTime==(lastFed + 2)){
      update("Sleeping"); 
      foodObj.bedroom();

    }else if(currentTime>(lastFed + 2) && currentTime<=(lastFed + 4)){
      update("Bathing"); 
      foodObj.washroom(); 

    }else{
      update("Hungry"); 
      foodObj.display();
    }
 if(gameState != "Hungry"){
   feed.hide(); 
   addFood.hide(); 
   dog.remove(); 

 }else{
   feed.show();
   addFood.show(); 
   dog.addImage(sadDog); 
 }
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){

  
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour(),
    gameState:"Hungry"
  })
}

//function to add food in stock
function addFoods(){
  //milk2 = createSprite(150,300,10,10);
  //milk2.addImage(milkIMG);
  //milk2.scale = 0.1;

  //dog.addImage(dogIMG);
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
function update(state){
database.ref("/").update({
  gameState:state
});
}