'use strict';


function Maze (canvas){
    this.canvas = canvas; 
    this.context = canvas.getContext('2d');
    this.widthTile = 10;
    this.heightTile = 10;
    this.blocks = [];
    this.exit = [];
    this.maze = {
        cols: 20,
        lines: 20,
        tsize: 10,
       
                    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 
        grid:          [['E', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ,'X',], //1
                        ['X', 'X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //2
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //3
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //4
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //5
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //6
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //7
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //8
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //9
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //10
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //11
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //12
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //13
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //14
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //15
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //16
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //17
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,'X',], //18
                        ['X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ,'X',], //19
                        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ,'X',]] //20

    };
    
    this.emptyTile = 0; 
    this.wallTile = 1; 
    this.exitTile = 4; 

}

Maze.prototype.generateWall = function  (difficulty){
    for(let i = 1; i < this.maze.grid.length -1; i++){
        this.maze.grid[i].forEach((tile, index) => { // ojo al recurso de poner un segundo parametro index en forEach (para no tener que meter un segundo loop)
            var random = Math.random(); // hacemos un random para crear la probabilidad de aparición de enemigos
            if(random > difficulty && tile === 0) { // condicional de si random es mayor a la dificultad y la celda está vacía
                this.maze.grid[i][index] = this.wallTile; // la convierta en una celda con enemigo, igualandola a this.wallTile
            }
        })
        console.log(this.maze.grid) // console de control para comprobar que el grid sale bien. 
    }
};


Maze.prototype.setUp = function() {
        for(let i = 1; i < this.maze.grid.length -1; i++){
        this.maze.grid[i].forEach((tile, index) => {
            if(tile === 1) {
                var newBlock = new Block(this.canvas,index*25, i*25)
                this.blocks.push(newBlock);
                // this.context.fillRect(index*30, i*30, this.widthTile, this.heightTile);
            } else if (tile === 4){
                var newExit = new Exit(this.canvas,index*25, i*25);
                this.exit = newExit;
            }
        })
    }
 
}












          