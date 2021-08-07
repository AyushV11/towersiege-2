class Box extends BaseClass{
  constructor(x, y, width, height){
   // var options = {
     // isStatic: true
  
  //this.body = Bodies.rectangle(x,y,width,height,options);
    super(x,y,width,height)
    this.image=loadImage("sprites/wood1.png")
    this.visibility = 225
  }
 
  display(){
    //super.display()
    console.log(this.body.speed)
    if(this.body.speed<8){
      super.display();
    }
    else{
      World.remove(world,this.body)
      push ()
      tint (225,this.visibility)
      super.display()
      this.visibility -=5
      pop ()
    }
    console.log(this.body.speed)
  }
}  
   

