class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(500,590,1000,20,options);
    //   this.width = width;
    //   this.height = height;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 1000, 20);
      pop();
    }
  };
