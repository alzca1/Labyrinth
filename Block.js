'use strict';


function Block (canvas, x, y) {
    this.canvas = canvas; 
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.height = 20; 
    this.color = 'red';
    this.width = 20;
    this.img = new Image();
    this.img.src = "./images/david.png";
   

}


Block.prototype.draw = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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




