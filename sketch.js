//Create variables here
var ​dog,dogImage, happyDog, happyDogImage ,database, foodS, foodStock


function preload()
{
  dogImage = loadimage("images/dogImg.png")
	//load images here
  happyDogImage = loadimage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
engine = Engine.create();

world = engine.world;

dog = createSprite(250,250,10,10)
dog.addImage("dogImg",dogImage)


happyDog.addImage("happyDogIng",happyDogImage)

foodStock = database.ref("food");
foodStock.on("value",readStock);


}


function draw() {  

background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(dogHappy)
}


  drawSprites();
  //add styles here
  Text("foodStacks" + foodStock)
  Fill("orange")
}

function readStock(data){
  foodS = data.val();
}

function writeStocks(x){

  database.ref("/").update({
    food:x
  })
}