class Pig extends BaseClass{
    constructor (x,y) {
        super(x,y,50,50);
        this.image =loadImage ("sprites/enemy.png");
        this.visibility = 255;
    }
    display () {
        if (this.body.speed < 3) {
        
            super.display ();
            //console.log ("SPEED :" + this.body.speed);

        } else {
            // do nothing
            World.remove(myWorld, this.body);
            push ();
            tint(255,this.visibility);

            image(this.image,this.body.position.x,this.body.position.y,50,50);
            this.visibility = this.visibility - 5;
            pop ();
        }
    }
}


