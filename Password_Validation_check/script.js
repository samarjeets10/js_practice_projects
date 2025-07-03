const input = document.getElementById('password');
const check = document.querySelector('li i');
const requirementList = document.querySelectorAll('.requirement-list li');
const eyeIcon = document.querySelector('.fa-eye');


const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^a-zA-Z0-9]/, index: 4},
    {regex: /[A-Z]/, index: 3}, 
];


eyeIcon.addEventListener('click', () => {
    
    if (input.type === "password") {
        input.type = "text";
        eyeIcon.className = `fa-solid fa-eye-slash`;
    } else {
        input.type = "password";
        eyeIcon.className = `fa-solid fa-eye`;
    }
})

input.addEventListener('keyup', (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
             requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
             requirementItem.classList.remove("valid");
        }
    })
});



