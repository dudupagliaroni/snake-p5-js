class Snake {
    constructor(x, y) {
      this.total = 0;
      this.tail = [];
      this.dir = 1;
      this.tail[0] = createVector(x, y);
      this.tail[1] = createVector(x, y);
      this.tail[2] = createVector(x, y);
      this.tail[3] = createVector(x, y);
      this.tail[4] = createVector(x, y);
      this.tail[5] = createVector(x, y);
      this.tail[6] = createVector(x, y);
    }
  
    update() {
      for (var i = 0; i < this.tail.length - 1; i++) {
        let _x = this.tail[this.tail.length - 2 - i].x;
        let _y = this.tail[this.tail.length - 2 - i].y;
  
        this.tail[this.tail.length - 1 - i].x = _x;
        this.tail[this.tail.length - 1 - i].y = _y;
      }
  
      switch (this.dir) {
        case 0:
          this.tail[0].y = this.tail[0].y - scl;
          break;
        case 1:
          this.tail[0].x = this.tail[0].x + scl;
          break;
        case 2:
          this.tail[0].y = this.tail[0].y + scl;
          break;
        case 3:
          this.tail[0].x = this.tail[0].x - scl;
          break;
      }
    }
  
    show() {
      noStroke();
      fill(255, 0, 255);
      for (var i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl);
      }
    }
  
    move(key) {
      console.log(key);
      switch (key) {
        case UP_ARROW:
          if (this.dir != 2) {
            this.dir = 0;
          }
          break;
        case DOWN_ARROW:
          if (this.dir != 0) {
            this.dir = 2;
          }
          break;
        case RIGHT_ARROW:
          if (this.dir != 3) {
            this.dir = 1;
          }
          break;
        case LEFT_ARROW:
          if (this.dir != 1) {
            this.dir = 3;
          }
          break;
      }
    }
  }