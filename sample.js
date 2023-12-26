let myModel;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  myModel = loadModel('star2.obj', true);
}

function draw() {
  background(200);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // Scale the model
  scale(1.5);  // Increase the size by 50%
  
  model(myModel);
}
