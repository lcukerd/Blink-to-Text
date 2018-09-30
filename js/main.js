const electron = require('electron');
const url = require('url');
const path = require('path');

const {
  app,
  BrowserWindow,
  ipcMain
} = electron;

process.env.NODE_ENV = 'development';

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

const selectPort = () => {
  pyPort = 4242
  return pyPort
}

const createPyProc = () => {
  let port = '' + selectPort()
  let script = '../python_backend/api.py'
  pyProc = require('child_process').spawn('python', [script, port])
  if (pyProc != null) {
    console.log('child process success')
  }
}

const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}

app.on('ready', createPyProc)
app.on('will-quit', exitPyProc)
