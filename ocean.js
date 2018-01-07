var centerX;
var centerY;
var zoomed;

function preload() {
  img = loadGif('ocean.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

function draw() {
  imageMode(CENTER);
  if (zoomed) {
    if (windowWidth > 2 * windowHeight) {
      image(img, centerX, centerY, 2 * windowWidth, windowWidth);
    }
    else {
      image(img, centerX, centerY, 4 * windowHeight, 2 * windowHeight);
    }
  }
  else if (windowWidth > 2 * windowHeight) {
    image(img, centerX, centerY, windowWidth, 1.0 / 2.0 * windowWidth);
  }
  else {
    image(img, centerX, centerY, 2 * windowHeight, windowHeight);
  }
}

function windowResized() {
  if (zoomed) {
    resizeCanvas(windowWidth * 2, windowHeight * 2);
    centerX = windowWidth;
    centerY = windowHeight;
  }
  else {
    resizeCanvas(windowWidth, windowHeight);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
  }
}

function mousePressed() {
  if (zoomed) {
    zoomed = false;
    resizeCanvas(windowWidth, windowHeight);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
    draw();
  }
  else {
    zoomed = true;
    resizeCanvas(windowWidth * 2, windowHeight * 2);
    centerX = windowWidth;
    centerY = windowHeight;
    draw();
  }
}

