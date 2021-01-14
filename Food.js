class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("Milk.png");
    }
updateFoodstock(foodStock){
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
bedroom(){
    background("bedroom.png",550,500)
}
garden(){
    background("Garden.png",550,500)
}
washroom(){
    background("washroom.png",550,500)
}
display(){
    var x=80,y=100;
imageMode(CENTER);
image(this.image,x,y,50,50);
x=x+30;
}
}