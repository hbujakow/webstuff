"use strict"
x = 1

function trim(s) {
    if (s == null)
        return '';
    while (s.substring(0, 1) == ' ') {
        s = s.substring(1, s.length);
    }
    while (s.substring(s.length - 1, s.length) == ' ') {
        s = s.substring(0, s.length - 1);
    }
    return s;
}

var x;

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}


function validate() {
    x=2;
    var number=/^[0-9]+$/;
    var nonempty=/.+/;
    // console.log('validate');
    // console.log(this.age.value + x);
    // window.alert('validate');
    // console.warn("validate" + x);
    // console.log(document.getElementById('age').value)
    // console.log(document.getElementsByTagName('input')[1].value)
    // console.log(document.querySelector('#surname').value)
    // console.log(document.querySelector('[name=last]'))
    console.log(number.test(document.getElementById('age').value) &&
    nonempty.test(trim(document.querySelector('#surname').value)) &&
    nonempty.test(new String(document.querySelector('#surname')).trim()));

    return number.test(document.getElementById('age').value) &&
            nonempty.test(trim(document.querySelector('#surname').value)) &&
            nonempty.test(new String(document.querySelector('#surname')).trim());
}