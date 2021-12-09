/** @type {import("../typings/phaser")} */

// bring in all the scenes

import "phaser";
import config from "./config/config";

class Game extends Phaser.Game {
  constructor() {
    // Add the config file to the game
    super(config);

    // add all the scenes

    // Start game with mainscene here
  }
}

// Create new instance of fame
window.onload = function () {
  window.game = new Game();
};
