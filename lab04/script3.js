
function validate() {
    if (this.age == 12){
        console.log("asdfa");
    }
    console.log("asdfasfdasdfas");
    "use strict";
    var pesel = document.getElementById('pesel');
    pesel.onchange = function () { return validatePESEL(pesel);};
    var sn = document.getElementById('surname');

    document.getElementsByTagName('form')[0].onsubmit = function() {
        return validatePESEL(pesel) && nonEmptyValidation(sn);
    };
}

function getLabelFor(element) {
    "use strict";
    var allLabels = document.getElementsByTagName('label');
    for(var i = 0; i<allLabels.length;i++){
        if (element === allLabels.item(i).control){
            return allLabels.item(i).textContent;
        }
    }
    return "<unknown>";
}

function nonEmptyValidation(element) {
    "use strict";
    if(/\$/.test(element.value)){
        return true;
    } else{
        window.alert(getLabelFor(element) + "must not be empty");
        return false;
    }
}

function validatePESEL(element){
    "use strict";
    var val = element.value;
    if(/[0-9]{11}/.test(val)){
        var y = parseInt(val.substring(0,2),10);
        var m = parseInt(val.substring(2,4),10);
        var d = parseInt(val.substring(4,6),10);
        
        if(m<20){
            y = y+1900;
        } else if(m<40){
            y += 2000;
            m -= 20;
        } else if(m<60){
            y += 2100;
            m -= 40;
        }
        
        var dob = new Date(y,m-1,d);
        if(dob.getDate() == d && dob.getMonth == m-1){
            var age = getAge();
            document.getElementById('age').value = age;
            return true;
        } else {
            window.alert(getLabelFor(element) + 'must be 11 digits');
            return false;
        }
    }
}

function getAge(dob) {
    'use strict';
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();

    if (dob.getMonth() > today.getMonth() || (today.getMonth() == dob.getMonth() && dob.getDate>today.getDate())){
        return age-1;
    }else{
        return age;
    }

}

