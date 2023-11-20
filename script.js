let currentDate =new Date().toLocaleDateString();
let date =document.querySelector('#date');
let currentyear = new Date().getFullYear();
let year = document.querySelector('#year');

date.textContent = currentDate;
year.textContent = currentyear;