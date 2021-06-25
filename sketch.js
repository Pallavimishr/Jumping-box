var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){}



function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,180,30);
    block2.shapeColor = "pink";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(490,580,180,30);
    block3.shapeColor = "purple";

    block4 = createSprite(685,580,180,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(51,223,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 7;
    ball.velocityX = 7;
}

function draw() {
    background(rgb(255, 229, 180));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }
    if(block2.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "pink";
        
    }
    if(block3.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "purple";
        
    }
    if(block4.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        
    }
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "pink";
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "purple";
    }
    if(block4.isTouching(ball)){
        ball.shapeColor = "red";
    }


    drawSprites();
}
