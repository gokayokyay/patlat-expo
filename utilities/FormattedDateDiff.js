import dateDiff from './DateDiff';
export default function getDiff() {
    let createdAt = this.createdAt.getTime();
    let elapsed = dateDiff(createdAt);
    return `
    ${elapsed.year > 0 ? elapsed.year + ' years':''}
    ${elapsed.month > 0 ? elapsed.month + ' months':''}
    ${elapsed.day > 0 ? elapsed.day + ' days': ''}
    ${elapsed.hour > 0 ? elapsed.hour + ' hours':''}
    ${elapsed.minute > 0 ? elapsed.minute + ' minutes':''}
    `.replace(/[\n\r]+ */g, ' ');
};