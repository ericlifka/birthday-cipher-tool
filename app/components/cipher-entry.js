import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["cipher-entry"],

    ciphers: null,

    textInput: Ember.computed(function () {
        return "";
    }),

    runCipher: Ember.observer("textInput", function () {
        var text = this.get('textInput');
        this.set('ciphers', [text, text, text]);
    })
});
