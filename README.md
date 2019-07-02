
#######  PROJECT'S NAME  #######

                                   /////  LABYRINTH \\\\\

#######  GAME DESCRIPTION  #######


A maze-based game where the player has to find his/her way out before time runs out.


#######  MVP (DOM  CAVAS)  #######

The game will consist of 4 different screens: 

@@ SPLASH SCREEN @@

Initial game screen with the game's title on top and two buttons: 'Start New Game' and 'Check Instructions'. It will have a black background. 


@@ CHECK INSTRUCTIONS SCREEN @@

Instructions screen where basic controls are described, as well as winning and losing conditions (get to the endpoint before time runs out). Background will be black. No styling expected for the buttons (for now).


@@ IN-GAME SCREEN @@

A labyrinth map will be shown onscreen, filled with walls and two points: an starting point (where our player will be positioned) and an ending point (which the player will have to reach in order to get to the next level or finish the game succesfully). The walls will prevent the player from physically cross to the other side. 

A timer will be shown on top, so that it prevent our player from wandering around for no purpose. 

Depending on the difficulty level, the canvas may have different sizez: 15x15 for the easy level, 30x30 for the average level and 50x50 for the hard level. 

The background will be black, our player will be blue, the walls will be white, and the endpoint (circle) will be green. 


@@ GAME OVER SCREEN @@

The game over screen will contain a 'GAME OVER' title, along with two buttons: 'PLAY AGAIN' and 'RETURN TO MAIN SCREEN', which will allow us to play a new instance of the game or return to the splash screen. 

The file structure of the game will be as follow: 

index.html
styles.css
Main.js
Player.js
Maze.js
Wall.js

The javascript files will contain the following deliverables-->

|-----------------|
|&&&& MAIN.JS &&&&|
|-----------------|

BUILD DOM ---> CREATE SPLASH SCREEN ---> CREATE GAME SCREEN ---> CREATE GAME OVER SCREEN ---> CREATE INSTRUCTIONS SCREEN ---> CREATE NEW GAME ---> CHECK INSTRUCTIONS


|-----------------|
|&&&& GAME.JS &&&&|
|-----------------|

START GAME ---> UPDATE ---> CLEAR ---> DRAW  ---> GAME OVER 


|-------------------|
|&&&& PLAYER.JS &&&&|
|-------------------|

PLAYER ---> MOVE ---> DRAW ---> DIRECTION ---> CHECKWALL ---> SET START POINT


|-------------------|
| &&&& MAZE.JS &&&& | 
|-------------------|

CREATE MAZE ---> CHECKCOLLISION WITH PLAYER

-------------------
&&&& WALL.JS &&&&
-------------------
CREATE MAZE WALLS 





#######  LINKS  #######   

@ Trello @
https://trello.com/b/ODtIHjBy


@ Git @
https://github.com/alzca1/Labyrinth


Slides
URls for the project presentation (slides) Link Slides.com