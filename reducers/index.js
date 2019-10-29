import { combineReducers } from 'redux';
import { selectFeed } from './FeedSelectionReducers';
import { userLogin, userSignup } from './UserReducers';
import { createPost } from './PostReducers';
export default combineReducers({
    selectFeed,
    userLogin,
    userSignup,
    createPost
});