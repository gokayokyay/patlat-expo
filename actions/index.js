const SYNCHRONOUS = {
    SELECT_FEED: 'SELECT_FEED',
    
    CREATE_POST: 'CREATE_POST',
    UPVOTE_POST: 'UPVOTE_POST',
    DOWNVOTE_POST: 'DOWNVOTE_POST',
    PRESSED_POST: 'PRESSED_POST',

    CREATE_COMMENT: 'CREATE_COMMENT',
    UPVOTE_COMMENT: 'UPVOTE_COMMENT',
    DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',


};

const actions = {
    SYNCHRONOUS,
    synchronousActions: {
        selectFeed: (feed) => ({
            type: SYNCHRONOUS.SELECT_FEED,
            payload: feed
        }),
    }
};
export default actions;