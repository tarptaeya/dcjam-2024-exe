const{app,BrowserWindow}=require("electron"),path=require("path"),express=require("express"),server=(()=>{const e=express();return e.use(express.static(path.resolve(__dirname))),e.listen(0,(()=>{}))})(),createWindow=()=>{new BrowserWindow({width:1080,height:720}).loadURL("http://localhost:"+server.address().port)};app.whenReady().then((()=>{createWindow()})),app.on("window-all-closed",(()=>{app.quit()}));