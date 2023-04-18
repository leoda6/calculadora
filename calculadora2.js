
const display = document.querySelector('.display');
const botones = document.querySelectorAll('.btn');
const botonIgual = document.querySelector('#igual');
const botonBorrar = document.querySelector('#borrar');
const botonC = document.querySelector('#c');
const botoncero=document.querySelector('#col-2');

botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    const valor = boton.innerHTML;
    display.innerHTML += valor;
  });
});

botonIgual.addEventListener('click', function() {
  const expresion = display.innerHTML;
  const resultado = eval(expresion);
  display.innerHTML = resultado;
});

botonBorrar.addEventListener('click', function() {
  let expresion = display.innerHTML;
  expresion = expresion.slice(0, -1);
  display.innerHTML = expresion;
});

botonC.addEventListener('click', function() {
  display.innerHTML = '';
});
