const electron = require('electron');
const url = require('url');
const path = require('path');

const {
  app,
  BrowserWindow,
  ipcMain
} = electron;

// Making this false will run packaged python and not py file saved in python_backend
var runpy = false;

let mainWindow;

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 940,
    frame: false
  });
  mainWindow.loadURL(url.format({
    pathname : path.join(__dirname,'../html/mainWindow.html'),
    protocol : 'file',
    slashes : true
  }));
  mainWindow.on('closed', function(){
    app.quit();
  });
});

let pyProc = null
let pyPort = null

const createPyProc = () => {
  let script = getScriptPath()
  console.log(script);
  if (guessPackaged()) {
    pyProc = require('child_process').execFile(script)
  } else {
    pyProc = require('child_process').spawn('python3', [script])
  }

  if (pyProc != null) {
    //console.log(pyProc)
    console.log('child process success')
  }
}

const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}

const PY_DIST_FOLDER = 'pycalcdist'
const PY_FOLDER = 'python_backend'
const PY_MODULE = 'detect_blink' // without .py suffix

const guessPackaged = () => {
  const fullPath = path.join(__dirname, '../' + PY_DIST_FOLDER)
  console.log(fullPath);
  return require('fs').existsSync(fullPath) && runpy;
}

const getScriptPath = () => {
  if (!guessPackaged()) {
    return path.join(__dirname,'../' +  PY_FOLDER, PY_MODULE + '.py')
  }
  if (process.platform === 'win32') {
    return path.join(__dirname, '../' + PY_DIST_FOLDER, PY_MODULE, PY_MODULE + '.exe')
  }
  return path.join(__dirname, '../' + PY_DIST_FOLDER, PY_MODULE, PY_MODULE)
}

app.on('ready', createPyProc)
app.on('will-quit', exitPyProc)
