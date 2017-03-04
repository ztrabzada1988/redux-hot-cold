import Actions from '../actions/index';

const initialState = {
  correctAnswer: (Math.floor(Math.random() * 100) + 1),
  numberOfGuesses: 0,
  guessedNumbers: [],
  feedback: "State your guess",
  gameOver: false,
  previousGuess: null,
  difference: 0
}

export default function repositoryReducer(state = initialState, action) {

    switch(action.type) {
        case Actions.NEW_GAME:
            state = initialState;

        case Actions.GAME_OVER:
            initialState.gameOver == true;

        case Actions.GUESS_NUMBER:
            let currentState = state;

            currentState.numberOfGuesses++;
            currentState.guessedNumbers.push(action.guess);

            if (action.guess != state.correctAnswer) {
                currentState.difference = Math.abs(action.guess - state.previousGuess);
                currentState.previousGuess = action.guess;

                if (currentState.difference > 50) {
                    currentState.feedback == "Cold";
                    Object.assign({}, state, currentState);
                }

                else if (currentState.difference > 40) {
                    currentState.feedback == "Cold";
                    Object.assign({}, state, currentState);
                }

                else if (currentState.difference > 30) {
                    currentState.feedback == "Cold";
                    Object.assign({}, state, currentState);
                }

                else if (currentState.difference > 20) {
                    currentState.feedback == "Hot";
                    Object.assign({}, state, currentState);
                }

                else if (currentState.difference > 10) {
                    currentState.feedback == "Hotter";
                    Object.assign({}, state, currentState);
                }

                else if (currentState.difference > 5) {
                    currentState.feedback == "Very Hot";
                    Object.assign({}, state, currentState);
                }
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
