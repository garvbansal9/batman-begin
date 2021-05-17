class Umbrela {
    constructor(x, y) {
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, 50, options);
      this.radius = 50 ;
      //this.height = height;
      this.image = loadImage("walking_1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode( RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, 200, 300);
      pop();
    }
  };
  