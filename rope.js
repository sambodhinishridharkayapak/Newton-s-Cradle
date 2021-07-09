class rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
           stiffness: 0.5,
            //length: 300

        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        console.log(this.rope)
    }
    //attach(body) {
     //   this.rope.bodyA = body;
   // }
    //fly() {
    //    this.rope.bodyA = null;
    //}
    display() {
       // if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            // fill("green");
            stroke(0);
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop();

       // }
    }
}
