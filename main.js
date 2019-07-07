'use strict';



function main () {

    /* Creamos la variable mainElement y que igualaremos a un querySelector para manipular el <main> del archivo html */
    var mainElement = document.querySelector('#site-main');

    /*Creamos nuestra primera función, a la que llamaremos buildDom y con la que "inyectaremos" código html desde Javascript */
    function buildDom(html) {
        /* Aquí utilizamos innerHtml sobre html para "inyectar" o recuperar código html en el contenedor #site-main.
        Ponemos como parámetro de la función el código html; a continuación, hacemos método innerHTML sobre la variable
        recientemente definida mainElement y la igualamos al código html que introduciremos cuando usemos la función
        buildDom */
        mainElement.innerHTML = html; 
        return mainElement; // importante retornar la variable; 

    }

    function createSplashScreen () { // Creamos esta función para crear la primera pantalla, la de presentación o splashScreen

        var splashScreen = buildDom(` 
            <section class="splash">
            <img class="logo-main" src="./images/labyrinth_logo.png" > 
            <img class="game-image" src="./images/game_image.gif" >
            <button class=" button start-button"> START BUTTON</button>
            <button class=" button instruct-button"> HOW-TO</button>
            </section>

        `); //Dentro de buildDom creamos código html y metemos clases en los botones para poder seleccionarlos y manipularlos.
        
        /*Como puede verse, inyectamos el código html con la función buildDom. Para ello la metemos dentro de la variable
        splashScreen, que a su vez nos permitirá seleccionar el código dentro de buildDom a través del método querySelector */
        var startButton = splashScreen.querySelector('.start-button'); /* Aquí creamos una variable del botón start para
        poder luego maniparlo; en este caso, le añadimos un método addEventListener con dos parámetros: la acción que debe
        desencadenar una accióny la función que ha de ejecutar esa acción en sí */
        startButton.addEventListener('click', createGameScreen);

        var instructionsButton = splashScreen.querySelector('.instruct-button'); //Igual para el botón de instructions
        instructionsButton.addEventListener('click', createInstructionsScreen);


};

    function createInstructionsScreen() {

        var instructionsScreen = buildDom(`
        <section class="instructions">
            <h3> Basic Instructions to play the game </h3>

            <p> Help Sarah find her baby brother Toby through the labyrinth, avoiding either Jareth the Goblin King or the borders of the labyrinth (both will decrease your life!). </p>
            <p> The controls for the game are:  </p>
            <p> ⬆ UP ⬇ DOWN ⬅ LEFT ➡ RIGHT </>
            
            <button class=" button return-button"> Return to main </button>
            
        
        </section>
        `);

        var returnToSplashScreenButton = instructionsScreen.querySelector('.return-button');
        returnToSplashScreenButton.addEventListener('click',createSplashScreen);


        }




    function createGameScreen() {

        var gameScreen = buildDom(`
        <section>
        <canvas class="glow animation-glow ingame" width= "500px" height="500px" </canvas>
        </section>
        `)
        /* En la pantalla de juego metemos un canvas (a través de html) y posteriormente creamos las variables para
        poder manipularlo convenientemente */
        var canvasElement = document.querySelector('canvas'); //Variable para manipular el canvas.
        var gameInstance = new Game (canvasElement); /* Variable para crear una instancia de juego, creando una instancia de Game
        a la que se le pasará el parámetro canvasElement (que nos permite manipular el canvas, y por tanto
        inyectar contenido en él) */

        gameInstance.gameOverCallback(createGameOverScreen); /*Aquí ejecutamos la función gameOverCallBack, que se ejecutará
        en función de una condición que definiremos en el archivo Game y cuyo parámetro es la función createGameOverScreen, 
        encargada de crear la pantalla de Game Over */
        gameInstance.startGame(); /* Aquí ejecutamos la función startGame, que creará instancias de las clases Player y Maze
        (ambas con parámetro this.canvas) e igualmente ejecutará las funciones para generar obstáculos (generateWall) y realizar
        el setup de dichos obstáculos */

        /* Aquí creamos el addEventListener para poder ejecutar movimientos en función de las teclas que pulsemos. Para ello
        invocaremos las funciones setDirectionX y setDirectionY con el parámetro para modificar la dirección (1 ó -1) */
        document.addEventListener('keydown', function(event){
            if(event.key === 'ArrowDown'){
                gameInstance.player.setDirectionY(1);
            }else if(event.key === 'ArrowUp'){
                gameInstance.player.setDirectionY(-1); // hacia arriba en el eje Y se resta, de ahí que sea -1
            } else if(event.key === 'ArrowLeft'){
                gameInstance.player.setDirectionX(-1);
            } else if (event.key === 'ArrowRight'){
                gameInstance.player.setDirectionX(+1); // hacia la derecha en el eje X se suma, de ahí que sea +1
            }
        });



    }

    function createGameOverScreen () { //función para crear la pantalla de Game Over sin mayor diferencia que las anteriores.
        var createGameOverScreen = buildDom(`
        <section class="gameover">
            <h1> GAME  OVER </h1>
            <h4> Try again! </h4>
            <button class=" button newgame-button"> Play new game! </button>


        </section>



        `) // Acción a ejecutar en función de la pulsación de play new game button
        var playNewGameButton = createGameOverScreen.querySelector('.newgame-button');
        playNewGameButton.addEventListener('click', createGameScreen);
    }


        createSplashScreen();
        // setTimeout(createGameOverScreen, 3000);
    }


window.addEventListener('load', main) // método para realizar la carga del código contenido en la función main().
