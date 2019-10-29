import Parse from 'parse/react-native';
// import Parse from 'parse/node';

import { dateDiff } from '../utilities';

class Post extends Parse.Object {
    constructor(attributes) {
        super(attributes);
    }
    getDiff() {
        let createdAt = this.createdAt.getTime();
        let elapsed = dateDiff(createdAt);
        return `
        ${elapsed.year > 0 ? elapsed.year + ' years':''}
        ${elapsed.month > 0 ? elapsed.month + ' months':''}
        ${elapsed.day > 0 ? elapsed.day + ' days': ''}
        ${elapsed.hour > 0 ? elapsed.hour + ' hours':''}
        ${elapsed.minute > 0 ? elapsed.minute + ' minutes':''}
        `.replace(/[\n\r]+ */g, ' ');
    }
}
Parse.Object.registerSubclass('Post', Post);