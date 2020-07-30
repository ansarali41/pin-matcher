//generating 4 digits random pin using 'generate-btn'
let randomPin = 0, tryLeftValue;
function randomPinHandler() {
    randomPin = '' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pin-generate-screen').value = randomPin;
    // tryLeftValue initializing  
    tryLeftValue = 3;
    document.getElementById('try-left').innerText = tryLeftValue;
    document.querySelector('.action-left').style.display = 'block';
    // when generate pin again then right wrong msg hide
    document.getElementById('wrong-pin').style.display = 'none';
    document.getElementById('right-pin').style.display = 'none';
}

// user Input showing in screen
let userInputPin = '';
function userInputPinHandler(number) {
    userInputPin += number;
    document.getElementById('user-input-screen').value = userInputPin;
}

//reset button (C) handler function
function resetScreen() {
    userInputPin = '';
    document.getElementById('user-input-screen').value = userInputPin;
    document.getElementById('wrong-pin').style.display = 'none';
    document.getElementById('right-pin').style.display = 'none';
    // reset try left value also and update
    document.getElementById('try-left').innerText = tryLeftValue;
    document.querySelector('.action-left').style.display = 'block';

}

// submit button handler function
function submitButton() {
    // if pin didn't generate
    if (randomPin == 0) {
        alert("Pin didn't generate 😑!!");
    }
    // if input pin is empty or digits is not 4 numbers
    else if (userInputPin.length != 4) {
        alert('Please Input 4 digits pin 🤔!!');
    }
    // if pin matched and unmatched section
    else if (userInputPin == randomPin) {
        document.getElementById('right-pin').style.display = 'block';
        document.getElementById('wrong-pin').style.display = 'none';
        // if pin matched reset try left=3 and hide it
        tryLeftValue = 3;
        document.querySelector('.action-left').style.display = 'none';
    }
    else {
        document.getElementById('wrong-pin').style.display = 'block';
        document.getElementById('right-pin').style.display = 'none';
        document.querySelector('.action-left').style.display = 'block';


        // try left Value section decreasing 
        if (tryLeftValue > 0) {
            tryLeftValue--;
            document.getElementById('try-left').innerText = tryLeftValue;
        }
        else if (tryLeftValue == 0) {
            alert('Mission failed , reload and try again !');
            location.reload();
        }
    }
}

// number delete buttons (<)
function clearLastChar() {
    userInputPin = userInputPin.slice(0, -1);
    document.getElementById('user-input-screen').value = userInputPin;
}