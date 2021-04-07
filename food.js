class Food{
    constructor(){
        var foodStock;
        var lastFed;
    }
    display(){
        var x=100,y=100;
        inageMode(CENTER);
        image(this.image,720,720,70,70);
        
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50
                }
                image(this.image,x,y,50,50);
            }
    }
    getFoodStock()
}
}