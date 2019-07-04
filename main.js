'use strict';



function main () {
    var mainElement = document.querySelector('#site-main');


    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;

    }

    function createSplashScreen () {

        var splashScreen = buildDom(`
            <section>
            <h1> Labyrinth</h1>
            <button class="start-button"> Start Game </button>
            <button class="instruct-button"> Check Instructions </button>
            </section>

        `);

        var startButton = splashScreen.querySelector('.start-button');
        startButton.addEventListener('click', createGameScreen);

        var instructionsButton = splashScreen.querySelector('.instruct-button');
        instructionsButton.addEventListener('click', createInstructionsScreen);


};

    function createInstructionsScreen() {

        var instructionsScreen = buildDom(`
        <section>
            <h3> Basic Instructions to play the game: </h3>

            <p> Your goal is to reach the exit tile, avoiding the red tiles (which will decrease your life level dramatically). As you progress through levels, the number of red tiles will increase, making more and more difficult to reach the green tile. Good luck! </p>
            <p> The controls for the game are: ⬆️ UP ⬇️ DOWN ⬅️ LEFT ➡️ RIGHT </p>
            <button class="return-button"> Return to main </button>
        </section>
        `);

        var returnToSplashScreenButton = instructionsScreen.querySelector('.return-button');
        returnToSplashScreenButton.addEventListener('click',createSplashScreen);


        }




    function createGameScreen() {

        var gameScreen = buildDom(`
        <section>
        <canvas class="glow animation-glow" width= "500px" height="500px" </canvas>
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
        <section>
            <h1> GAME  OVER </h1>
            <h4> Try again! </h4>
            <button class="newgame-button"> Play new game! </button>


        </section>



        `)
        var playNewGameButton = createGameOverScreen.querySelector('.newgame-button');
        playNewGameButton.addEventListener('click', createGameScreen);
    }


        createSplashScreen();
        // setTimeout(createGameOverScreen, 3000);
    }


window.addEventListener('load', main)
