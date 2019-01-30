const {
    app,
    BrowserWindow,
    ipcMain,
    globalShortcut
} = require('electron')
const createWindow = () => {
    win = new BrowserWindow({
        width: 740,
        height: 740,
        frame: false
        // resizable: false
    })
    win.loadFile('index.html')
    //win.webContents.openDevTools()
    ipcMain.on('async', (event, arg) => {
        switch (arg) {
            case 'min':
                win.minimize();
                break
            case 'close':
                win.close()
                break
            default:
                break
        }
    })
    globalShortcut.register('Ctrl+Alt+x', () => {
        win.isMinimized() ? win.unmaximize() : win.minimize()
    })
    globalShortcut.register('Ctrl+Alt+q', () => {
        win.close()
    })
}

app.on('ready', createWindow)