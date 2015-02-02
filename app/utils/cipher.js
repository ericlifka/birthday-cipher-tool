var translationMap = {};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(function (letter, index) {
    translationMap[letter] = index;
    translationMap[index] = letter;
});

function mod26(num) {
    return num % 26;
}

function increment(num) {
    return num + 1;
}

export default function cipher(text) {
    return [text.split('').map(function (l) {
        return translationMap[mod26(increment(translationMap[l]))];
    }).join('')];
}
