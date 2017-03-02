import Actions from '../actions/index';

const initialState = {
  generateRandomNumber: (Math.floor(Math.random() * 100) + 1),
  numberOfGuesses: 0,
  guessedNumbers: [],
  gameOver: false
}

export default function repositoryReducer(state, action) {
    state = state || initialState;

    if (action.type === Actions.NEW_GAME) {
      return initialState;
    } else if (action.type === Actions.GAME_OVER) {
      initialState.gameOver = true;
    } else if (action.type === Actions.GUESS_NUMBER) {
      numberOfGuesses++
      return guessedNumbers.push(guess);
    }

    return state;
};
