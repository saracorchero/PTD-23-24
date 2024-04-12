function concatenar () {
    let cadena1 = document.getElementById("u-l-cad1").value;
    let cadena2 = document.getElementById("u-l-cad2").value;
    let resultado = cadena1 + cadena2;
    document.getElementById("result-u-l").innerHTML = resultado
}

function longitud () {
    let cadena1 = document.getElementById("u-r-cad1").value;
    let resultado = cadena1.length
    document.getElementById("result-u-r").innerHTML = resultado
}

function reemplazar () {
    let cadena1 = document.getElementById("d-l-cad1").value;
    let subcadena1 = document.getElementById("d-l-subcad1").value;
    let subcadena2 = document.getElementById("d-l-subcad2").value;
    let resultado = cadena1.replace(subcadena1,subcadena2)
    document.getElementById("result-d-l").innerHTML = resultado
}

function dividir () {
    let cadena = document.getElementById("d-r-cad1").value;
    let separador = document.getElementById("d-r-cad2").value;
    let resultado = cadena.split(separador)
    document.getElementById("result-d-r").innerHTML = resultado
}
