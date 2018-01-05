var centerX;
var centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadGif('ocean.gif');
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

function draw() {
  imageMode(CENTER);
  if (windowWidth > 2 * windowHeight) {
    image(img, centerX, centerY, windowWidth, 1.0 / 2.0 * windowWidth);
  }
  else {
    image(img, centerX, centerY, 2 * windowHeight, windowHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

function mouseDragged() {
}
