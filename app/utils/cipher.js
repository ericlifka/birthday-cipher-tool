var translationMap = {};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(function (letter, index) {
    translationMap[letter] = index;
    translationMap[index] = letter;
});

var offsets = [];
for (var i = 1; i < 26; i++) {
    offsets.push(i);
}

function mod26(num) {
    return num % 26;
}

function translate(letter, increment) {
    if (!translationMap.hasOwnProperty(letter)) {
        return letter;
    }

    return translationMap[mod26(translationMap[letter] + increment)];
}

export default function cipher(text) {
    return offsets.map(function (offset) {
        return text.toLocaleLowerCase().split('').map(function (letter) {
            return translate(letter, offset);
        }).join('')
    });
}
