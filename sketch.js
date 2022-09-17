var bg, bgimage
 var player,shooterImg,shootingImg
var heart_1Img,heart_2Img,heart_3Img
var zombie,zombieImg


function preload(){
bgimage = loadImage("assets/bg.jpeg");
shooterImg = loadImage("assets/shooter_1.png");
shootingImg = loadImage("assets/shooter_3.png");
heart_1Img = loadImage("assets/heart_1.png");
heart_2Img = loadImage("assets/heart_2.png");
heart_3Img = loadImage("assets/heart_3.png");
zombieImg = loadImage("assets/zombie.png");
}
function setup(){
createCanvas(windowWidth,windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgimage);
bg.scale = 1.5
player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImg);

player.scale = 0.5;
}






function draw(){
  background(0)
  if(keyDown("UP_ARROW") || touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW") || touches.length>0){
    player.y = player.y+30
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+30
   }
   if(keyDown("LEFT_ARROW")){
    player.x=player.x-30
   }
  if(keyDown("SPACE")){
   player.addImage(shootingImg)
  }
drawSprites()


}
