
document.getElementById('contact-form').setAttribute('action', 'https://script.google.com/macros/s/AKfycbxRh7P9vDO-I0HoCpKfI8_THnYpod3DU6d4DyWgz0MVLnwRVe8j_bJFSp1UlTE3OsPR/exec');

document.addEventListener("DOMContentLoaded", function() {

document.getElementById('send-button').disabled = true;

a = random_number();
b = random_number();

document.getElementById('number-1').innerHTML = a;
document.getElementById('number-2').innerHTML = b;


const inputField = document.getElementById('spam-input-field')
inputField.placeholder = "To help prevent spam, please enter the sum of " + a.toString() + " + " + b.toString() + ".";

c = sum(a,b); 
inputField.addEventListener("input", validate)

function validate(e) {

  if (c == Number(inputField.value)) {
    document.getElementById('send-button').disabled = false;    
  } else {
    document.getElementById('send-button').disabled = true;
  }

}

} );


function sum (a,b) {
    c = a + b;
    return c;
};

function random_number () {
    return Math.floor(Math.random() * 9) + 1; //returns an integer between 1 and 9
}
