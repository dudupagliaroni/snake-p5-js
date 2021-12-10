let scl = 40;
let snake;
function setup() {
  frameRate(10);
  createCanvas(800, 800);
  snake = new Snake(scl, scl);
  food = new Food();
  food.update(snake);
}

function draw() {
  background(51);
  drawLines();

  food.show();
  snake.update();
  snake.show();
  if (snake.tail[0].x == food.pos.x && snake.tail[0].y == food.pos.y) {
    snake.createpart();
    snake.total++;
    food.update(snake);
  }
}

function drawLines() {
  stroke(150);
  for (var i = 0; i < width / scl; i++) {
    line(0, scl * i, width, scl * i);
    line(scl * i, 0, scl * i, height);
  }
}

function keyPressed() {
  snake.move(keyCode);
}
