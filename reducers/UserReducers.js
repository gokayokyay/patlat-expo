import actions from '../actions';

export const userSignup = (state = {}, action) => {
    switch (action.type) {
        case actions.ASYNCHRONOUS.USER_SIGNUP_PENDING:
            return {...state, signUpPending: true};
        case actions.ASYNCHRONOUS.USER_SIGNUP_ERROR:
            return {...state, signUpPending: false, signupError: action.payload};
        case actions.ASYNCHRONOUS.USER_SIGNUP_SUCCESS:
            return {...state, signUpPending: false, signupError: null};
        default:
            return state;
    }
}
export const userLogin = (state = {loginError: true}, action) => {
    switch (action.type) {
        case actions.ASYNCHRONOUS.USER_LOGIN_PENDING:
            return {...state, loginPending: true};
        case actions.ASYNCHRONOUS.USER_LOGIN_ERROR:
            return {...state, loginPending: false, loginError: action.payload};
        case actions.ASYNCHRONOUS.USER_LOGIN_SUCCESS:
            return {...state, loginPending: false, loginError: null, user: action.payload};
        default:
            return state;
    }
}