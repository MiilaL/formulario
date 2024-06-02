function iniciarCarga() {}


document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.getElementById("intro");
    const datosNacimientoSection = document.getElementById("datos-nacimiento");
    const validacionDatosSection = document.getElementById("validacion-datos");
    const resultadosSection = document.getElementById("resultados");
    const queEresSection = document.getElementById("queEres")

    const entryButton = document.getElementById("entry");
    const validateButton = document.getElementById("validate");
    const correctButton = document.getElementById("boton-correcto-nac");
    const botonDescubreQueEresButton = document.getElementById("botonDescubreQueEres")

    entryButton.addEventListener("click", function() {
        introSection.style.display = "none";
        datosNacimientoSection.style.display = "block";
    });

    validateButton.addEventListener("click", function() {
        datosNacimientoSection.style.display = "none";
        validacionDatosSection.style.display = "block";
    });

    correctButton.addEventListener("click", function() {
        validacionDatosSection.style.display = "none";
        resultadosSection.style.display = "block";
    });

    botonDescubreQueEresButton.addEventListener("click", function(){
        resultadosSection.style.display = "none";
        queEresSection.style.display = "block";
    })
});

var nombreIngresado = ""; // Variable global para almacenar el nombre ingresado


function displayName2() {
    var name = document.getElementById("name").value;
    var displayName2Element = document.getElementById("displayName2");

    if (!name) {
        alert("Por favor, ingresa tu nombre.");
    } else {
        nombreIngresado = name; // Guarda el nombre ingresado
        displayName2Element.innerHTML = "¡Hola, " + nombreIngresado + "! Encantado de conocerte.";
        // Habilitar los campos de día, mes y año
        document.getElementById("numeros-dia").removeAttribute("disabled");
        document.getElementById("numeros-mes").removeAttribute("disabled");
        document.getElementById("numeros-año").removeAttribute("disabled");
    }
}

function verificarDia(valor) {
    var numerosDiaInput = document.getElementById("numeros-dia");
    if (!valor.match(/^(0?[1-9]|[12][0-9]|3[01])$/)) {
        numerosDiaInput.value = ""; // Limpiar el valor si no coincide con el patrón
    }
}

function verificarMes(valor) {
    var numerosMesInput = document.getElementById("numeros-mes");
    if (!valor.match(/^(0?[1-9]|1[0-2])$/)) {
        numerosMesInput.value = ""; // Limpiar el valor si no coincide con el patrón
    }
}

function verificarAño() {
    var inputAño = document.getElementById("numeros-año");
    var año = parseInt(inputAño.value);
    if (año < 1920 || año > 2024) {
        alert("Por favor, ingresa un año entre 1920 y 2024.");
        inputAño.value = ""; // Limpiar el valor si está fuera del rango
    }
}

function mostrarFechaNacimiento() {
    var dia = document.getElementById("numeros-dia").value;
    var mes = document.getElementById("numeros-mes").value;
    var año = document.getElementById("numeros-año").value;

    var fechaNacimiento = dia + "-" + mes + "-" + año;
    document.getElementById("fecha-nacimieto-completa").innerHTML = nombreIngresado + ", tu fecha de nacimiento es: " + fechaNacimiento;
}

function reiniciarPagina() {
    // Mostrar el mensaje
    alert("Los siento, intentemos nuevamente");
    // Reiniciar la página
    window.location.reload();
}

function sumarDigitos(numero) {
    let suma = 0;
    while (numero > 0) {
        suma += numero % 10;
        numero = Math.floor(numero / 10);
    }
    return suma;
}

// Función para mostrar el mensaje siguiente paso
function mostrarMensajeSiguientePaso() {
    var dia = document.getElementById("numeros-dia").value;
    var mes = document.getElementById("numeros-mes").value;
    var año = document.getElementById("numeros-año").value;

    // Mostrar fecha de nacimiento para tenerlo en cuenta
    let comentarioFechaNacimiento = dia + " - " + mes + " - " + año;

    // Suma de los dígitos para cada campo
    var sumaDia = sumarDigitos(dia);
    var sumaMes = sumarDigitos(mes);
    var sumaAño = sumarDigitos(año);

    // Identificar el número menor y el número máximo
    var numeros = [sumaDia, sumaMes, sumaAño];
    var numeroMenor = Math.min(...numeros);
    var numeroMaximo = Math.max(...numeros);

    // Identificar el número intermedio
    var numerosOrdenados = numeros.sort((a, b) => a - b);
    var numeroIntermedio = numerosOrdenados[1];

    // Variable para la suma de los dígitos del número intermedio
    var sumaDigitosIntermedio = sumarDigitos(numeroIntermedio);

    // Variable para la suma de los dígitos del número intermedio más el número mínimo
    var resultadoSumaDigIntermediosMasMinimo = sumaDigitosIntermedio + numeroMenor;

    // Variable para la suma de los dígitos del número máximo
    var sumaDigitosNumeroMayor = sumarDigitos(numeroMaximo);

    // Variable para la suma total
    var sumaTotal = sumaDigitosNumeroMayor + resultadoSumaDigIntermediosMasMinimo;

    var soloDia = parseInt(document.getElementById("numeros-dia").value);
    var soloMes = parseInt(document.getElementById("numeros-mes").value);
    var año = parseInt(document.getElementById("numeros-año").value);
    var sumaAño = sumarDigitos(año);

    var numMaximo = Math.max(soloDia, soloMes, sumaAño);
    var numMinimo = Math.min(soloDia, soloMes, sumaAño);
    var numIntermedio = soloDia + soloMes + sumaAño - numMaximo - numMinimo;

    var seCompletoNumMaximo, seCompletoNumMin, seCompletoNumInter;

    if (numMaximo === soloDia) {
        seCompletoNumMaximo = soloDia;
    } else if (numMaximo === soloMes) {
        seCompletoNumMaximo = soloMes;
    } else {
        seCompletoNumMaximo = sumarDigitos(año);
    }

    if (numMinimo === soloDia) {
        seCompletoNumMin = soloDia;
    } else if (numMinimo === soloMes) {
        seCompletoNumMin = soloMes;
    } else {
        seCompletoNumMin = sumarDigitos(año);
    }

    if (numIntermedio === soloDia) {
        seCompletoNumInter = soloDia;
    } else if (numIntermedio === soloMes) {
        seCompletoNumInter = soloMes;
    } else {
        seCompletoNumInter = sumarDigitos(año);
    }

    //cuando se completa totalmente
    var cumple = seCompletoNumMaximo + 1;

    // Mensaje con los resultados
    var mensaje = //"La Suma de los dígitos de tu día de nacimiento es: " + sumaDia + "<br>" +
        //"La Suma de los dígitos de tu mes de nacimiento es: " + sumaMes + "<br>" +
        //"La Suma de los dígitos de tu año de nacimiento es: " + sumaAño + "<br>"+
        "Tu fecha de nacimeinto es: " + comentarioFechaNacimiento + "<br>" +
        "Estos son 3 numeros importantes en tu vida: " +"<br>"+
        dia + "<br>" +
        mes + "<br>" +
        sumaAño + "<br>"

    var mensajeElement = document.getElementById("mensaje-siguiente-paso");
    mensajeElement.innerHTML = mensaje;

    // Nuevo mensaje con el número mínimo y el nombre
    var nombre = document.getElementById("name").value;
    var mensajeMinimo = nombre + " de los 0 años a los " + seCompletoNumMin + " años fuiste " + numeroMenor;
    var mensajeMinimoElement = document.createElement("p");
    mensajeMinimoElement.textContent = mensajeMinimo;
    mensajeElement.appendChild(mensajeMinimoElement);

    // Nuevo mensaje sobre el número intermedio
    var mensajeIntermedio = "De los " + seCompletoNumMin + " años hasta los " + seCompletoNumInter + " años, como pasaste por " + numeroIntermedio + " quedaste " + resultadoSumaDigIntermediosMasMinimo;
    var mensajeIntermedioElement = document.createElement("p");
    mensajeIntermedioElement.textContent = mensajeIntermedio;
    mensajeElement.appendChild(mensajeIntermedioElement);

    // Nuevo mensaje sobre el número máximo
    var mensajeMaximo = "De los " + seCompletoNumInter + " años hasta los " + seCompletoNumMaximo + " años, fuiste " + resultadoSumaDigIntermediosMasMinimo + "," + " Como pasaste por " + numeroMaximo + " quedaste " + sumaTotal;
    var mensajeMaximoElement = document.createElement("p");
    mensajeMaximoElement.textContent = mensajeMaximo;
    mensajeElement.appendChild(mensajeMaximoElement);

    var mensajeFinal = nombre + " te completas  como " + sumaTotal + " cuando cumplas " + cumple + " años" 
    var mensajeFinalElement = document.createElement("p");
    mensajeFinalElement.textContent = mensajeFinal;
    mensajeElement.appendChild(mensajeFinalElement)

    var mensajeAdicional =" Aun te falta algo para descubir, ¿quieres saber que significa ese " + sumaTotal + "?" 
    var mensajeAdicionalElement = document.createElement("p");
    mensajeAdicionalElement.textContent = mensajeAdicional
    mensajeElement.appendChild(mensajeAdicionalElement)
}

function queCosaEres (){
    var dia = document.getElementById("numeros-dia").value;
    var mes = document.getElementById("numeros-mes").value;
    var año = document.getElementById("numeros-año").value;

    // Mostrar fecha de nacimiento para tenerlo en cuenta
    let comentarioFechaNacimiento = dia + " - " + mes + " - " + año;

    // Suma de los dígitos para cada campo
    var sumaDia = sumarDigitos(dia);
    var sumaMes = sumarDigitos(mes);
    var sumaAño = sumarDigitos(año);

    // Identificar el número menor y el número máximo
    var numeros = [sumaDia, sumaMes, sumaAño];
    var numeroMenor = Math.min(...numeros);
    var numeroMaximo = Math.max(...numeros);

    // Identificar el número intermedio
    var numerosOrdenados = numeros.sort((a, b) => a - b);
    var numeroIntermedio = numerosOrdenados[1];

    // Variable para la suma de los dígitos del número intermedio
    var sumaDigitosIntermedio = sumarDigitos(numeroIntermedio);

    // Variable para la suma de los dígitos del número intermedio más el número mínimo
    var resultadoSumaDigIntermediosMasMinimo = sumaDigitosIntermedio + numeroMenor;

    // Variable para la suma de los dígitos del número máximo
    var sumaDigitosNumeroMayor = sumarDigitos(numeroMaximo);

    // Variable para la suma total
    var sumaTotal = sumaDigitosNumeroMayor + resultadoSumaDigIntermediosMasMinimo;

    // Condicionales para saber si es un  cristal- indigo - humano - animal 
    if (sumaTotal <=10){
        var mensaje = "Eres un cristal, nivel: "+sumaTotal
    } else if (sumaTotal <=20){
        var mensaje = "Eres un Indigo, nivel: "+sumaTotal
    }else{
        var mensaje = "Eres un humano, nivel: "+sumaTotal
    }

    var mensajeDescubre = document.getElementById("mensajeQueEres");
    mensajeDescubre.innerHTML = mensaje;
    
} 




window.addEventListener("load", iniciarCarga);
