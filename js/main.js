'use strict'

const fontBig   = document.querySelector('#font-big');
const fontSmall = document.querySelector('#font-small');
const tokyo     = document.querySelector('.tokyo-welcome');

fontBig.addEventListener('click', bigChange);

fontSmall.addEventListener('click', smallChange);

function bigChange() {
  tokyo.style.fontSize = "75px";
}

function smallChange() {
  tokyo.style.fontSize = "25px";
}