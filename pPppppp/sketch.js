var rdrop = new Array();
var dropSpeed = 20;

function setup() {
  createCanvas(500, 500);

  frameRate(60);

  for (var i = 0; i < 100; i++) {
    rdrop[i] = new Raindrop(500,500);
  }
}

function draw() {
  background(220);
  stroke(255, 0, 0);

  for (var i = 0; i < 100; i++) {
    rdrop[i].drop();
  }


}
