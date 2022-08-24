function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displaypinField = document.getElementById('display-pin');
    displaypinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newtypedNumber = previousTypedNumber + number;
        typeNumberField.value = newtypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typedNumber = typeNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailMessage = document.getElementById('pain-fail');

    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailMessage.style.display = 'none';
    }
    else {
        pinFailMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})

