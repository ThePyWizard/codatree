let img_tree;
let img_wood;

let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(1920, 1080, WEBGL);
  fill(240);
  noStroke();

  //cnv.mousePressed(playaudio);

  //loaded texture for the tree
  img_tree=loadImage('tree-texture.jpg')
  img_wood=loadImage('wood-texture2.jpg')
  img_snow=loadImage('snow.jpg')
}

function draw() {
    background('#191970');
    //position light according to the cursor movement
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);

    //snow rectangle creation

    push();
    translate(-0,450, 0);
    texture(img_snow);
    box(1920, 400,-1);
    pop();

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
    translate(-50, 170, -1);
    texture(img_wood);
    box(60, 150, 0);
    pop();
    push();
    translate(-50, 245, -1);
    texture(img_wood);
    box(90, 15, 0);
    pop();


    
    //snowflakes
    let t = frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (let i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake()); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
        flake.update(t); // update snowflake position
        flake.display(); // draw snowflake
    }
    

}


// snowflake class
function snowflake() {
    // initialize coordinates
    this.posX = random(width); // random X position within the canvas
    this.posY = -550; // random Y position within the canvas
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);
   
    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(0, pow(width, 2))); // full range from 0 to the square of the width of the canvas

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

