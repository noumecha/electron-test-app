const information = document.getElementById("info")
information.innerHTML = `This app is using Chrome (v${versions.chrome}), Node.js (v${versions.node}) and Electron (v${versions.electron}).`

const func = async () => {
    const res = await window.versions.ping()
    console.log(res) // suppose to prints out 'pong'
}

func()