
//action to guess a number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export default function guessNumber(guess) {
  type: GUESS_NUMBER,
  guess: guess
};

//action to start a new game
export const NEW_GAME = 'NEW_GAME';
export default function newGame() {
  type: NEW_GAME
};

//action when game is over
export const GAME_OVER = 'GAME_OVER';
export default function gameOver() {
  type: GAME_OVER
};
