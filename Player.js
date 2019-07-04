'use strict';


function Player (canvas) {
    this.canvas = canvas; 
    this.ctx = this.canvas.getContext('2d');
    this.x = 15;
    this.y = 15;
    this.height = 10; 
    this.lives = 100;
    this.velocity = 3;
    this.color = 'blue';
    this.width = 10;
    this.directionX = 0;
    this.directionY = 0; 

}

Player.prototype.move = function () {
    if(this.x === 0) {
        this.directionX ++;
        this.lives -= 10; 
    };
    if(this.x + this.width === this.canvas.width){
        this.directionX --;
        this.lives -= 10; 
    }

    if(this.y === 0) {
        this.directionY ++;
        this.lives -= 10;  
    };
    if(this.y + this.height === this.canvas.height){
        this.directionY --;
        this.lives -= 10;
    }
    this.y = this.y + this.directionY 
    this.x = this.x + this.directionX  
}

Player.prototype.draw = function () {
    this.ctx.fillStyle = this.color; 
    this.ctx.fillRect(this.x, this.y, this.width,this.height)
}

Player.prototype.setDirectionX = function (newDirection) {
    this.directionX = newDirection;
}
Player.prototype.setDirectionY = function (newDirection) {
    this.directionY = newDirection;
}




