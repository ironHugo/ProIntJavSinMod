const estCab = (ePad) => {
    let logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.innerHTML = '<h1>Conf Bs As</h1>';
    ePad.appendChild(logo);

    let menu = document.createElement('nav');
    menu.setAttribute('id', 'menSup');
    let items = {'La conferencia':'#', 'Los oradores':'#', 'El lugar y la fecha':'#', 'Conviértete en orador':'#', 'Comprar tickets':'#'}; // Listado de opciones con sus correspondiente url.
    carMen(menu, items);
    ePad.appendChild(menu);
}
