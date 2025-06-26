
const input = document.getElementById('input-num');
const convertFrom = document.getElementById('from');
const convertTo = document.getElementById('to');
const convertBtn = document.getElementById('convert-btn');
let result = 0;

convertBtn.addEventListener('click', () => {
    validation();
});


function validation() {
    
    const value = Number(input.value);
    const fromValue = convertFrom.value;
    const toValue = convertTo.value;

    if (input.value === "" || isNaN(value)) {
        console.log("please enter a valid Number");
    } else {
        calculateWeight(value, fromValue, toValue);
        displayResult(result);
        input.value = "";
    }

};

function displayResult(result) {

    let updatedResult = result.toFixed(5);

    const resultBox = document.getElementById('result');
    resultBox.textContent = `It will be  ${updatedResult} ${convertTo.value}`;
}



function calculateWeight(value, fromValue, toValue) {

    if (fromValue === "gram") {
        convertGram(value, toValue);
    } else if (fromValue === 'kg') {
        convertKg(value, toValue);
    } else if (fromValue === 'ounce') {
        convertOunce(value, toValue);
    } else if (fromValue === 'pound') {
        convertPound(value, toValue);
    } else if (fromValue === 'quintal') {
        convertQuintal(value, toValue);
    }

}



function convertGram (value, toValue) {

    if (toValue === 'kg') {
        result = value / 1000;
    } else if (toValue === 'ounce') {
        result = value / 28.35;
    } else if (toValue === 'pound') {
        result = value / 453.6;
    } else if (toValue === 'quintal') {
        result = value / 100000;
    }
}

function convertKg (value, toValue) {

    if (toValue === 'gram') {
        result = value * 1000;
    } else if (toValue === 'ounce') {
        result = value * 35.274;
    } else if (toValue === 'pound') {
        result = value * 2.20462;
    } else if (toValue === 'quintal') {
        result = value / 100;
    }
}

function convertOunce (value, toValue) {
    if (toValue === 'kg') {
        result = value / 35.274;
    } else if (toValue === 'gram') {
        result = value  * 28.3495;
    } else if (toValue === 'pound') {
        result = value  / 16;
    } else if (toValue === 'quintal') {
        result = (value / 35.274) / 100;
    }
}

function convertPound (value, toValue) {
    if (toValue === 'kg') {
        result = value * 0.453592;
    } else if (toValue === 'ounce') {
        result = value * 16;
    } else if (toValue === 'gram') {
        result = value * 453.592;
    } else if (toValue === 'quintal') {
        result = (value * 0.453592) / 100;
    }
}

function convertQuintal (value, toValue) {
    if (toValue === 'kg') {
        result = value * 100;
    } else if (toValue === 'ounce') {
        result = value * 100 * 35.274;
    } else if (toValue === 'pound') {
        result = value * 100 * 2.20462;
    } else if (toValue === 'gram') {
        result = value * 100000;
    }
}






