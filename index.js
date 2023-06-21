let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let company = document.getElementById('company');
let number = document.getElementById('number');
let message = document.getElementById('message');

let btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () =>{
    alert("Datos \n" + firstname.value + "\n" + lastname.value + "\n" + email.value + "\n" + company.value + "\n" + number.value + "\n" + message.value);
    console.log("Datos \n" + firstname.value + "\n" + lastname.value + "\n" + email.value + "\n" + company.value + "\n" + number.value + "\n" + message.value);
})


