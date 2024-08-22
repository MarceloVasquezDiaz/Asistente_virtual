// Menú inicial
function menuInicial(){
    let key; //se vuelve null
    let valido = false

    while (!valido) {
    key = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. \nEstoy aquí para ayudarte en lo que necesites. \nEscribe el número de la opción que buscas: \n1.- Boletas y pagos. \n2.- Señal y llamadas. \n3.- Oferta comercial. \n4.- Otras consultas.")
    key = parseInt(key)

    if(isNaN(key) || key<1 || key>4){
        alert('Ingresa un número válido: 1, 2, 3 o 4.')
        } else { 
            valido = true
        }
    } 
    switch (key) {
        case 1:
            boletasPagos();
            break;
        case 2:
            senalLlamada();
            break;
        case 3:
            ofertaComercial();
            break;
        case 4:
            otraConsulta();
            break;  
    }
}

// Boletas y pagos
function boletasPagos(){
    key = prompt("Selecciones una opción: \n1.- Ver boleta. \n2.- Pagar cuenta. \n0.- Volver al menú anterior.")
    key = parseInt(key)
    switch (key) {
        case 1:
            alert("Haga clic aquí para descargar su boleta.")
            otraAccion()
            break;
        case 2:
            alert("Usted está siendo transferido. Espere por favor...")
            otraAccion()
            break;
        case 0:
            menuInicial()
            break;
        default:
            alert('La opción ingresada no es válida. Vuelva a intentarlo.')
            boletasPagos()
            break;
    }
}
// Señal y llamada
function senalLlamada(){
    key = prompt("Selecciones una opción: \n1.- Problemas con la señal. \n2.- Problemas con las llamadas. \n0.- Volver al menú anterior.")
    key = parseInt(key)
    switch (key) {
        case 1:
            solicitud = prompt("A continuación escriba su solicitud.")
            alert("Estimado usuario, su solicitud: '" + solicitud + "' Ha sido enviada con éxito. Pronto será contactado por uno de nuestro ejecutivos.")
            otraAccion()
            break;
        case 2:
            solicitud = prompt("A continuación escriba su solicitud.")
            alert("Estimado usuario, su solicitud: '" + solicitud + "' Ha sido enviada con éxito. Pronto será contactado por uno de nuestro ejecutivos.")
            otraAccion()
            break;
        case 0:
            menuInicial()
            break;
        default:
            alert('La opción ingresada no es válida. Vuelva a intentarlo.')
            senalLlamada()
            break;
    }
}
// Oferta comercial
function ofertaComercial(){
    key = prompt("¡Mentel tiene una oferta acorde a sus necesidades! \nPara conocer más información y ser asesorado personalmente por un ejecutivo escriba 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'. \n0.- Volver al menú anterior.")
    key = key.toUpperCase();
    switch (key) {
        case 'SI':
        case 'SÍ':
            alert("Un ejecutivo contactará con usted.")
            otraAccion()
            break;
        case 'No':
            alert("Gracias por preferir nuestros servicios.")
            otraAccion()
            break;
        case 0:
            menuInicial()
            break;
        default:
            alert('La opción ingresada no es válida. Vuelva a intentarlo.')
            ofertaComercial()
            break;
    }
}

// Otras consultas
function otraConsulta(){
    consulta = prompt("A continuación escriba su consulta. ");
    alert("Estimado usuario, su consulta: '" + consulta + "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestro ejecutivos.");
    otraAccion();
}

// Desea realizar otra acción
function otraAccion(){
    key = prompt('Desea realizar otra acción. \n1.- Sí \n2.- No')
    key = parseInt(key);
    switch (key) {
        case 1:
            menuInicial()
            break;
        case 2:
            alert("Gracias por preferir nuestros servicios.")
            break;
        default:
            alert('La opción ingresada no es válida.')
            otraAccion();
            break;
    }
}

menuInicial();