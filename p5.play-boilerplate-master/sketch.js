var fighterplane
var bullet
var asteroid1, asteroid2, asteroid3
var earth
var space

function preload() {

fighterplaneIMG = loadImage("fighterplane2.png")
spaceIMG = loadImage("space.png")

}

function setup() {
  createCanvas(displayWidth-2, displayHeight-70);
  fighterplane = createSprite(400, 350, 100, 50);
  fighterplane.addImage(fighterplaneIMG)
  fighterplane.scale = 0.16


  
}

function draw() {
  background(spaceIMG);  
  drawSprites();
}