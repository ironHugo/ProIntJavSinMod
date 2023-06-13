const estPie = (ePad) => {
    let menu = document.createElement('nav');
    menu.setAttribute('id', 'menInf');
    let items = {'Preguntas frecuentes':'#', 'Contáctanos':'#', 'Prensa':'#', 'Conferencias':'#', 'Términos y condiciones':'#', 'Privacidad':'#', 'Estudiantes':'#'};
    carMen(menu, items);
    ePad.appendChild(menu);
}