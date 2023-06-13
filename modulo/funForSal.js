const main = () => { 
    let body = document.getElementsByTagName('body')[0];
    let main = document.createElement('main');
    body.appendChild(main);
    
} 
const cabecera = () => { 
    let main = document.getElementsByTagName('main')[0];
    let header = document.createElement('header');
    estCab(header); 
    main.appendChild(header);
    document.querySelector('#menSup ul li:last-child a').click(); 
    
}
const cuerpo = () => { 
    let main = document.getElementsByTagName('main')[0];
    let section = document.createElement('section');
    estCue(section); 
    main.appendChild(section);
    agrResCon(); 
}

const pie = () => { 
    let main = document.getElementsByTagName('main')[0];
    let footer = document.createElement('footer');
    estPie(footer);
    main.appendChild(footer);
}