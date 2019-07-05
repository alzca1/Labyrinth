'use strict';

function Game (canvas){
this.player = null; 
this.walls = null;
this.maze = null;
this.exit = null;
this.level = 0; 
this.difficulty = .88;
this.score = 0;
this.lives = null;  
this.isGameOver = false; 
this.canvas = canvas; 
this.ctx = this.canvas.getContext('2d'); /*preguntar/averiguar qué es esto */
this.onGameOver = null; 
this.requestAnimationFrameID = null;
}

Game.prototype.startGame = function () {
    this.player = new Player (this.canvas);
    this.maze = new Maze(this.canvas);
    this.maze.generateWall(this.difficulty);
    this.maze.setUp();
       
    var loop = () => {
        this.update();
        this.clear(); 
        this.draw();
        this.checkWalls();
        var isNextLevel = this.checkExit(); 
        this.checkGameOver();
        // this.checkFinishPoint(); 
        if (isNextLevel) {
            this.updateScore();            
            this.startGame();
        } else if(!this.isGameOver && !isNextLevel){            
            this.requestAnimationFrameID = requestAnimationFrame(loop); /*preguntar/averiguar qué es esto */
        } else {
             this.onGameOver();
        }
            
    }
    loop(); 
}

Game.prototype.update = function() {
    this.player.move(); 
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height); /*preguntar/averiguar qué es esto */
};

Game.prototype.draw = function() {
    this.player.draw(); 
    this.maze.blocks.forEach((block) => block.draw());
    this.maze.exit.draw();
    this.drawScore();
};

Game.prototype.gameOverCallback = function (callback) { // no entiendo esta función
    this.onGameOver = callback; 
}

Game.prototype.checkWalls = function () {
     this.maze.blocks.forEach((block) =>{
        if(block.checkCollision(this.player.x, this.player.y, this.player.width, this.player.height)){
            this.player.lives -= 2;
            console.log(this.player.lives)
        } else {
            this.isGameOver = true;
        };
    })
}

Game.prototype.checkExit = function () {
    var isNextLevel = false;
    if(this.maze.exit.checkCollision(this.player.x,this.player.y,this.player.width,this.player.height)){
        
        this.difficulty -= 0.03;
        this.level += 1;
        isNextLevel = true;
        cancelAnimationFrame(this.requestAnimationFrameID);
    }
    return isNextLevel;
}


Game.prototype.checkGameOver = function(){
    if(this.player.lives > 0){
        this.isGameOver = false;
        console.log('false!')
    } else {
        this.isGameOver = true;
        console.log('true!')
    }
}

Game.prototype.drawScore = function() {
    this.ctx.fillStyle = 'yellow'
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Score: ${this.score}`, 240, 20);
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Level: ${this.level}`, this.canvas.width - 460, 20);
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Life: ${this.player.lives}`, this.canvas.width - 60, 20);
 }


 Game.prototype.updateScore = function() {
     this.score = this.player.lives * 5 ;
 }