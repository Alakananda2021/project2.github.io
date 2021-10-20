let bg3;
var itemInput;
var button;
var list;

function preload(){
bg3 = loadImage('assets/9.png');
}
function setup() {
  createCanvas(414, 190);
  stroke('red');
    background(220);
  list=addItem;
  itemInput = createInput('Type a checklist item here');
  itemInput.position(100,150);
  itemInput.size(155,40);
  button = createButton('Add');
  button.mousePressed(list);
  button.position(280, 150);
  button.size(80,40);

link1=createA('index2.html', '');



}
function draw(){
  background(bg3);

  button1 = createButton('back');
  button1.position(0, 0);
  button1.size(80,50);
  img5 = button1.mousePressed().parent(link1);
  }

  function addItem() {
    var li = createElement('li', itemInput.value());
    li.parent("todolist");
  }
