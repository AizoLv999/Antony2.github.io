function setup() {
  let canvas = createCanvas(250, 300, WEBGL);
  canvas.parent('block1'); // This line ensures the canvas is placed within the block1 div
  background('yellow');
}

function draw() {
  background('yellow');
  normalMaterial();
  push();
  rotateZ(frameCount * 0.05);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  cone(100, 200);
  pop();
}