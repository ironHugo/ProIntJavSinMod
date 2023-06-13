
const carRec = () => { 
    links();
}

const links = () => { 
    let modulos = ['conFun.js', 'estCab.js', 'estCue.js', 'estPie.js', 'funForSal.js', 'estGen.js'];
    let head = document.getElementsByTagName('head')[0];
    let eleScr = document.getElementsByTagName('script')[0];

    for(let archivo of modulos){
        let script = document.createElement('script');
        script.setAttribute('src', './modulo/'+archivo);
        head.insertBefore(script, eleScr);
    }

    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', './style/estInd.css');
    head.appendChild(link);
}

window.addEventListener('load', carRec);