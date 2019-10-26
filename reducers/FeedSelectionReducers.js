import actions from '../actions';

export const selectedFeed = (state = "", action) => {
    switch (action.type) {
        case actions.SYNCHRONOUS.SELECT_FEED:
            return action.payload;
        default:
            return state;
    }
}