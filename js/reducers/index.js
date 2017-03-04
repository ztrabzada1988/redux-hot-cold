import Actions from '../actions/index';

const initialState = {
  generateRandomNumber: (Math.floor(Math.random() * 100) + 1),
  numberOfGuesses: 0,
  guessedNumbers: [],
  feedback: "State your guess",
  gameOver: false,
  previousGuess: null,
  difference: 0
}

export default function repositoryReducer(state = initialState, action) {

    let currentState = state;

    if (action.type === Actions.NEW_GAME) {
        currentState = state;
    } else if (action.type === Actions.GAME_OVER) {
      initialState.gameOver = true;
    } else if (action.type === Actions.GUESS_NUMBER) {
      numberOfGuesses++
      initialState.previousGuess = Action.guess;
      initialState.difference = Math.abs(action.guess - Action.guess)
      if (action.guess )
      guessedNumbers.push(guess);
      return
    }
    return state;
};
