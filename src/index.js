export default class Game extends HoneyBoo.Game {
  constructor(initData) {
      super(initData);
  }

}

document.addEventListener("DOMContentLoaded", function() {
   const game = new Game(GAME_INIT_DATA);
   game.init({gameConfig: GAME_CONFIG.config});
});