class box2nd{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 0.5,
            density : 0.3,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        //var angle = this.body.angle;
        var pos = this.body.position;
        fill("yellow");
       /* push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();*/
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}