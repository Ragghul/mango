class man{
    constructor(x,y,radius){
    
    var options = {
    
    friction : 0.5,
    density :1.2,
    isStatic : true,
    restitution : 0.5,
    };
    
    this.body = Bodies.circle(x,y,radius,options);
    //this.image = loadImage("sprites/mango.png");
    World.add(world,this.body);
    
    }
    display(){
    var position = this.body.position;
    this.image;
    strokeWeight(4);
    fill(200);
    ellipseMode(RADIUS);
    ellipse(position.x,position.y,this.radius);
    //imageMode(CENTER);
   // image(this.image, 0, 0, this.width, this.height);
    }
    
    
    }































