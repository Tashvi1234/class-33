class Ground {

    constructor (x,y,w, h) {
        var groundOptions = {
            isStatic : true
        }
        this.width = w;
        this.height = h;
        // create physics engine body
        this.groundBody = Bodies.rectangle (x, y, this.width, this.height, groundOptions);
        World.add (myWorld, this.groundBody);

        //console.log (this);
        
        
    }

    display () {
        var pos = this.groundBody.position;
        rectMode (CENTER);    
        push ();
        fill ("brown");
        rect (pos.x, pos.y, this.width, this.height);
        pop ();

    }

}