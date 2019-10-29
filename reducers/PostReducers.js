import actions from '../actions';

export const createPost = (state = {}, action) => {
    switch (action.type) {
        case actions.ASYNCHRONOUS.CREATE_POST_PENDING:
            return {...state, createPostPending: true};
        case actions.ASYNCHRONOUS.CREATE_POST_ERROR:
            return {...state, createPostError: true, createPostPending: false};
        case actions.ASYNCHRONOUS.CREATE_POST_SUCCESS:
            return {...state, createPostError: false, createPostPending: false};
        default:
            return state;
    }
};