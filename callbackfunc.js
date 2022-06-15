function checkMood(mood, goodCallback, badCallback) {
    if (mood === 'good') {
        //기분 좋을 때 하는 동작
        goodCallback();
    } else {
        //기분 안 좋을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}

function sing() {
    console.log("ACTION :: SING");
}

function dance() {
    console.log("ACTION ::DANCE");
}
checkMood("sad", sing, cry); //함수 표현식