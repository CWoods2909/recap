const addElement = () => {
    const myName = document.createElement('h1')
    myName.innerText = 'Charles Woods'
    document.body.appendChild(myName);
}

window.onload = addElement;