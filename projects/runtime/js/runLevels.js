var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x,y){
    var hitZoneSize = 25;
    var damageFromObstacle = 25;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone)
    var obstacleImage = draw.bitmap('img/sawblade.png');
    sawBladeHitZone.addChild(obstacleImage)
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    }
    createSawBlade(400,255)
    createSawBlade(700, 250)
    createSawBlade(900, 255)

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY -15;
    enemy.velocityX = -3;
    enemy.rotationalVelocity = -2;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-25)
    }
    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.fadeOut();
    }

    game.addGameItem(enemy);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
