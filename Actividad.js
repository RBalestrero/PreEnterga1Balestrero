const cotizar = (precio) => precio + (precio * 0.21);


const cotizarImpresora = () => {
    const pZebra = 3500;
    const pHid = 1300;
    const pEpson = 2400;
    const pEntrust = 5000;
    
    let marca = toLowerCase(prompt('Ingrese la marca de la impresora que desea cotizar: Zebra, HID, Epson o Entrust'));
    switch(marca){
        case 'zebra':   cotizar(pZebra);
                        break;
        case 'hid':     cotizar(pHid);
                        break;
        case 'epson':   cotizar(pEpson);
                        break;
        case 'entrust': cotizar(pEntrust);
                        break;
        default:        alert('No se ha ingresado una marca valida, se volvera al menu principal');
                        break;
    }
}



do{
    let selec = prompt('Ingrese una de las siguientes opciones:\n1. Cotizar impresora.\n2. Buscar stock de una impresora\n3. Salir del menu');
    switch(selec){
        case '1':   cotizarImpresora();
                    break;
        case '2':   verTicket();
                    break;
        default:    alert('La opcion seleccionada no es correcta, vuelva a introducir una opcion valida');
                    break;
    }
}while(selec != 3);
