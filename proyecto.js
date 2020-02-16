//variables
var nombreCompleto = document.getElementById("nombre")

var conyuge = document.getElementById("conyuge")

var hijos = document.getElementById("hijos")

var boton = document.getElementById("boton")
var botonImprimir = document.getElementById("btnImprimir")
var botonRehacer = document.getElementById("rehacer")

const precioBase = 250;
var comision = precioBase * 0.30;
var recargos = 0;
var edad = 0
var recargoEdad = 0;
var recargoPareja = 0
var recargoHijos = 0


//botones
conyuge.addEventListener('click', parejaSi)
hijos.addEventListener("click", hijosSi)
boton.addEventListener('click', Total) 
botonImprimir.addEventListener("click", imprimirDocumento)
botonRehacer.addEventListener("click", recargarPagina)
boton.addEventListener('click', Total) 

// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.

// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios


//FUNCIONES
function Total(){
    
    calcularEdad()
    parejaSi()
    hijosSi()
    
    recargos = recargoPareja + recargoEdad + recargoHijos
    totalPagar = precioBase + comision + recargos

    document.getElementById("resultados").style.display = "flex"
    document.getElementById("marcaSeguro").style.visibility = "visible"
    document.getElementById("nombreUsuario").innerHTML = "Cotización para " + nombreCompleto.value
    document.getElementById("saludo").style.visibility = "visible"
    document.getElementById("dolares").style.visibility = "visible"

    document.getElementById("cargos").innerHTML = "Cargos del seguro"
    document.getElementById("total").innerHTML = "&nbsp;&nbsp; Totales"

    document.getElementById("comision").innerHTML = "Comision"
    document.getElementById("comisionNumber").innerHTML = comision

    document.getElementById("cargonormal").innerHTML = "Precio base del seguro"
    document.getElementById("cargonormalNumber").innerHTML = precioBase

    document.getElementById("cargoedad").innerHTML = "Cargo por edad"
    document.getElementById("cargoedadNumber").innerHTML = recargoEdad

    document.getElementById("cargopareja").innerHTML = "Cargo por pareja"
    document.getElementById("cargoparejaNumber").innerHTML = recargoPareja

    document.getElementById("cargohijos").innerHTML = "Cargo por hijos"
    document.getElementById("cargohijosNumber").innerHTML = recargoHijos + "<hr>"

    document.getElementById("totalapagar").innerHTML = "Total a pagar"
    document.getElementById("totalapagarNumber").innerHTML = totalPagar

    document.getElementById("btnImprimir").style.visibility = "visible"
    document.getElementById("rehacer").style.visibility = "visible"
}

//FUNCION PARA CALCULAR LA EDAD 
function calcularEdad(){
    var fechaNacimiento = document.getElementById("fecha").value
    var nacimiento = new Date(fechaNacimiento)
    var ahora = new Date()
    edad = ahora.getFullYear() - nacimiento.getFullYear()
    
    if(fechaNacimiento == ""){
        alert("Por favor ingrese todos los datos")
        recargarPagina()
    }
        else{
    if (edad >= 18 && edad < 65){
            calcularRecargoEdad()
    }else{
        if(edad < 18){
        alert("Lo sentimos, no te podemos asegurar porque eres menor de edad")
            recargarPagina()
        }
        else if(edad > 65){
            alert("Lo sentimos, no te podemos asegurar porque eres mayor de 65 años")
            recargarPagina()      
            }
        }
    }
}

//FUNCION PARA CALCULAR EL RECARGO POR EDAD DEL USUARIO
function calcularRecargoEdad(){   
        if(edad < 21){
            recargoEdad = 0;
        }
        else if(edad >= 21 && edad <=25){
            recargoEdad = precioBase * 0.01
        }
        else if(edad >=26 && edad <= 30){
            recargoEdad = precioBase * 0.02
        }
        else if(edad >=31 && edad <= 40){
            recargoEdad = precioBase * 0.05
        }
        else if(edad >=41 && edad <= 50) {
            recargoEdad = precioBase * 0.08
        }
        else if(edad >=51 && edad <=65 ){
            recargoEdad = precioBase * 0.12
        }
}
// FUNCION PARA CONFIRMAR SI TIENE PAREJA
function parejaSi(){
    if(conyuge.checked){
        document.getElementById("pareja").disabled = false
        calcularEdadPareja()
    }else{
        document.getElementById("pareja").disabled = true
    }
}
//fUNCION PARA CALCULAR EL RECARGO POR LA EDAD DE LA PAREJA
function calcularEdadPareja(){
    var edadPareja = parseInt(document.getElementById("pareja").value)
    if(edadPareja < 30){
        recargoPareja = 0
    }
    else if(edadPareja >= 30 && edadPareja < 40){
        recargoPareja = precioBase * 0.02
    }
    else if(edadPareja >=40 && edadPareja < 50){
        recargoPareja = precioBase * 0.03
    }
    else if(edadPareja >=50 && edadPareja < 70){
        recargoPareja = precioBase * 0.05
    }
}
//FUNCION PARA SABER SI TIENE HIJOS
function hijosSi(){
    if(hijos.checked){
        document.getElementById("children").disabled = false
        recargoHijosSi()
    }else{
        document.getElementById("children").disabled = true
    }
}
//FUNCION PARA CALCULAR EL RECARGO POR NUMERO DE HIJOS
function recargoHijosSi(){
    var cantidadHijos = parseInt(document.getElementById("children").value)
    recargoHijos = (precioBase * 0.01) * cantidadHijos
}
//FUNCION PARA IMPRIMIR EL DOCUMENTO
function imprimirDocumento(){
    document.getElementById("btnImprimir").style.visibility = "hidden"
    document.getElementById("rehacer").style.visibility = "hidden"
    var ficha = document.getElementById("resultados").innerHTML
    document.body.innerHTML = ficha
    var contenido = document.body.innerHTML
    window.print()
    document.body.innerHTML = contenido 

}
//FUNCION PARA RECARGAR LA PAGINA Y VOLVER A INICIAR
function recargarPagina(){
    window.location.reload()
    document.getElementById("nombre").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("conyuge").checked = false
    document.getElementById("hijos").checked = false
    document.getElementById("pareja").disabled = true
    document.getElementById("children").disabled = true


}



