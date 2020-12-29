class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('images/Milk.png');
    }

// Different methods like getFoodStock, updateFoodStock, deductFood, getFedTime to read & write the Food Stock, also to deduct the Food.

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
  
      if(lastFed>=12){
        text("Last Feed : "+ lastFed%12 + " PM", 350,30);
       }else if(lastFed==0){
         text("Last Feed : 12 AM",350,30);
       }else{
         text("Last Feed : "+ lastFed + " AM", 350,30);
       }
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
    garden(){
      background(garden, 550,550); 
    }
    bedroom(){
      background(bedroom, 550,550); 

    }
    washroom(){
      background(bedroom, 550, 500);
    }
}




  
