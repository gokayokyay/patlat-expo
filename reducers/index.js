import { combineReducers } from 'redux';
import { selectFeed } from './FeedSelectionReducers';
import { userLogin, userSignup } from './UserReducers';
export default combineReducers({
    selectFeed,
    userLogin,
    userSignup
});