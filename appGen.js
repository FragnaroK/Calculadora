const {app, BrowserWindow} = require('electron');

var mainWindow;

app.on('ready', createWindow);

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    });

    mainWindow.loadFile('./public/index.html');

}