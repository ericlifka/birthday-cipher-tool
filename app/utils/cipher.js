var translationMap = {};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(function (letter, index) {
    translationMap[letter] = index;
    translationMap[index] = letter;
});

function mod26(num) {
    return num % 26;
}

function translate(letter, increment) {
    if (!translationMap[letter]) {
        return letter;
    }

    return translationMap[mod26(translationMap[letter] + increment)];
}

export default function cipher(text) {
    return [text.split('').map(function (l) {
        return translate(l, 1);
    }).join('')];
}
