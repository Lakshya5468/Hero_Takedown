class Chain {
    constructor(bodyA,pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          lenght:100,
          stiffness:0.5
      }
      
      this.chain=Constraint.create(options);

      World.add(world, this.chain);
    }
    display(){
      push();
      var pos =this.chain.bodyA.position;
      var point=this.chain.pointB;
      rectMode(CENTER);
      fill("green");
      line(pos.x,pos.y,point.x,point.y);
      pop();
    }
  };