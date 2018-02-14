const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const url = require('url')
const path = require('path')
const fs = require('fs')
//var AutocompleteDate = require("./AutocompleteDate")
//require('electron-debug')({ showDevTools: true });
let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', () => {
    createWindow();

})

//AutoCompleteDate.loadToDos();


