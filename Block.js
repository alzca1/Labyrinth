'use strict';


function Block (canvas, x, y) {
    this.canvas = canvas; 
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.height = 10; 
    this.color = 'red';
    this.width = 10;
   

}


Block.prototype.draw = function () {
    this.ctx.fillStyle = this.color; 
    this.ctx.fillRect(this.x, this.y, this.width,this.width)
}

Block.prototype.checkCollision = function(playerX, playerY, playerWidth, playerHeight){
   
    
        var collidesRight = playerX + playerWidth >= this.x;
        var collidesLeft = playerX <= this.x + this.width;
        var collidesBottom = playerY + playerHeight >= this.y; 
        var collidesTop = playerY <= this.y + this.width;
    
    if(collidesRight && collidesLeft && collidesBottom && collidesTop){
        return true;
    }   
  
}




