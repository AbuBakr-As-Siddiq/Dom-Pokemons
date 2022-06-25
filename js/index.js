let elList = selectElem('.list');

for (item of data) {
        let elLi = createDom('li');
        let elSpan = createDom('span');
        let elH3 = createDom('h3');
        let elp = createDom('p');
        let elAP = createDom('img');
    
    elSpan.textContent = `${item.id}`;
    elH3.textContent = `${item.name}`;
    elp.textContent = `${item.type}`;
    elAP.src = `${item.img}`    

    elLi.appendChild(elAP);
    elLi.appendChild(elSpan);
    elLi.appendChild(elH3);
    elLi.appendChild(elp);
    elList.appendChild(elLi)
}