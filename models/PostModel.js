import Parse from 'parse/react-native';
// import Parse from 'parse/node';

import { dateDiff } from '../utilities';

// class Post extends Parse.Object {
//     constructor() {
//         super('Post');
//     }
//     getDiff() {
//         let createdAt = this.createdAt.getTime();
//         let elapsed = dateDiff(createdAt);
//         return `
//         ${elapsed.year > 0 ? elapsed.year + ' years':''}
//         ${elapsed.month > 0 ? elapsed.month + ' months':''}
//         ${elapsed.day > 0 ? elapsed.day + ' days': ''}
//         ${elapsed.hour > 0 ? elapsed.hour + ' hours':''}
//         ${elapsed.minute > 0 ? elapsed.minute + ' minutes':''}
//         `.replace(/[\n\r]+ */g, ' ');
//     }
//     getUser() {
//         return this.get('user');
//     }
//     async static create(message) {
//         var newPost = new Post();

//         var currentUser = await Parse.User.currentAsync();

//         newPost.set('user', currentUser.username);
//         newPost.set('message', message);
//         newPost.set('replies', []);

//         return newPost;
//     }
// }

var Post = Parse.Object.extend("Post", {
    // Instance methods
    getDiff: () => {
        let createdAt = this.createdAt.getTime();
        let elapsed = dateDiff(createdAt);
        return `
        ${elapsed.year > 0 ? elapsed.year + ' years':''}
        ${elapsed.month > 0 ? elapsed.month + ' months':''}
        ${elapsed.day > 0 ? elapsed.day + ' days': ''}
        ${elapsed.hour > 0 ? elapsed.hour + ' hours':''}
        ${elapsed.minute > 0 ? elapsed.minute + ' minutes':''}
        `.replace(/[\n\r]+ */g, ' ');
    },
    getUser() {
        return this.get('user');
    }
  }, {
    // Class methods
    create: async (message) => {
        var newPost = new Post();

        var currentUser = await Parse.User.currentAsync();

        newPost.set('user', currentUser.username);
        newPost.set('message', message);
        newPost.set('replies', []);
        newPost.set('votecount', 0);

        return newPost;
    }
});

// Parse.Object.registerSubclass('Post', Post);

export default Post;