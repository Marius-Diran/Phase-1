// console.log("I like pizza");

let Name = "Marius";
let age = 20;
let stats = true;
// let username = window.prompt('What is your name?');

let header1 = document.querySelector('.h1');
let header2 = document.querySelector('.h2');
let header3 = document.querySelector('.h3');

header1.textContent = "Hello " + Name;
header2.textContent = "I am " + age + " Years Old."
header3.textContent = "Enrolled: " + stats;

let username;

document.querySelector('#submit-btn').onclick = function (){
  username = document.querySelector('#name-input').value;
  document.querySelector('#my-label').textContent = "Hello " + username;
  console.log(username);
};

document.querySelector('.answer-btn').onclick = function(){
  a = document.querySelector('.textbox-A').value;
  a = Number(a);

  b = document.querySelector('.textbox-B').value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.querySelector('.label-C').textContent = "Side C: " + c;
};