let img_tree;
let img_wood;

let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(1920, 1080, WEBGL);

  //cnv.mousePressed(playaudio);
  img_tree=loadImage('tree-texture.jpg')
  img_wood=loadImage('wood-texture2.jpg')
}

function draw() {
    background('#191970');
    //position light according to the cursor movement
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);

    //triangle creation
    push()
    translate(-50, -180, 0);
    rotateY(frameCount * 0.01);
    rotateX(PI);
    texture(img_tree);
    cone(120, 240);
    pop()

    //triangle creation
    push()
    translate(-50, -270, 0);
    rotateY(frameCount * 0.01);
    rotateX(PI);
    texture(img_tree);
    cone(60, 120);
    pop()

    //triangle creation
    push()
    translate(-50,-80, 0);
    rotateY(frameCount * 0.01);
    rotateX(PI);
    texture(img_tree);
    cone(180, 390);
    pop()
    
    //rectangle creation
    push();
    translate(-50, 170, 0);
    texture(img_wood);
    box(60, 150, 0);
    pop();
    push();
    translate(-50, 245, 0);
    texture(img_wood);
    box(90, 15, 0);
    pop();

}
