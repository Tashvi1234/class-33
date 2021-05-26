 class SlingShot {

    constructor (bodyX,pointY) {
        var slingOptions = {
               bodyA : bodyX,
               pointB : pointY,
               stiffness : 0.04,
               length : 10
          }

        this.slingshot = Constraint.create (slingOptions);

        this.sling1 = loadImage ("sprites/sling1.png");
        this.sling2 = loadImage ("sprites/sling2.png");
        this.sling3 = loadImage ("sprites/sling3.png");

        World.add (myWorld, this.slingshot);

        //console.log (this);
        
        
    }

    display () {
        image (this.sling1, 200,20);
        image (this.sling2 ,170,20);
        if  (this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            if (pointA.x < 220) {
                strokeWeight (8);
                stroke(52,18,28);
                line (pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line (pointA.x-20,pointA.y,pointB.x + 30,pointB.y - 3);
                image(this.sling3,pointA.x - 30,pointA.y-10,15,30);        
             } else {
                strokeWeight (4);
                stroke(52,18,28);
                line (pointA.x+25, pointA.y, pointB.x-10 , pointB.y );
                line (pointA.x +25,pointA.y,pointB.x + 30,pointB.y - 3);
                image(this.sling3,pointA.x +25,pointA.y-10,15,30);     
             }

       }
    }

    fly () {
        this.slingshot.bodyA = null;
    }
    attach(body)  {
        this.slingshot.bodyA = body;

    }
}