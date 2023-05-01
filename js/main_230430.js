'use strict'

const fontBig      = document.querySelector('#font-big');
const fontMedium   = document.querySelector('#font-medium');
const fontSmall    = document.querySelector('#font-small');
const tokyo        = document.querySelector('.tokyo-welcome');

fontBig.addEventListener('click', bigChange);

fontMedium.addEventListener('click', mediumChange);

fontSmall.addEventListener('click', smallChange);

function bigChange() {
  tokyo.style.fontSize = "100px";
}
function mediumChange() {
  tokyo.style.fontSize = "75px";
}
function smallChange() {
  tokyo.style.fontSize = "50px";
}