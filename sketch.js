let button;
let bg;
function preload(){
  bg = loadImage('assets/Sign in.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index2.html', '');
}

function draw(){
  background(bg);
  input = createInput('Phillip');
    input.position(120,352);
    input = createInput('********');
    input.position(120,400);
    button = createButton('Login');
    button.position(180, 450);
    img = button.mousePressed().parent(link);

  }
