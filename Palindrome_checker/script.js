
const input = document.querySelector('#input-box');
const checkbtn = document.querySelector('#check-btn');
const result = document.getElementById('result');

checkbtn.addEventListener('click', () => {
    if (input.value === '') {
        result.textContent = `Please enter a valid input..!`;
    } else {
        palindromeChecker();
    }
});

function palindromeChecker() {

    let rawInput = input.value;
    let cleanInput = rawInput.toLowerCase().trim().replace(/\s+/g, "");
    let reversInput = cleanInput.split("").reverse().join("");

    if (cleanInput === reversInput) {
        result.innerHTML = `Yes <span id="userInput">'${rawInput}'</span> is a palindrome.`;
    } else {
        result.innerHTML = `No <span id="userInput">'${rawInput}'</span> isn't apalindrome!!`;
    }
};





