class Drops{
    constructor(x, y, r) {
        var options = {
            'frictionAir':0.006,
            'density':3.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}