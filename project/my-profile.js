const addElement = () => {
    const myName = document.createElement('h1')
    myName.className = 'name'
    myName.innerText = 'Charles Woods'
    document.body.appendChild(myName);

    const details = document.createElement('ul')
    details.className = 'my-details'
    const detailArr = ['Hello', 'Goodbye', 'What up', 'Wowza']
    
    detailArr.map(ele => {
        let li = document.createElement('li')
        li.className = 'detail'
        li.innerText = ele
        details.appendChild(li)
    })
    
    document.body.appendChild(details)
}

window.onload = addElement;