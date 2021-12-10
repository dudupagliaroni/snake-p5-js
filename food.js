class Food {
    constructor() {
      //this.food = createVector(x, y);
    }
  
    update() {
      let cols = width / scl;
      let rows = height / scl;
      console.log(floor(random(cols)));
      this.food = createVector(floor(random(cols)), floor(random(rows)));
    }
  
    show() {
      noStroke();
      fill(0, 255,0)
      rect(this.food.x*scl, this.food.y*scl, scl);
    }
  }