import Actions from '../actions/index';

const initialRepositoryState = [];

export default function repositoryReducer(state, action) {
    state = state || initialRepositoryState;
    return state;
};
