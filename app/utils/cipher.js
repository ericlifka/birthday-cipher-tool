var translationMap = {};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(function (letter, index) {
    translationMap[letter] = index;
});

export default function cipher(text) {
  return [text, text, text, text];
}
