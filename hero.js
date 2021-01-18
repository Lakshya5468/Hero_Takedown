class Hero {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      this.image = loadAnimation("spites/Superhero1.png","spites/Superhero2.png")
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      stroke("black")
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };