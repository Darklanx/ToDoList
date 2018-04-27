const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const url = require('url')
const path = require('path')
const fs = require('fs')


let win;
function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname + '/src/', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', () => {
    createWindow();

})

//AutoCompleteDate.loadToDos();


