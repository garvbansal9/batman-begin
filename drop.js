class Drop {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      //this.height = height;
      //this.image = loadImage("sprites/wood1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  