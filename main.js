'use strict';



function main () {
    var mainElement = document.querySelector('#site-main');


    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;

    }

    function createSplashScreen () {

        var splashScreen = buildDom(`
            <section class="splash">
            <img class="logo-main" src="./images/labyrinth_logo.png" >
            <img class="game-image" src="./images/game_image.gif" >
            <button class=" button start-button"> START BUTTON</button>
            <button class=" button instruct-button"> HOW-TO</button>
            </section>

        `);

        var startButton = splashScreen.querySelector('.start-button');
        startButton.addEventListener('click', createGameScreen);

        var instructionsButton = splashScreen.querySelector('.instruct-button');
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
            <img src="./images/david.png">
        
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

        var canvasElement = document.querySelector('canvas');
        var gameInstance = new Game (canvasElement);
        gameInstance.gameOverCallback(createGameOverScreen);
        gameInstance.startGame();
        document.addEventListener('keydown', function(event){
            if(event.key === 'ArrowDown'){
                gameInstance.player.setDirectionY(1);
            }else if(event.key === 'ArrowUp'){
                gameInstance.player.setDirectionY(-1);
            } else if(event.key === 'ArrowLeft'){
                gameInstance.player.setDirectionX(-1);
            } else if (event.key === 'ArrowRight'){
                gameInstance.player.setDirectionX(+1);
            }
        });



    }

    function createGameOverScreen () {
        var createGameOverScreen = buildDom(`
        <section class="gameover">
            <h1> GAME  OVER </h1>
            <h4> Try again! </h4>
            <button class=" button newgame-button"> Play new game! </button>


        </section>



        `)
        var playNewGameButton = createGameOverScreen.querySelector('.newgame-button');
        playNewGameButton.addEventListener('click', createGameScreen);
    }


        createSplashScreen();
        // setTimeout(createGameOverScreen, 3000);
    }


window.addEventListener('load', main)
