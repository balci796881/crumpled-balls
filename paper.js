class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image = loadImage("paper.png");
        this.paperbody = Bodies.rectangle(x, y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world, this.paperbody);
    }
    display(){
        push();
        translate(this.paperbody.position.x,this.paperbody.position.y)
        imageMode(CENTER)

        fill("yellow")

        image(this.image,0,0,this.width,this.height);
        pop();
    }
};