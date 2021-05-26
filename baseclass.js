class BaseClass {  
    //properties
    constructor(x,y,w,h, angle) {
        this.width = w;
        this.height = h;
        this.boxBody;
        this.image = loadImage("sprites/base.png");

        var options = {
            isStatic : false, 
            restitution : 0.8, // bounciness
            friction:1.0,
            density:1.0
        }
        
        //create physics engine body
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);
        // add the physics engine body world
        World.add (myWorld, this.body);
        console.log(this.body);
    }


    //methods  or functions

    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode (RADIANS);
        translate(pos.x,pos.y);
        rectMode (CENTER); 
        
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        //rect (0,0, this.width, this.height);
        pop();

        
        
        
  
    }





}