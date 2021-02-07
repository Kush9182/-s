class Knight{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h);
        this.image=loadImage("images/standingKnightImage.png");
        this.a=loadAnimation("knightWalking/1.png","knightWalking/2.png","knightWalking/3.png","knightWalking/4.png","knightWalking/5.png")
        this.width=w;
        this.height=h;
        World.add(world,this.image)
        World.add(world,this.body);
    }
    display(){
        
        if(keyDown("RIGHT_ARROW")){
            knight.body.position.x=knight.body.position.x+0.5
            animation(this.a,this.body.position.x,this.body.position.y,225,150) 
        }
        else{
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,225,150)
        }
    }
}