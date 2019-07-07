'use strict';


function Player (canvas) {
    this.canvas = canvas; 
    this.ctx = this.canvas.getContext('2d');
    this.x = 15; // posición inicial x del jugador
    this.y = 15; // posición inicial x del jugador
    this.width = 20; // anchura de player
    this.height = 20; // altura de player
    this.lives = 100;
    this.velocity = 3;
    this.color = 'blue';
    
    this.directionX = 0; //determina la dirección respecto al eje x
    this.directionY = 0; //determina la dirección respecto al eje y
    this.img = new Image(); // 
    this.img.src = "./images/female.png";

}

Player.prototype.move = function () {
    if(this.x === 0) { // lógica para restar vida al tocar los muros y provocar efecto rebote; 
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
    this.y = this.y + this.directionY // actualiza la posición de y y con ello genera movimiento vertical
    this.x = this.x + this.directionX  // actualiza la posición de x y con ello genera movimiento horizontal
}

Player.prototype.draw = function () {
    // this.ctx.fillStyle = this.color; 
    // this.ctx.fillRect(this.x, this.y, this.width,this.height)
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

Player.prototype.setDirectionX = function (newDirection) {
    this.directionX = newDirection;
}
Player.prototype.setDirectionY = function (newDirection) {
    this.directionY = newDirection;
}




