let img_tree;
let img_wood;

function setup() {

  createCanvas(710, 400, WEBGL);
  img_tree=loadImage('tree-texture.jpg')
  img_wood=loadImage('wood-texture2.jpg')
}

function draw() {

    //position light according to the cursor movement
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);

    //triangle creation
    push()
    translate(-100, -120, 0);
    rotateY(frameCount * 0.01);
    rotateX(PI);
    texture(img_tree);
    cone(40, 80);
    pop()

    //triangle creation
    push()
    translate(-100, -150, 0);
    rotateY(frameCount * 0.01);
    rotateX(PI);
    texture(img_tree);
    cone(20, 40);
    pop()

    //triangle creation
    push()
    translate(-100, -85, 0);
    rotateY(frameCount * 0.01);
    rotateX(PI);
    texture(img_tree);
    cone(60, 130);
    pop()
    
    //rectangle creation
    push();
    translate(-100, -10, 0);
    texture(img_wood);
    box(20, 50, 0);
    pop();
    
}


