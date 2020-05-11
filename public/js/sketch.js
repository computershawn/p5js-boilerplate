const r = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  ellipse(width / 2, height / 2, r, r);
}