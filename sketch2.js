let button;
let bg2;
function preload(){
bg2 = loadImage('assets/6.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index3.html', '');
link1=createA('index4.html', '');
}
function draw(){
  background(bg2);
  button = createButton('Event checklist');
  button.position(114, 820);
  button.size(150,50);
img2 = button.mousePressed().parent(link);

button1 = createButton('profile');
button1.position(264, 820);
button1.size(150,50);
img3 = button1.mousePressed().parent(link1);

  }
