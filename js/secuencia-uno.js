function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 290.20;
    var euro = 308.70;
    if (document.getElementById("uno").checked) {
        resultado = valore/dolar;
        alert("El cambio de Pesos Argentinos a Dolares es: $" +resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos Argentinos a Euros es: $" +resultado.toFixed(2));
    }
    else {
        alert("Tienes que completar el formulario para poder continuar.");
    }
}
