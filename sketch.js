
function setup() {
  
  createCanvas(600, 600);
  
  background ("yellow");
  
}

function draw() {
  
stroke("blue");

fill("red");

if(mouseIsPressed){
    
rect(mouseX, mouseY ,50, 65);

}
  
}
