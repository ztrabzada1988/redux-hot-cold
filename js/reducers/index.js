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

export default function HotColdReducer(state = initialState, action) {

    switch(action.type) {
        case Actions.NEW_GAME:
            return initialState;

        case Actions.GAME_OVER:
            initialState.gameOver = true;
            break;

        case Actions.GUESS_NUMBER:
            let newState = state;

            newState.numberOfGuesses++;
            newState.guessedNumbers.push(action.guess);

            if (action.guess != state.correctAnswer) {
                newState.difference = Math.abs(action.guess - state.previousGuess);
                newState.previousGuess = action.guess;

                //logic:  if difference is greater then a #, give feedback hot or cold
                if (newState.difference > 50) {
                    newState.feedback = "Cold";
                    Object.assign({}, state, newState);
                }

                else if (newState.difference > 40) {
                    newState.feedback = "Cold";
                    Object.assign({}, state, newState);
                }
                else if (newState.difference > 30) {
                    newState.feedback = "Cold";
                    Object.assign({}, state, newState);
                }

                else if (newState.difference > 20) {
                    newState.feedback = "Hot";
                    Object.assign({}, state, newState);
                }

                else if (newState.difference > 10) {
                    newState.feedback = "Hotter";
                    Object.assign({}, state, newState);
                }

                else if (newState.difference > 5) {
                    newState.feedback = "Very Hot";
                    Object.assign({}, state, newState);
                }

                else if (newState.difference > 2) {
                    newState.feedback = "you are almost there";
                    Object.assign({}, state, newState);

            } else {
                newState.feedback = "YOU WON!!!"
                newState.gameOver = true;
                Object.assign({}, state, newState);
            }
            return Object.assign({}, state, newState);

        default:
        return state;
    };
};
