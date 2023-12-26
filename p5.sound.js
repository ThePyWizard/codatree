let song;

function preload() {
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(720, 200);
  song.loop(); 
}

function draw() {
  background(0, 255, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0); 
  }
}