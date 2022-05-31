const addElement = () => {
    const myName = document.createElement('h1')
    myName.className = 'name'
    myName.innerText = 'Charles Woods'
    
    const details = document.createElement('ul')
    details.className = 'my-details'
    const detailArr = ['Hello', 'Goodbye', 'What up', 'Wowza']
    
    detailArr.map(ele => {
        let li = document.createElement('li')
        li.className = 'detail'
        li.innerText = ele
        details.appendChild(li)
    })
    
    const clock = document.createElement('p');
    clock.innerText = Date.toLocaleString()




    
    document.body.appendChild(myName);
    document.body.appendChild(details);
    document.body.appendChild(clock)
}

window.onload = addElement;