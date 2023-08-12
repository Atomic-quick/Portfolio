
//2nd nav active function
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));



//from validation
function validateForm() {
    const nameInput = document.getElementsByName('myname')[0];
    const numberInput = document.getElementsByName('mynumber')[0];
    const emailInput = document.getElementsByName('myemail')[0];
    const submitBtn = document.getElementById('submitBtn');

    if (nameInput.validity.valid && numberInput.validity.valid && emailInput.validity.valid) {
    if (numberInput.value.length !== 10) {
        alert('Number must be 10 digits long.');
        return false;
    }
    return true;
    } else {
    submitBtn.classList.add('hidden');
    return false;
    }
}

const mebox = document.querySelector('.mebox');
const submitBtn = document.getElementById('submitBtn');

mebox.addEventListener('input', function() {
    if (mebox.checkValidity()) {
    submitBtn.classList.remove('hidden');
    submitBtn.removeAttribute('disabled');
    } else {
    submitBtn.classList.add('hidden');
    submitBtn.setAttribute('disabled', 'disabled');
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzJrDL5V6GrUdYnkv0-oqABglQ8vT5YK2GjU_MSYSFh3XObcRj0LZMIc66_nM2qLhw/exec'
const form = document.forms['contactform']
form.addEventListener('submit', e => {
e.preventDefault()
if (validateForm()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert("Thank you! Your form is submitted successfully.");
        window.location.reload();
      })
      .catch(error => console.error('Error!', error.message));
  }
});