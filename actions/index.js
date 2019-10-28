import { Platform } from 'react-native';

var Parse;
if (Platform.OS === 'web') {
  Parse = require('parse/node');
} else {
  Parse = require('parse/react-native');
}

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
    USER_SIGNUP: 'USER_SIGNUP',

    USER_LOGIN: 'USER_LOGIN',
    USER_LOGIN_PENDING: 'USER_LOGIN_PENDING',
    USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS'
};

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
        userSignupError: (error) => ({
            type: ASYNCHRONOUS.USER_SIGNUP_ERROR,
            payload: error
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
                    console.log("user", savedUser.attributes);
                    await dispatch(action.asynchronousActions.userLoginSuccess(savedUser));
                    await dispatch(action.asynchronousActions.userSignupSuccess(user));
                } catch (err) {
                    dispatch(actions.asynchronousActions.userSignupError(err));
                }
            }
        },
        userLoginPending: (user) => ({
            type: ASYNCHRONOUS.USER_LOGIN_PENDING,
            payload: user
        }),
        userLoginError: (error) => ({
            type: ASYNCHRONOUS.USER_LOGIN_ERROR,
            payload: error
        }),
        userLoginSuccess: (user) => ({
            type: ASYNCHRONOUS.USER_LOGIN_SUCCESS,
            payload: user
        }),
        userLogin: ({username, password}) => {
            return async dispatch => {
                dispatch(actions.asynchronousActions.userLoginPending({username, password}));
                try {
                    let user = await Parse.User.logIn(username, password);
                    console.log(user);
                    await dispatch(actions.asynchronousActions.userLoginSuccess(user));
                } catch (err) {
                    dispatch(actions.asynchronousActions.userLoginError(err));
                }
            }
        }
    }
};
export default actions;