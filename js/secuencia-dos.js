console.log("Bienvenido a ByM Nacionales");
let nombre = prompt("Bienvenido A ByM Nacioneles! Ingresa tu nombre por favor");
console.log("el nombre del cliente es " +nombre);

// nacional o extranjera
let moneda = prompt("Hola "+nombre+ " ¿Que vamos a comprar hoy? ¿Monedas Nacionales o Extranjeros?");

// Pesos Nacionales
class Nacionales{
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const nacional1 = new Nacionales(1,"Peso Argentino",100)
const nacional2 = new Nacionales(2,"Australes", 50)
const nacional3 = new Nacionales(3,"Pesos Ley",200)
const nacional4 = new Nacionales(4, "Patacones", 75)

const miNacional = [nacional1,nacional2,nacional3,nacional4]

// Divisa Extranjera

class Extranjera{
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const extranjera1 = new Extranjera(1,"Dolares",280)
const extranjera2 = new Extranjera(2,"Libras", 300)
const extranjera3 = new Extranjera(3,"Euros", 296)
const extranjera4 = new Extranjera(4,"Yen",100)

const miExtranjera = [extranjera1,extranjera2,extranjera3,extranjera4]

///

let cantidadPedidoNacional = 0;
let cantidadPedidoExtranjero = 0;

///

let carrito = []

function realizarPedido(){
    if(moneda.toUpperCase() == "NACIONALES"){
        let opcionUserNacional = parseInt (prompt("Porfavor elige el numero de la DIVISA a comprar: \n1- Peso Argentino\n2-Australes\n3-Pesos Ley\n4-Patacones"));
        console.log(nombre+" Elegiste la Divisa Nacional "+opcionUserNacional);
        const nacionalElegida = miNacional.find (elemento => elemento.id === opcionUserNacional);
        alert("Perfecto!! elegiste la moneda " +nacionalElegida.nombre+".");
        cantidadPedidoNacional = parseInt(prompt("¿Cuanto vas a comprar?"));
        let totalPrecioNacional = cantidadPedidoNacional *nacionalElegida.precio;
        carrito.push(totalPrecioNacional);
        alert("El total de su compra es de $ "+totalPrecioNacional+".");
        console.log(" La compra se realizo efectuosamente y tiene un precio de $ "+totalPrecioNacional);
    }else if(moneda.toUpperCase()== "EXTRANJERA"){
        let opcionUserExtranjera = parseInt(prompt("Por favor elige e numero de la Divisa a comprar: \n1-Dolares\n2-Libras\n3-Euros\n4-Yenes"));
        console.log(nombre+" eligio la opcion "+opcionUserExtranjera);
        const extranjeraElegida = miExtranjera.find (elemento => elemento.id === opcionUserExtranjera);
        alert("Perfecto!! elegiste la divisa " +extranjeraElegida.nombre+ ".");
        cantidadPedidoExtranjero = parseInt(prompt("¿Cuanto vas a Comprar?"));
        let totalPrecioExtrajero = cantidadPedidoExtranjero * extranjeraElegida.precio;
        carrito.push(totalPrecioExtrajero);
        alert("El total de su compra es de $ "+totalPrecioExtrajero+". Pesos Argetinos");
        console.log(" La compra se realizo efectuosamente y tiene un precio de $ "+totalPrecioExtrajero);
    }else{
        alert("Opcion Incorrecta");
    }
}
realizarPedido()
let cuil = prompt("Ingresa tu cuil o cuit por favor");
console.log(cuil);
alert("Pedido realizado con exito, a nombre de: "+nombre+" con cuil: "+cuil+" Por favor, volve al HOME para finalizar");