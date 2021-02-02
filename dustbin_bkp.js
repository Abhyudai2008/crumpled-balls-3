class Dustbin {
    constructor(x, y, width, height)
    {
        var option=
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png")
    
        World.add(world, this.body);
    }
    display()
    {
        fill("white");
        var posi = this.body.position;
        push();
        translate(posi.x, posi.y);
        rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        pop();
    }
}