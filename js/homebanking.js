//Declaración de variables
const nombreUsuario = "Héctor Allende";
let saldoCuenta = 5000;
let limiteExtraccion = 2000;
const precioDeAgua = 350;
const precioDeTelefono = 425;
const precioDeLuz = 210;
const precioDeInternet = 570;
const cuentaAmiga1 = 1234567;
const cuentaAmiga2 = 7654321;
const codigoDeCuenta = "0901";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar

function sumarDinero (dinero){
     saldoCuenta += dinero;
}

function restarDinero  (dinero){
    saldoCuenta -= dinero;

}


function cambiarLimiteDeExtraccion() {
    limiteExtraccion = parseInt(prompt("Ingrese nuevo limite de extracción:"));
        if (isNaN(limiteExtraccion ) || limiteExtraccion<0 ){


        alert ("Ingrese su nuevo límite de extraccion correctamente ");
        }else{
        actualizarLimiteEnPantalla();
        alert ("su nuevo límite de extracción es: $"+ limiteExtraccion);
    } 
}


function extraerDinero() {
    let retiroDinero =  parseInt(prompt("Ingrese el monto a Retirar"));
    const saldoAnterior = saldoCuenta;
        if (isNaN(retiroDinero)|| retiroDinero < 0){
         alert ("Ingrese un monto a extraer correcto");
      } else if (retiroDinero > saldoCuenta){
         alert ("No hay saldo disponible para retirar esa cantidad de dinero");
      } else if (retiroDinero > limiteExtraccion){
         alert ("Has superado limite de extracción, ingresa un valor menor o igual a: $" + limiteExtraccion);
      } else if (retiroDinero %100 !==0 ){
         alert ("Solo puedes extraer billetes de $ 100");
      } else {
         restarDinero (retiroDinero);
         actualizarSaldoEnPantalla();
         alert ("Has Retirado: $"+ retiroDinero + "\n" +
         "Saldo Anterior: $" + saldoAnterior +  "\n" 
          + "Saldo Actual: $"+ saldoCuenta);
      }
    }


function depositarDinero() {
    let deposito = parseInt(prompt("Ingrese el monto a Depositar"));
    const saldoAnterior  = saldoCuenta;
   
    if (isNaN(deposito)|| deposito < 0){
     alert ("Ingrese un monto a depositar correcto");
     
   } else{
      sumarDinero (deposito);
      actualizarSaldoEnPantalla();
      alert ("Has Depositado: $"+ deposito + "\n" +
      "Saldo Anterior: $" + saldoAnterior +  "\n" 
      + "Saldo Actual: $"+ saldoCuenta);
   }

}

function pagarServicio() {
    let servicioAPagar = parseInt (prompt("Ingrese el numero del servicio que desea pagar:" + "\n" +"1- Agua" + "\n " + "2- Luz" + "\n" +"3- Internet"+ "\n" +"4- Teléfono" + "\n" ));
     const saldoAnterior  = saldoCuenta;

     if (isNaN(servicioAPagar)|| servicioAPagar<0){
        alert ("ingrese el número de servicio que desea abonar");
     } else {
         switch (servicioAPagar){
             case 1: 
              if  (precioDeAgua > saldoCuenta){
              alert('Usted no posee saldo suficiente');
              } else {
               saldoCuenta -=precioDeAgua;
               alert('El servicio de Agua ha sido abonado correctamente'+ "\n" +
                "Saldo Anterior: $" + saldoAnterior + "\n" +
                "Dinero Descontado: $" + precioDeAgua +  "\n" +
                "Saldo Actual: $"+ saldoCuenta); 
              }
                break;

                case 2: 
              if  (precioDeLuz > saldoCuenta){
              alert('Usted no posee saldo suficiente');
              } else {
               saldoCuenta -=precioDeLuz;
               alert('El servicio de Luz ha sido abonado correctamente'+ "\n" +
                "Saldo Anterior: $" + saldoAnterior + "\n" +
                "Dinero Descontado: $" + precioDeLuz +  "\n" +
                "Saldo Actual: $"+ saldoCuenta); 
              }
                break;

                case 3: 
              if  (precioDeInternet > saldoCuenta){
              alert('Usted no posee saldo suficiente');
              } else {
               saldoCuenta -=precioDeInternet;
               alert('El servicio de Internet ha sido abonado correctamente'+ "\n" +
                "Saldo Anterior: $" + saldoAnterior + "\n" +
                "Dinero Descontado: $" + precioDeInternet +  "\n" +
                "Saldo Actual: $"+ saldoCuenta); 
              }
                break;

                case 4: 
              if  (precioDeTelefono > saldoCuenta){
              alert('Usted no posee saldo suficiente');
              } else {
               saldoCuenta -=precioDeTelefono;
               alert('El servicio de Teléfono ha sido abonado correctamente'+ "\n" +
                "Saldo Anterior: $" + saldoAnterior + "\n" +
                "Dinero Descontado: $" + precioDeTelefono +  "\n" +
                "Saldo Actual: $"+ saldoCuenta); 
              }
                break;

                default:
                    alert('Servicio a pagar no disponible');
     }
     actualizarSaldoEnPantalla();
    }

}

function transferirDinero() {
    const montoATransferir = parseInt(prompt("Ingrese el monto que desea transferir"));
    if (isNaN(montoATransferir)|| montoATransferir<0) {
        alert("Debe ingresar el monto que desea transferir");
    }
    else if (montoATransferir > saldoCuenta) {
        alert("No puede transferir esa cantidad de dinero");
    }
    else {
        let cuentaATrasnferir = parseInt(prompt("Ingrese el número de cuenta a la cual desea transferir:"));
        switch (cuentaATrasnferir) {
            case 1234567:
                saldoCuenta -= montoATransferir;
                alert("Se han transferido: $" + montoATransferir + "\n" + "A la cuenta destino : 1234567");
                break;
            case 7654321:
                saldoCuenta -= montoATransferir;
                alert("Se han transferido: $" + montoATransferir + "\n" + "A la cuenta destino: 7654321");
                break;
            default:
                alert('Solo puede trasferir dinero a una cuenta amiga');
        }
        actualizarSaldoEnPantalla();
    }
}

function iniciarSesion() {
    let ingreseCodigo = prompt("Ingrese codigo de seguridad: ");
if (ingreseCodigo != codigoDeCuenta){
    alert("Ingresaste un código incorrecto" + "\n" + "Por cuestiones de seguridad tu dinero ha sido retenido");
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();

}  else {
   alert ("Bienvenido/a: " + nombreUsuario + " ya puedes comenzar a realizar tus operaciones")
}
cargarNombreEnPantalla()
}




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}