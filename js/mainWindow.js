const electron = require('electron');
const {
  ipcRenderer
} = electron;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');
const textarea = document.querySelector('#textarea');

let curchar;
let chosen = 0;
let toggler;
let indexy = -1,
  indexx = -1;

var hor_order = ['A', 'F', 'J', 'O', 'R', 'V'];
var ver_order = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', '-'],
  ['J', 'K', 'L', 'M', 'N'],
  ['O', 'P', 'Q', '-', '-'],
  ['R', 'S', 'T', 'U', '-'],
  ['V', 'W', 'X', 'Y', 'Z'],
];


start.addEventListener('click', begin);

stop.addEventListener('click', function() {
  clearInterval(toggler)
});

clear.addEventListener('click', charchosen);

ipcRenderer.on('char:chosen', charchosen);

function charchosen() {
  chosen += 1;
  chosen = chosen % 3;
}

function chartoggler() {
  if (chosen == 0) {
    curchar = hor_order[(++indexy) % hor_order.length];
    toggleHighlight(curchar)
    setTimeout("toggleHighlight(curchar)", 500)
    toggler = setTimeout(chartoggler, 1000)
  } else if (chosen == 1) {
    curchar = ver_order[indexy][(++indexx) % ver_order.length];
    console.log(curchar);
    while (curchar == '-') {
      curchar = ver_order[indexy][(++indexx) % ver_order.length];
      console.log(curchar);
    }
    toggleHighlight(curchar)
    setTimeout("toggleHighlight(curchar)", 500)
    toggler = setTimeout(chartoggler, 1000)
  } else {
    indexx = -1;
    indexy = -1;
    writechar(curchar);
    charchosen()
    toggler = setTimeout(chartoggler, 1000)
  }
}

function writechar(curchar) {
  textarea.value += curchar;
}

function begin() {
  chartoggler()
}

function toggleHighlight(id) {
  var char = document.querySelector('#' + id + ' > h3');
  console.log(char.className);
  if (char.className == 'red accent-1') {
    char.className = 'red lighten-4';
  } else {
    char.className = 'red accent-1'
  }
}
