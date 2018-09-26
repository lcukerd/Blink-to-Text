const electron = require('electron');
const url = require('url');
const path = require('path');

const {
  app,
  BrowserWindow,
  Menu,
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
