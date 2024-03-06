const { contextBridge, ipcRenderer } = require('electron')
const usersmgr = require("./models/usersmgr");  

const getUsers = () => {
    return usersmgr.getUsers();
}

contextBridge.exposeInMainWorld('versions', {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
    getUsers: getUsers,
    ping: () => ipcRenderer.invoke('ping')
})