
class Ground {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      var options = {
        isStatic:true,
      }
      this.body = Bodies.rectangle(this.x,this.y,width,height,options);
      World.add(world,this.body);
    }
  
    
  
    display(){
     
      
    rect(this.x,this.y,this.width,this.height);
    
      
    }
}