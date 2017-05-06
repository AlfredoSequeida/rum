/*
 * Copyright (C) 2017 Alfredo Sequeida (alfredosequeida.github.io) 
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
*/

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow () {
        // Create the browser window.
        win = new BrowserWindow({
                width: 1024, 
                height: 768,
                icon: path.join(__dirname, './assets/icons/png/64x64.png')
        })

        // and load the index.html of the app.
        win.loadURL(url.format({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
        }))

        // remove menu bar
        win.setMenu(null);
        
        //developer tools
        win.webContents.openDevTools();

        win.on('closed', () => {
                win = null;
        })
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
                app.quit();
        }
})

app.on('activate', () => {
        if (win === null) {
                createWindow();
        }
})
