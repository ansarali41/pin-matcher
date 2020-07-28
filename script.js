//generating pin number using 'generate-btn'
let randomPin;
function randomPinHandler() {
    randomPin = '' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pin-generate-screen').value = randomPin;
}

// user Input showing in screen
let userInput = '';
function userInputPinHandler(number) {
    userInput += number;
    document.getElementById('user-input-screen').value = userInput;
}

//reset button handler function
function resetScreen() {
    userInput = '';
    document.getElementById('user-input-screen').value = userInput;
    document.getElementById('wrong-pin').style.display = 'none';
    document.getElementById('right-pin').style.display = 'none';


    // document.querySelector('.action-left').style.display = 'block';

}

// submit button handler function
function submitButton() {
    let tryLeftValue = parseInt(document.getElementById('try-left').innerText);

    if (userInput == randomPin) {
        document.getElementById('right-pin').style.display = 'block';
        document.getElementById('wrong-pin').style.display = 'none';
        // tryLeftValue =3;
        // document.querySelector('.action-left').style.display = 'none';
    }
    else {
        document.getElementById('wrong-pin').style.display = 'block';
        document.getElementById('right-pin').style.display = 'none';

        // try left Value section
        // if (tryLeftValue > 0) {
        //     tryLeftValue--;
        //     document.getElementById('try-left').innerText = tryLeftValue;
        // }
    }
}

let totalLength;
function clearLastChar() {
    userInput = userInput.slice(0, -1);
    document.getElementById('user-input-screen').value = userInput;
}