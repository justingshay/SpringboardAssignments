export function stringified(string) {
    return string+'ify';
}

export function charCount(str) {
    str = str.toLowerCase();
    return str.split('').reduce((accum, char) => {
        accum[char] = (accum[char] || 0) + 1;
        return accum;
    }, {});
}

// console.log(stringified('string'));
// console.log(charCount('Strings'));