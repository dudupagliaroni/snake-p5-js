let scl = 20;
let snake;
function setup() {
  frameRate(2);
  createCanvas(400, 400);
  snake = new Snake(scl, scl);
  food = new Food();
}

function draw() {
  background(51);
  drawLines();
  food.update();
  food.show();
  snake.update();
  snake.show();
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
