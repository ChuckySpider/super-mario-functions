// Player position
let x = 100;
let y = 300;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(120, 190, 255); // sky

  fill('yellow');
  rect(100, 145, 50, 50);
  fill('orange')
  textSize(45);
  text('?', 110, 185);
  
  fill('yellow');
  rect(250, 145, 50, 50);
  fill('orange')
  textSize(45);
  text('?', 260, 185);
  
  fill('yellow');
  rect(400, 145, 50, 50);
  fill('orange')
  textSize(45);
  text('?', 410, 185);
  
  fill('brown');
  rect(464, 303, 20, 27);
  
  fill('brown');
  triangle(450, 315, 500, 315, 475, 280);
  
  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();

  if (key === "d") moveRight();
  
  if (key === "a") moveLeft();
}

function moveRight() {
  x = x+5
}

function moveLeft() {
  x = x-5
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 325 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill('red');
  rect(x, y-30, 33, 15);
  fill(250,180,140);
  rect(x, y-14, 33, 17);
  fill('blue');
  rect(x+3, y+3, 28, 28);
}