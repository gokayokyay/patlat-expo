import Parse from 'parse/react-native';

const SYNCHRONOUS = {
    SELECT_FEED: 'SELECT_FEED',
    
    SELECTED_POST: 'SELECTED_POST',

    CREATE_COMMENT: 'CREATE_COMMENT',
    UPVOTE_COMMENT: 'UPVOTE_COMMENT',
    DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',

    
};

const ASYNCHRONOUS = {
    CREATE_POST: 'CREATE_POST',
    CREATE_POST_PENDING: 'CREATE_POST_PENDING',
    CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
    CREATE_POST_ERROR: 'CREATE_POST_ERROR',
    UPVOTE_POST: 'UPVOTE_POST',
    DOWNVOTE_POST: 'DOWNVOTE_POST',

    USER_SIGNUP_PENDING: 'USER_SIGNUP_PENDING',
    USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    USER_SIGNUP_ERROR: 'USER_SIGNUP_ERROR',
    USER_SIGNUP: 'USER_SIGNUP'
}

const actions = {
    SYNCHRONOUS,
    ASYNCHRONOUS,
    synchronousActions: {
        selectFeed: (feed) => ({
            type: SYNCHRONOUS.SELECT_FEED,
            payload: feed
        }),
    },
    asynchronousActions: {
        createPostPending: (post) => ({
            type: ASYNCHRONOUS.CREATE_POST_PENDING,
            payload: post
        }),
        createPostError: (post) => ({
            type: ASYNCHRONOUS.CREATE_POST_ERROR,
            payload: post
        }),
        createPostSuccess: (post) => ({
            type: ASYNCHRONOUS.CREATE_POST_SUCCESS,
            payload: post
        }),
        // createPost: (post) => {
        //     return dispatch => {
        //         dispatch(actions.asynchronousActions.createPostPending(post));

        //     }
        // },
        userSignupPending: (user) => ({
            type: ASYNCHRONOUS.USER_SIGNUP_PENDING,
            payload: user
        }),
        userSignupError: (user) => ({
            type: ASYNCHRONOUS.USER_SIGNUP_ERROR,
            payload: user
        }),
        userSignupSuccess: (user) => ({
            type: ASYNCHRONOUS.USER_SIGNUP_SUCCESS,
            payload: user
        }),
        userSignup: (user) => {
            return async dispatch => {
                dispatch(actions.asynchronousActions.userSignupPending(user));
                try {
                    let savedUser = await user.signUp();
                    dispatch(actions.asynchronousActions.userSignupSuccess(savedUser));
                } catch (err) {
                    dispatch(actions.asynchronousActions.userSignupError(user));
                }
            }
        }
    }
};
export default actions;