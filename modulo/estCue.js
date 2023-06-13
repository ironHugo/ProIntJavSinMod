const estCue = (ePad) => {
    agrEle(ePad, 'div', {'id':'tipDes'});

    agrEle(ePad, 'div', {'id':'inf'});

    agrEle(ePad, 'form', {'id':'forDat'});
}

const agrResCon = () => {
    let idEle = ['desEst', 'desTra', 'desJun'];
    let texPar = [['Estudiante', 'Tiene un descuento', '80%', '* Presentar documentación'],
                  ['Trainee', 'Tiene un descuento', '50%', '* Presentar documentación'],
                  ['Junior', 'Tiene un descuento', '15%', '* Presentar documentación']
                 ];  
    for (let j=0; j<idEle.length; j++){ 
        agrEle(document.getElementById('tipDes'), 'p', {'id':idEle[j]});
        let tipDes = document.getElementById(idEle[j]);
        for (let i=0; i<texPar[j].length; i++){
            if(i != texPar[j].length-1){
                agrEle(tipDes, 'span', null, texPar[j][i]+'<br/>', false);
            }else{
                agrEle(tipDes, 'span', null, texPar[j][i]);
            }
        } 
    }

    let inf = document.getElementById('inf');
    agrEle(inf, 'p', {'id':'inf'}, 'VEENTA <br/><span>VALOR DE TICKET $200</span>', false);

    let form = document.getElementById('forDat');
    let tipEle = [['text', 'nom', 'Nombre'], 
                  ['text', 'ape', 'Apellido'],
                  ['email', 'mei', 'e-mail'],
                  ['label', 'canL', 'Cantidad'],
                  ['number', 'can', 'Cantidad'],
                  ['label', 'catL', 'Categoría'],
                  ['select', 'cat', 'Seleccione'],
                  ['p', 'preTot', 'Total a pagar: $'],
                  ['reset', 'res', 'Borrar'],
                  ['button', 'calCos', 'Resumen']
                 ];
    for (const campo of tipEle){
        switch(campo[0]){
            case 'select':
                agrEle(form, 'select', {'id':campo[1], 'name': campo[1]});
                break;
            case 'label':
                agrEle(form, 'label', {'id':campo[1], 'name': campo[1]}, campo[2]);
                break;
            case 'number':
                agrEle(form, 'input', {'type':campo[0], 'id':campo[1], 'name':campo[1], 'min':0});
                break;
            case 'p':
                agrEle(form, 'p', {'id':campo[1]}, campo[2], false);
                break;
            default:
                agrEle(form, 'input', {'type':campo[0], 'id':campo[1], 'name': campo[1], 'value':campo[2]});
                break;
        }
        
    }

    let valOpt = ['0', 'Sin Categoría' ,'Estudiante', 'Trainee', 'Junior'];
    let select = document.querySelector('select#cat');
    for(const opt of valOpt){
        if(opt == '0'){
            agrEle(select, 'option',{'disabled': 'disabled','selected':'selected'}, '- Seleccione -');
        }else{
            agrEle(select, 'option', {'value':opt.toLowerCase()}, opt.toUpperCase());
        }
    }
    
    document.getElementById('calCos').addEventListener('click', calCos);
    document.getElementById('can').addEventListener('change', borPre);
    document.getElementById('cat').addEventListener('change', borPre);

    agrEle(document.getElementById('preTot'), 'span', {'id':'valTot'}); 
}
