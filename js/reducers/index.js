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

    switch(action.type) {
        case Actions.NEW_GAME:
            state = initialState;

        case Actions.GAME_OVER:
            initialState.gameOver == true;

        case Actions.GUESS_NUMBER:
            initialState.numberOfGuesses++;
            initialState.previousGuess = action.guess;
            initialState.guessedNumbers.push(action.guess);
            initialState.difference = Math.abs(action.guess - initialState.previousGuess);

            if (initialState.difference > 50) {
                initialState.feedback == "Cold";
                Object.assign({}, state, currentState);
            }

            if (initialState.difference > 40) {
                initialState.feedback == "Cold";
                Object.assign({}, state, currentState);
            }

            if (initialState.difference > 30) {
                initialState.feedback == "Cold";
                Object.assign({}, state, currentState);
            }

            if (initialState.difference > 20) {
                initialState.feedback == "Hot";
                Object.assign({}, state, currentState);
            }

            if (initialState.difference > 10) {
                initialState.feedback == "Hotter";
                Object.assign({}, state, currentState);
            }

            if (initialState.difference > 5) {
                initialState.feedback == "Very Hot";
                Object.assign({}, state, currentState);
            }
    }

    if (action.type === Actions.NEW_GAME) {
        currentState = state;
    } else if (action.type === Actions.GAME_OVER) {
      initialState.gameOver = true;
    } else if (action.type === Actions.GUESS_NUMBER) {
      numberOfGuesses++
      initialState.previousGuess = action.guess;
      initialState.difference = Math.abs(action.guess - initialState.previousGuess)
      if (action.guess )
      guessedNumbers.push(guess);
      return
    }
    return state;
};
