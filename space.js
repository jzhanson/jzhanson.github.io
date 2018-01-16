var smallStars = [];
var largeStars = [];
var hyperspace = false;


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  stroke(255);
  line(30, 40, 50, 60);

  /* Large stars */
  for (var i = 0; i < 50; i++) {
    largeStars.push(new LargeStar());
  }

  /* Medium stars */
  for (var i = 0; i < 100; i++) {
    smallStars.push(new Star());
  }

  frameRate(1);

}

function draw() {
  background(0);
  for (var i = 0; i < 100; i++) {
    smallStars[i].draw();
  }
  for (var i = 0; i < 50; i++) {
    largeStars[i].draw();
  }
}

function Star() {
  this.x = random(displayWidth);
  this.y = random(displayHeight);

  this.wh = random(1, 3);
}

Star.prototype.draw = function() {
  if (hyperspace) {
    hyperspaceLines(this.x, this.y);
  }
  else {
    noStroke();
    fill(255, 255, 255);

    this.wh = random(1, 3);

    rect(this.x, this.y, this.wh, this.wh);
  }

}

function LargeStar() {
  this.x = random(displayWidth);
  this.y = random(displayHeight);

  this.size = random(1, 3);
}

LargeStar.prototype.draw = function() {
  if (hyperspace) {
    hyperspaceLines(this.x, this.y);
  }
  else {
    stroke(255);

    this.size = random(1, 3);

    line(this.x-this.size, this.y+this.size, this.x+this.size, this.y-this.size);
    line(this.x-this.size, this.y-this.size, this.x+this.size, this.y+this.size);

    line(this.x-1, this.y, this.x+1, this.y);
    line(this.x, this.y+1, this.x, this.y-1);

    /*
       line(x+this.size, y, x-this.size, y);
       line(x, y+this.size, x, y-this.size);
       line(x-1, y+1, x-1, y-1);
       line(x+1, y+1, x+1, y-1);
       */
  }

}

function mousePressed() {
  hyperspace = !hyperspace;
}

function hyperspaceLines(x, y) {
  var centerX = windowWidth / 2;
  var centerY = windowHeight / 2;
  var xOffset = 0;
  var yOffset = 0;
  if (x < windowWidth / 2) {
    xOffset = -5;
  }
  else {
    xOffset = 5;
  }
  if (y < windowHeight / 2) {
    yOffset = -5;
  }
  else {
    yOffset = 5;
  }

  stroke(255);
  line(x+xOffset, y+yOffset, x, y);

}
