var  player,p1;

var edges;
var test,lifetime = 100;
var bgimg,bgmi;
var wall2;
var gs = 0;
var noj = 1;
//0  = see, 1 = solve

function preload() {
bgmi = loadImage('bg.png');
p1 = loadImage('R.png');

}

function setup() {
createCanvas(1500,600);
//bgimg = createSprite(300,300);
//bgimg.addImage('ew',bgmi);
player = createSprite(200,200,60,60);
player.addImage('RRRRRR',p1);
edges = createEdgeSprites();
test = createSprite(200,400,600,100);
wall2 = createSprite(1150,400,700,100);

}

function draw() {

    background('grey');

    if(lifetime<=0&&gs===0){
        test.visible = false;
        wall2.visible =false;
        gs = 1;
    }


    if (gs === 1) {

    if(keyWentDown('space')&&noj === 1){
        player.velocityY =  player.velocityY-15;
        noj = 0;
    }
    if(keyDown('a')){
        player.x = player.x-10;
    }
  
    if(keyDown('d')){
        player.x = player.x+10;
    }

    //console.log(player.x);
}
    player.velocityY = player.velocityY + 0.8

    test.shapeColor='black';
    wall2.shapeColor='black';
   
    player.collide(test);
    player.collide(wall2);

if(player.collide(edges)){
    player.x = 200;
    player.y = 200;
    noj = 1;
}
    
    lifetime--;
    drawSprites();
win();
}   

function win(){
    if(player.x>=1000){
      textSize(25);
      fill('black');
      text('YOU WIN',200,200);
         test.visible = true;
         wall2.visible= true;
        console.log('YOU WIN');
    }   
}




