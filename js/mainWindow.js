const electron = require('electron');
const path = require('path');
const autocorrect = require(path.join(__dirname, '../js/autocorrect'))({
  words: ['hi', 'hello', 'yup', 'no', 'yes', 'maybe', 'today', 'tomorrow', 'yesterday', 'tonight']
});
const {
  ipcRenderer
} = electron;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');
const speedSlider = document.querySelector('#speed');
const textarea = document.querySelector('#textarea');

let curchar;
let chosenchar;
let chosen = 0;
let toggler;
let blink_detector;
let indexy = -1,
  indexx = -1;
let tempindexy = -1;
var speed = 500;
var blink_check_speed = 50;
var reset_blink = true,reset_start = true;

var hor_order = ['A', 'F', 'J', 'O', 'R', 'V', 'space'];
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
  chosen = 0;
  indexy = -1;
  indexx = -1;
  clearInterval(toggler);
  clearInterval(blink_detector);
  toggler = null;
});

clear.addEventListener('click', function() {
  textarea.value = '';
});

ipcRenderer.on('char:chosen', charchosen);

speedSlider.oninput = function() {
  speed = parseInt(1000 * (1 - this.value / 100));
  console.log('Speed changed to = ' + speed);
}

function charchosen() {
  chosen += 1;
  chosen = chosen % 3;
  // chartoggler(false);
}

function chartoggler(withtimer = true) {
  reset_start = true;
  if (chosen == 0) {
    indexy = ++indexy % hor_order.length;
    curchar = hor_order[indexy];
    if (withtimer == true) {
      toggleHighlight(curchar)
      setTimeout(toggleHighlight.bind(null,curchar), speed)
      toggler = setTimeout(chartoggler, 2 * speed)
    }
  } else if (chosen == 1) {
    indexy = tempindexy;
    curchar = chosenchar;
    if (curchar == 'space') {
      chosen = 2;
      toggler = setTimeout(chartoggler, speed);
    } else {
      do {
        indexx = (++indexx) % ver_order[0].length;
        if (indexy == -1)
          indexy = 0;
        curchar = ver_order[indexy][indexx];
      } while (curchar == '-');
      if (withtimer == true) {
        toggleHighlight(curchar);
        setTimeout(toggleHighlight.bind(null,curchar), speed);
        toggler = setTimeout(chartoggler, 2 * speed);
      }
    }
  } else {
    indexx = -1;
    indexy = -1;
    writechar(chosenchar);
    charchosen()
    if (withtimer == true) {
      toggler = setTimeout(chartoggler, 2 * speed)
    }
  }
}

function writechar(curchar) {
  if (curchar == 'space') {
    curchar = ' ';
    autocorrectText()
  }
  textarea.value += curchar.toLowerCase();
}

function spaceclicked() {
  writechar('space');
}

function autocorrectText() {
  words = textarea.value.split(" ");
  words[words.length - 1] = autocorrect(words[words.length - 1].toLowerCase());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
  textarea.value = words.join(" ");
}

function begin() {
  if (toggler == null) {
    chosen = 0;
    indexy = -1;
    indexx = -1;
    chartoggler()
    blink_detector = setTimeout(checkBlink, blink_check_speed);
  }
}

function toggleHighlight(id) {
  var char = document.querySelector('#' + id + ' > h3');
  if (char.className == 'red accent-1') {
    char.className = 'red lighten-4';
  } else {
    char.className = 'red accent-1'
  }
}

// Zerorpc Stuff
const zerorpc = require("zerorpc")
let client = new zerorpc.Client()
client.connect("tcp://127.0.0.1:4242")

function checkBlink() {
  client.invoke("blink", (error, res) => {
    if (error) {
      console.error(error);
    } else {
      if (res[1] == true && reset_start == true) {
        console.log(curchar);
        chosenchar = curchar;
        tempindexy = indexy;
      }

      if (res[0] == true && reset_blink == true) {
        reset_start = false;
        reset_blink = false;
        charchosen();
        console.log(res);
      } else {
        reset_blink = true;
      }
    }
    blink_detector = setTimeout(checkBlink, blink_check_speed);
  });
}
