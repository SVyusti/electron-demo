const { app, BrowserWindow } = require('electron')
const path=require('path')

function createWindow () {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload:path.join(__dirname,'preload.js'),
      nodeIntegration: true
    }
  })
  
  win.loadURL('http://localhost:3000');

  // win.loadFile('index.html')

  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.setAsDefaultProtocolClient("oauth");

app.on('activate', () => {

  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
