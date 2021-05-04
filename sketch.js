function preload(){
 mainimg=loadImage("mlobby2.jpg")
 lobbyimg=loadImage("lobby.jpg")
 manimg=loadImage("mann-removebg-preview.png")
  emote=loadImage("tenor-unscreen.gif")
  music=loadSound("1-theme.mp3")
  es=loadImage("emotesection-removebg-preview.png")
  eimg=loadImage("nach-removebg-preview.png")
  avoice=loadSound("DJ Alok Voice Character Free Fire.mp3")
}

function setup() {
 createCanvas(645,365)
  
  lobby=createSprite(320,183)
  lobby.addImage(lobbyimg)
  lobby.scale=1.3;
  
  man=createSprite(320,188)
  man.addImage(manimg)
  man.scale=1.3;
  
  
  music.play();
  
  
  emotes=createSprite(530,270)
  emotes.addImage(es)
  emotes.scale=1.5;
  emotes.visible=false;
  
  e=createSprite(475,115)
  e.addImage(eimg)
  e.scale=0.2;
  e.visible=false;
  
  
  main=createSprite(360,198)
  main.addImage(mainimg)
  main.scale=0.6;
  
  wall1=createSprite(5,198,10,100)
  wall1.visible=false;
  wall2=createSprite(535,198,10,100)
  wall2.visible=false;
}

function draw() {
 
  background("white")
  
  if(wall1.isTouching(wall2)){
    man.addImage(manimg);
    avoice.stop();
    wall1.x=5;
    wall1.velocityX=0;
  }
  
  if(mousePressedOver(main)) {
      main.destroy();
      music.stop();
    
    }
   
  if(mousePressedOver(man)) {
      emotes.visible=true;
      e.visible=true;
    }
  
if(mousePressedOver(e)) {
      man.addImage(emote);
      e.visible=false
      emotes.visible=false
  emote.lifeTime=10;
  avoice.play();
  wall1.velocityX=3
    }
  
  man.debug=false;
  drawSprites();
}
 



