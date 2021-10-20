let button;
let bg4;
function preload(){
bg4 = loadImage('assets/8.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index3.html', '');
link1=createA('index2.html', '');
}
function draw(){
  background(bg4);
  button = createButton('checklist');
  button.position(114, 820);
  button.size(150,50);
img4 = button.mousePressed().parent(link);

button1 = createButton('explore');
button1.position(0, 820);
button1.size(150,50);
img4 = button1.mousePressed().parent(link1);


  }
