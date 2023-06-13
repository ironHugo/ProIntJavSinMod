const carMen = (ele, items) => { 
    let ul = document.createElement('ul');
    for(let item in items){
        let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href',items[item]);
            a.setAttribute('class', 'menDes');
            a.addEventListener('click', actDesLin);
            a.innerText = item;
            a.addEventListener('click', actDesLin);
            li.appendChild(a);
        ul.appendChild(li);
    }
    ele.appendChild(ul);
}

const agrEle = (ePad, eHij, par = null, val = '', tex = true) => { 
    let hijo = document.createElement(eHij);
    if(par != null){
        for(const atributo in par){
            hijo.setAttribute(atributo, par[atributo]);
        }
    }
    if(val != ''){
        if (tex){
            hijo.innerText = val;
        }else {
            hijo.innerHTML = val;
        }
    }
    ePad.appendChild(hijo);
}

const actDesLin = (e) => { 
    let eleAct = null;
    if(e.target.className == 'menDes'){
        eleAct = document.getElementsByClassName('menAct')[0];
        if(eleAct) { 
            document.querySelector('#menSup ul li a.menAct').className = 'menDes';
        }
        e.target.removeEventListener('click', actDesLin);
            
        e.target.className = 'menAct';
            
        eleAct.addEventListener('click', actDesLin);  
    }
}

const calCos = () => { 
    let valCam = obtValCam(); 
    valDat(valCam); 
    let obtVal = calCosTot(valCam); 
    mosRes(obtVal, 'valTot'); 
}
const obtValCam = () =>{
    let camCan = document.getElementById('can').value;
    let camCat = document.getElementById('cat').value;
    return {'can':camCan, 'cat':camCat};
}
const valDat = (datos) => {
    for(let dato in datos){
        
        switch(dato){
            case 'can':
                comDatCan(datos[dato]);
                break;
            case 'cat':
                comDatCat(datos[dato]);
                break;
        }
    }
}
const comDatCan = (valor) =>{
    if(valor == 0 || valor == null){
        alert('Cantidad de entradas incorrectas.\nDebe seleccionar un valor entre 1 y 100 inclusives. \nVuelva intentarlo.');
        document.getElementById('can').focus();
        exit();
    }
}
const comDatCat = (valor) => {
    if(valor == '- Seleccione -'){
        alert('No seleccionó un valor. \nDebe seleccionar un tipo.\nVuelva a intentarlo.');
        document.getElementById('cat').focus();
        exit();
    }
}

const calCosTot = (tipos) => {
    switch(tipos['cat']){
        case 'estudiante':
            return tipos['can'] * 200 * 0.2; // Aplica un 80% de descuento.
            break;
        case 'trainee':
            return tipos['can'] * 200 * 0.5; // Aplica un 50% de descuento.
            break;
        case 'junior':
            return tipos['can'] * 200 * 0.85; // Aplica un 15% de descuento.
        default:
            return tipos['can'] * 200;
    }
}
const mosRes = (dat, id) => {
    let ele = document.getElementById(id);
    ele.innerText =  dat; 
}

const borPre = () => {
    if(document.getElementById('valTot').innerText != ''){
        mosRes('', 'valTot');
    }
}