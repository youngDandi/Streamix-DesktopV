const {app, BrowserWindow} = require('electron');
const path=require("path")






//fechar apenas qd tds janelas estiverem fechadas (windows e linux)
app.on("ready", ()=> {
    mainWindow = new BrowserWindow({
        width:890,
        height:690,
        
    });

    mainWindow.loadURL(`http://localhost:5173/Login`)
})