var myX = 500, myY = 300;
var vragX=[-252, -278],vragY=[100, 300];
var curDragon = 0,curEnemy = 0, back = new Image();
var numDragons = 13, numEnemies = 19, fireball=new Image(), fireballX=[],fireballY=[];
var dragons = [], enemies = [], broyPlamaciNaEkrana=0, points=0;
var nadolu=false, nagore=false, alive=true, attack=new Audio(), wings = new Audio(), scream=[], death= new Audio();
death.src = "Death.mp3";
function startScream() {
    newScream = new Audio();
    newScream.src = "Scream.mp3";
    newScream.play();
}

attack.src = "Attack.mp3";
wings.src = "Wings.mp3";
for (var i = 0; i < numDragons; i++) {
    dragons[i] = new Image();
    dragons[i].src = i + ".gif";
}
for(var e = 0; e < numEnemies; e++) {
    enemies[e] = new Image();
    enemies[e].src = e + "enemy.gif";
}
fireball.src = "Fireball.png";
back.src = "back.jpg";
function update() {
    if(alive){
        wings.play();
        if (vragX.length == 0) {
            vragX.push(-252 - Math.random() * 200);
            vragY.push(-100 + Math.random() * (800 - 252));
        }
        if(nadolu==true){
            myY=myY+3;
        }
        if(nagore==true){
            myY=myY-3;
        }
        for (i = 0; i < vragX.length; i++) {
            vragX[i] += 2;
            if (vragX[i] > 800) {
                vragX[i] = -252;
                vragX.push(-252 - Math.random() * 200);
                vragY.push(-100 + Math.random() * (800 - 252));
                ++points;
            }
            if(areColliding(myX,myY,111,160,vragX[i],vragY[i],207,140)){
                alive=false;
                wings.pause();
                death.play();
            }
            for(e=0;e<1000;++e){
                if(areColliding(fireballX[broyPlamaciNaEkrana-e],fireballY[broyPlamaciNaEkrana-             e],90,59,vragX[i],vragY[i],252,252)){
                    startScream();
                    vragX.splice(i, 1);
                    vragY.splice(i, 1);
                    ++points;
                }
            }
        }
        for(i=0;i<1000;++i){
                fireballX[broyPlamaciNaEkrana-i]=fireballX[broyPlamaciNaEkrana-i]-10;
        }
    }
	if (!localStorage.highscore){
		localStorage.highscore = 0;
	}
}
function draw() {
    context.drawImage(back,0,0,800,600);
    context.fillStyle = "#ff0000";
    context.font = "50px Tribal Dragon";
    context.fillText("Score:"+points, 25, 55)
   if(localStorage.highscore>0){
        context.fillText("Highscore:"+localStorage.highscore, 25, 110);
   }
    if(alive){
        context.drawImage(dragons[Math.floor(curDragon)], myX, myY, 172, 179);
        curDragon += 1 / 3;
        if (curDragon >= dragons.length) {
            curDragon = 0;
        }
        for (i = 0; i < vragX.length; i++) {
            context.drawImage(enemies[Math.floor(curEnemy)], vragX[i], vragY[i], 252, 252);
        }
        for(i=0;i<1000;++i){
            context.drawImage(fireball, fireballX[broyPlamaciNaEkrana-i], fireballY[broyPlamaciNaEkrana-i], 90, 59);
        }
        curEnemy += 1 / 3;
        if (curEnemy >= enemies.length) {
            curEnemy = 0;
        }
    }else{
        context.fillStyle = "green";
        context.font = "50px Tribal Dragon";
        context.fillText("GAME OVER", 175, 300);
        context.fillText("press space to try again", 80, 355);
    }
}    
function keydown(key) {
    if(alive){
        if(key==38){
            nagore=true;
        }
        if(key==40){
            nadolu=true;
        }
    }
}
function keyup(key) {
    if(alive){
        if(key==32){
            fireballX[broyPlamaciNaEkrana+1]=myX;
            fireballY[broyPlamaciNaEkrana+1]=myY;
            broyPlamaciNaEkrana+=1;
            attack.play();
        }    
        if(key==38){
            nagore=false;
        }
        if(key==40){
            nadolu=false;
        }
    }
    if(alive==false && key==32){
        alive=true;
        if(localStorage.highscore<points){
            localStorage.highscore=points
        }
        for (i = 0; i < vragX.length; i++) {
            vragX[i] = -252;
        }
        myX = 500; 
        myY = 300;
        points=0;
    }
}