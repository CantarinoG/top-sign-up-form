document.querySelector("#submit").addEventListener("click", function() {
    document.getElementById("form").className = "submitted";

});

let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let label = document.querySelector('label[for="pass2"');

pass1.addEventListener('input', () => {
    if (pass1.value != pass2.value) {
        label.classList.add('tooltip-js');
    } else {
        label.classList.remove('tooltip-js');
    }
})

pass2.addEventListener('input', () => {
    if (pass1.value != pass2.value) {
        label.classList.add('tooltip-js');
    } else {
        label.classList.remove('tooltip-js');
    }
})