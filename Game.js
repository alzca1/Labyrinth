'use strict';

function Game (canvas){ // Inicializamos la función constructora Game, cuyo parámetro será canvas. ¿¿¿¿Por qué????
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
       
    var loop = () => { /* quintasencia de la creación de juegos: el loop que se ejecutará una y otra vez con una serie de
        funciones que actualizarán el canvas 60 veces por segundo*/
        this.update(); //función que ejecuta a su vez la función move de this.player
        this.clear(); // función que limpia el canvas una y otra vez
        this.draw(); // función que dibuja el canvas una y otra vez
        this.checkWalls(); // función que comprueba una y otra vez que los bloques no han entrado en contacto con player.
        var isNextLevel = this.checkExit(); /*creamos variable igual a la función this.checkExit() para hacer luego un
        condicional y determinar si el juego debe cargar una nueva instancia de juego (this.startgame) y actualizar
        puntuación (this.updateScore() ) en caso de que hayamos llegado a la salida del nivel */
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
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height); /*limpia todo el canvas desde la posición 0,0 hasta el width
    y height de this.canvas */
};

Game.prototype.draw = function() {
    this.player.draw(); //dibuja al jugador
    this.maze.blocks.forEach((block) => block.draw()); // dibuja los bloques (previo forEach sobre maze.blocks)
    this.maze.exit.draw(); // dibuja la salida del this.maze
    this.drawScore(); 
};

Game.prototype.gameOverCallback = function (callback) { // no entiendo esta función
    this.onGameOver = callback; //buscar conexiones de esta referencia callback!
}

Game.prototype.checkWalls = function () {
     this.maze.blocks.forEach((block) =>{
        if(block.checkCollision(this.player.x, this.player.y, this.player.width, this.player.height)){
            this.player.lives -= 2;             
        } else {
            this.isGameOver = true;
        };
    })
}

Game.prototype.checkExit = function () {
    var isNextLevel = false; // creamos variable isNextLevel que luego retornaremos como resultado de la función (true || false)
    if(this.maze.exit.checkCollision(this.player.x,this.player.y,this.player.width,this.player.height)){
        
        this.difficulty -= 0.03;
        this.level += 1;
        isNextLevel = true;
        cancelAnimationFrame(this.requestAnimationFrameID); /* con esta orden cancelamos el animationFrame para 
        crear uno nuevo cuando comience la carga del nuevo nivel */
    }
    return isNextLevel;
}


Game.prototype.checkGameOver = function(){
    if(this.player.lives > 0){ // función muy simple que comprueba si la vida de this.player es igual o menor que 0
        this.isGameOver = false;
        
    } else {
        this.isGameOver = true;
        
    }
}

Game.prototype.drawScore = function() { // función para dibujar el score en pantalla
    this.ctx.fillStyle = 'yellow'
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Score: ${this.score}`, 240, 20);
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Level: ${this.level}`, this.canvas.width - 460, 20); // entender el parámetro de la posición!!!!!!
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Life: ${this.player.lives}`, this.canvas.width - 60, 20);
 }


 Game.prototype.updateScore = function() {
     this.score = this.player.lives * 5 ;
 }