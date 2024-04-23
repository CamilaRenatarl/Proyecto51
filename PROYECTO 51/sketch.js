var fondo, fondoImg;
var nova, novaImg,nova2;
var balas=60;
var gema1,gema1Img;
var gema2,gema2Img;
var gema3,gema3Img;
var gema4,gema4Img;
var gema5,gema5Img;
var nave, naveImg,nave1,nave1Img,nave2,nave2Img,nave3,nave3Img,nave4,nave4Img;
var GemCount=0;
function preload(){
  
 fondoImg=loadImage("IMAGENES/fd.png");
novaImg=loadImage("IMAGENES/Nova1.png");
nova2=loadImage("IMAGENES/Nova 2.png");
gema1Img=loadImage("IMAGENES/Gema 1(1).png")
gema2Img=loadImage("IMAGENES/Gema 2.png")
gema3Img=loadImage("IMAGENES/Gema 3.png")
gema4Img=loadImage("IMAGENES/Gema 4.png")
gema5Img=loadImage("IMAGENES/Gema 5.png")
naveImg=loadImage("IMAGENES/Nave(1).png")
nave1Img=loadImage("IMAGENES/Nave(1).png")
nave2Img=loadImage("IMAGENES/Nave(1).png")
nave3Img=loadImage("IMAGENES/Nave(1).png")
nave4Img=loadImage("IMAGENES/Nave(1).png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  fondo = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  fondo.addImage(fondoImg);
  //Crear a Nova
  nova=createSprite(displayWidth-1350,displayHeight-300,50,50);
  nova.addImage(novaImg);
  nova.scale=0.4;
  //Crear las gemas
  gema1=createSprite(displayWidth-250,350,50,50);
  gema1.addImage(gema1Img);
  gema1.scale=0.5;
  gema2=createSprite(displayWidth-400,400,50,50);
  gema2.addImage(gema2Img);
  gema2.scale=0.5;
  gema3=createSprite(displayWidth-450,200,50,50);
  gema3.addImage(gema3Img);
  gema3.scale=0.5;
  gema4=createSprite(displayWidth-350,300,50,50);
  gema4.addImage(gema4Img);
  gema4.scale=0.5;
  gema5=createSprite(displayWidth-300,150,50,50);
  gema5.addImage(gema5Img);
  gema5.scale=0.5;
//Crear las naves
nave=createSprite(displayWidth-600,150,50,50)
nave.addImage(naveImg);
nave.scale=0.4;

nave1=createSprite(displayWidth-650,300,50,50)
nave1.addImage(nave1Img);
nave1.scale=0.4;

nave2=createSprite(displayWidth-550,550,50,50)
nave2.addImage(nave2Img);
nave2.scale=0.4;

nave3=createSprite(displayWidth-400,600,50,50)
nave3.addImage(nave3Img);
nave3.scale=0.4;

nave4=createSprite(displayWidth-650,450,50,50)
nave4.addImage(nave4Img);
nave4.scale=0.4;

}

function draw() {
  background(0); 

  


//MOVIMIENTOS DE NOVA
  if(keyDown("UP_ARROW")){
    nova.y=nova.y-5
    
  }
  if(keyDown("DOWN_ARROW")){
    nova.y=nova.y+5
    
  }
  if(keyDown("RIGHT_ARROW")){
    nova.x=nova.x+5
  }
  if(keyDown("LEFT_ARROW")){
    nova.x=nova.x-5
  }
  //NOVA DISPARA
if(keyWentDown("space")){
balas=createSprite(displayWidth-1150,nova.y-30,20,10);
balas.velocityX=7;
nova.addImage(nova2);
}
 
 
drawSprites();

}



