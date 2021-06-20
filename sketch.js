
var corona,coronaImg;
var man,manImg;
var manr,manrImg;
var manf,manfImg;
var mask,maskImg;

function preload(){
coronaImg=loadImage("Images/corona.png");
manImg=loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png","Images/5.png");
manrImg=loadAnimation("Images/b1.png","Images/b2.png","Images/b3.png","Images/b4.png","Images/b5.png");
manfImg=loadImage("Images/front.png");
maskImg=loadImage("Images/Mask.png");
  }





function setup() {
  createCanvas(1365,600);  
 

    block1 = createSprite(700,5,1400,10);
    block2 = createSprite(1360,120,10,950);
    block3 = createSprite(700,595,1400,10);
    block4 = createSprite(5,162,10,950);
    block5 = createSprite(100,70,20,120);
    block5.shapeColor="grey";
    block6 = createSprite(400,70,20,120);
    block6.shapeColor="grey";
    block7 = createSprite(760,70,20,120);
    block7.shapeColor="grey";
    block8 = createSprite(950,70,20,120);
    block8.shapeColor="grey";
    block9 = createSprite(1100,70,20,120);
    block9.shapeColor="grey";
    block10 = createSprite(500,530,20,120);
    block10.shapeColor="grey";
    block11 = createSprite(800,530,20,120);
    block11.shapeColor="grey";
    block12 = createSprite(950,530,20,120);
    block12.shapeColor="grey";
    block13 = createSprite(1200,530,20,120);
    block13.shapeColor="grey";
    block14 = createSprite(5,200,140,20);
    block14.shapeColor="grey";
    block15 = createSprite(400,130,140,20);
    block15.shapeColor="grey";
    block16 = createSprite(690,80,140,20);
    block16.shapeColor="grey";
    block17 = createSprite(950,130,140,20);
    block17.shapeColor="grey";
    block18 = createSprite(1170,80,140,20);
    block18.shapeColor="grey";
    block19 = createSprite(560,470,130,20);
    block19.shapeColor="grey";
    block20 = createSprite(1140,540,130,20);
    block20.shapeColor="grey";
    block21 = createSprite(230,200,20,140);
    block21.shapeColor="grey";
    block22 = createSprite(170,270,130,20);
    block22.shapeColor="grey";
    block23 = createSprite(100,325,20,120);
    block23.shapeColor="grey";
    block24 = createSprite(300,360,20,120);
    block24.shapeColor="grey";
    block25 = createSprite(240,420,130,20);
    block25.shapeColor="grey";
    block26 = createSprite(390,300,30,100);
    block26.shapeColor="grey";
    block27 = createSprite(650,550,80,20);
    block27.shapeColor="grey";
    block28 = createSprite(880,550,60,20);
    block28.shapeColor="grey";
    block29 = createSprite(1030,350,20,130);
    block29.shapeColor="grey";
    block30 = createSprite(900,360,80,20);
    block30.shapeColor="grey";
    block31 = createSprite(650,300,90,20);
    block31.shapeColor="grey";
    block32 = createSprite(650,300,20,90);
    block32.shapeColor="grey";
     block33=createSprite(1300,180,140,20)
     block33.shapeColor="grey";
      block34=createSprite(370,540,20,180)
     block34.shapeColor="grey";
     block35=createSprite(150,520,180,20)
     block35.shapeColor="grey";
 
 block36=createSprite(1280,360,20,150)
     block36.shapeColor="grey";

   block37=createSprite(1120,250,120,20)
     block37.shapeColor="grey";
      block38=createSprite(1170,360,90,20)
     block38.shapeColor="grey";
    
     block39=createSprite(900,300,20,120)
     block39.shapeColor="grey";
     
     block40=createSprite(550,200,120,20)
     block40.shapeColor="grey";
     block41=createSprite(780,280,20,130)
     block41.shapeColor="grey";
     block42=createSprite(500,320,20,130)
     block42.shapeColor="grey";
    
     
     man=createSprite(50,540,10,10);
     man.addAnimation("man",manImg);
     man.scale=0.3;

     corona1=createSprite(450,40,10,10);
     corona1.addImage("corona",coronaImg);
     corona1.scale=0.2;
    
     corona2=createSprite(550,40,10,10);
     corona2.addImage("corona",coronaImg);
     corona2.scale=0.2;

     corona3=createSprite(650,40,10,10);
     corona3.addImage("corona",coronaImg);
     corona3.scale=0.2;
  }
  
function draw(){
 
  background("black"); 
    
  if(keyDown(UP_ARROW)) {
    man.velocityX = 0;
    man.velocityY = -3;
    man.addImage("man",manfImg);
  }
  if (keyDown(DOWN_ARROW)) 
  {
   man.velocityX=0;
   man.velocityY=3;
   man.addImage("man",manfImg);
  }
  if (keyDown(RIGHT_ARROW)) 
  {
 man.velocityX=3;
  man.velocityY=0;
  man.addAnimation("man",manImg);        
  }
  if (keyDown(LEFT_ARROW))
  {
man.velocityX=-3;
man.velocityY=0;
man.addAnimation("man",manrImg);
                
  }

  man.collide(block1);
man.collide(block2);
man.collide(block3);
man.collide(block4);
man.collide(block5);
man.collide(block6);
man.collide(block7);
man.collide(block8);
man.collide(block9);
man.collide(block10);
man.collide(block11);
man.collide(block12);
man.collide(block13);
man.collide(block14);
man.collide(block15);
man.collide(block16);
man.collide(block17);
man.collide(block18);
man.collide(block19);
man.collide(block20);
man.collide(block21);
man.collide(block22);
man.collide(block23);
man.collide(block24);
man.collide(block25);
man.collide(block26);
man.collide(block27);
man.collide(block28);
man.collide(block29);
man.collide(block30);
man.collide(block31);
man.collide(block32);
man.collide(block33);
man.collide(block34);
man.collide(block35);
man.collide(block36);
man.collide(block37);
man.collide(block38);
man.collide(block39);
man.collide(block40);
man.collide(block41);
man.collide(block42);



  drawSprites();
}   
