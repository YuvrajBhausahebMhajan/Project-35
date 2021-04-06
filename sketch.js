var dog;
var happyDog;
var foodS;
var foodStock;
var dogimg, dogimg1;
var database;

function preload() {
  dogimg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);

  // foodStock = database.ref("Food");
  // foodStock.on("value", readstock);

  dog = createSprite(250, 250, 50, 50);
  dog.scale = 0.1;
  dog.addImage(dogimg);
}

function draw() {
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(dogHappy);
  }

  drawSprites();

  text("Note: Please Press Up Arrow Key To Feed Milk To Dargo");
  textSise(50, 50);
  fill("black");
}

function readStock() {
  foodS = data.val();
}

function writeStock(x) {
  database.ref("/").update({
    Food: x,
  });
}
