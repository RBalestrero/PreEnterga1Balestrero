const cotizar = precio => {
    let cupon = prompt('Si tiene codigo promocional coloquelo, sino ponga aceptar para continuar');
    if(cupon === 'BLACKFRIDAY')
        alert(`Precio de la impresora: $${precio}\nImpuestos: $${precio*0.21} (IVA % 21)\nDescuentos: -$${precio*0.15} (CUPON -% 15 BLACKFRIDAY)\n\nPrecio final: $${precio - (precio * 0.15) + (precio * 0.21)}`);
    else if(cupon === 'MOTHERSDAY')
        alert(`Precio de la impresora: $${precio}\nImpuestos: $${precio*0.21} (IVA % 21)\nDescuentos: -$${precio*0.25} (CUPON -% 25 DIA DE LA MADRE)\n\nPrecio final: $${precio - (precio * 0.25) + (precio * 0.21)}`);
    else if(cupon)
        alert('El cupon ingresado no es valido');
    else if(!cupon)
        alert(`Precio de la impresora: $${precio}\nImpuestos: $${precio*0.21} (IVA % 21)\nDescuentos: -\n\nPrecio final: $${precio + (precio * 0.21)}`);
}

const cotizarImpresora = () => {
    const pZebra = 3500;
    const pHid = 1300;
    const pEpson = 2400;
    const pEntrust = 5000;
    let marca = prompt('Ingrese la marca de la impresora que desea cotizar: Zebra, HID, Epson o Entrust').toLowerCase();
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

const enviarConsulta = () => {
    let confirmar
    do{
        let nombre = prompt('Ingrese su nombre y apellido');
        let mail = prompt('Ingrese un mail de contacto');
        let cel = prompt('Ingrese un numero de celular de contacto');
        let consulta = prompt('Detalle brevemente su consulta');
        confirmar = prompt(`Por favor verifique los datos ingresados\nNombre: ${nombre}\nMail: ${mail}\nCelular: ${cel}\nConsulta: ${consulta}\n\n1- Confirmar | 2- Modificar`);        
    }while(confirmar === '2');
    alert('Sus datos fueron cargador con exito, a la brevedad un representante se estara comunicando con usted');   
}

let selec;

do{
    selec = Number(prompt('Ingrese una de las siguientes opciones:\n1. Cotizar impresora.\n2. Enviar una consulta\n3. Salir del menu'));
    switch(selec){
        case 1:     cotizarImpresora();
                    break;
        case 2:     enviarConsulta();
                    break;
        case 3:     break;
        default:    alert('La opcion seleccionada no es correcta, vuelva a introducir una opcion valida');
                    break;
    }
}while(selec != 3);
