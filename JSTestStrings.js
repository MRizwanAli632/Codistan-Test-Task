const text = 'I am a master at strings';

// 1 - Replace first occurrence of 'a' with the letter z
const replacedText = text.replace('a', 'z');
console.log(replacedText);

// 2 - Replace all occurrences of 'a' with the letter 'z'
let replacedAllText = '';
for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
        replacedAllText += 'z';
    } else {
        replacedAllText += text[i];
    }
}
console.log(replacedAllText);

// 3 - Print 0-based position of the first letter 'm'
const position = text.indexOf('m');
console.log(position);
