var translationMap = {};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(function (letter, index) {
    translationMap[letter] = index;
    translationMap[index] = letter;
});

export default function cipher(text) {
    text.split('').map(function (l) {

    });

    return [text, text, text, text];
}
