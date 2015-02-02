import Ember from 'ember';
import cipher from '../utils/cipher';

export default Ember.Component.extend({
    classNames: ["cipher-entry"],

    ciphers: null,

    textInput: Ember.computed(function () {
        return "";
    }),

    runCipher: Ember.observer("textInput", function () {
        this.set('ciphers', cipher(this.get('textInput')));
    })
});
