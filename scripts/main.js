//CATEGORIAS Y PRODUCTOS
//categorias
const Categorias = [{i: 1, nombre: "Cápsulas"},
                    {i: 2, nombre: "Máquinas"}]
//capsulas
const Capsulas = [{i: 1, nombre: "Ristretto Italiano", precio: 13000},
                 {i: 2, nombre: "Colombia", precio: 16000},
                 {i: 3, nombre: "Chiaro", precio: 14500},
                 {i: 4, nombre: "Vaniglia", precio: 15000},
                 {i: 5, nombre: "Buenos Aires Lungo", precio: 14500}]
//maquinas
const Maquinas = [{i: 1, nombre: "Citiz", precio: 368290},
                  {i: 2, nombre: "Gran Lattissima", precio: 755090},
                  {i: 3, nombre: "Aeroccino", precio: 159790}]
//CARRITO
//carrito
const Carrito = [];
//funcion para agregar al carrito
const agregarAlCarrito = (producto, precio, unidades) => {
    Carrito.push({producto: producto, cantidad: unidades, precioTotal: precio*unidades})
    alert(`Se agregó el siguiente producto a tu carrito:\n\n -  -  -  - \n${unidades} - ${producto}\n -  -  -  -`)
    continuarComprando()
    console.log(Carrito)
}
//funcion para mostrar el carrito
function mostrarCarrito(Carrito) {
    if (Carrito.length > 0) {
        let resumen = 'Aqui puedes ver el resumen de tu compra:\n\n'
        let totalCompra = 0
  
        for (let i = 0; i < Carrito.length; i++) {
        const item = Carrito[i];
        resumen += `${item.cantidad} unidad(es) de ${item.producto} - Precio: $${item.precioTotal}\n`;
        totalCompra += item.precioTotal;
        }
        resumen += `\nTotal de la compra: $${totalCompra}`
        alert(resumen)
        // Agregar un mensaje de despedida
        alert('¡Gracias por tu compra!')
    } else {
        alert('No has agregado ningún producto al carrito.')
    }
}
//VALIDACION DE DATOS
//funcion para mostrar error de valor incorrecto
function valorIncorrecto() {
    let iniciar = confirm(`El valor ingresado no es una opcion valida, deseas intentar nuevamente?`)
    if (iniciar == true){
        procesoDeCompra()
    } else {
        alert("Hasta pronto")
    }
}
//INICIO DEL PROGRAMA
//funcion para ingresar a la tienda
function iniciarTienda() {
    iniciar = confirm("Bienvenido\nDeseas ingresar a la tienda?")
    if (iniciar == true){
        procesoDeCompra()
    } else {
        alert("Hasta pronto")
    }
}
//PROCESO DE COMPRA
//funcion para recorrer las categorias
function recorrerCategorias(categoria) {
    let itemsCategorias = Categorias.map(
        (items) => items.i +" - "+items.nombre)
    return (itemsCategorias.join(`\n`))
};
//funcion para recorrer los productos
function recorrerProductos(categoria) {
    let productos = categoria.map(
        (items) => items.i +" - "+items.nombre+" --- $"+items.precio)
        return (productos.join(`\n`))
};
//funcion para realizar la compra
function procesoDeCompra (){
    //mostrar categorias
    let categoria = parseInt(prompt(`¿Que productos deseas comprar?\nIngresa el valor correspondiente a la categoria.\n\n${recorrerCategorias(Categorias)}`))
    //mostrar productos
    if (categoria == 1){
        let producto = parseInt(prompt(`¿Que productos deseas comprar?\nIngresa el valor correspondiente al producto.\n\n${recorrerProductos(Capsulas)}`))
        if (producto == null){
            alert("Hasta pronto")
        } else if (producto > 0 && producto <= Capsulas.length){
            //indicar cantidad
            let unidades = parseInt(prompt("¿Cuantas unidades deseas comprar?"))
            if (unidades == null) {
                alert("Hasta pronto")
            } else if (unidades > 0 && unidades <= 100){
                //agregar al carrito
                agregarAlCarrito(Capsulas[producto-1].nombre, Capsulas[producto-1].precio, unidades)
            } else {
                valorIncorrecto()
            }
        } else {
            valorIncorrecto()
        }
    } else if (categoria === 2){
        let producto = parseInt(prompt(`¿Que productos deseas comprar?\nIngresa el valor correspondiente al producto.\n\n${recorrerProductos(Maquinas)}`))
        if (producto == null){
            alert("Hasta pronto")
        } else if (producto > 0 && producto <= Maquinas.length){
            //indicar cantidad
            let unidades = parseInt(prompt("¿Cuantas unidades deseas comprar?"))
            if (unidades == null){
                alert("Hasta pronto")
            } else if (unidades > 0 && unidades <= 100){
                //agregar al carrito
                agregarAlCarrito(Maquinas[producto-1].nombre, Maquinas[producto-1].precio, unidades)
            } else {
                valorIncorrecto()
            }
        } else {
            valorIncorrecto()}
    } else if (categoria == null){
        alert("Hasta pronto")
    }
    else {
        valorIncorrecto()
    }
}
//funcion para continuar comprando
function continuarComprando(){
    let finalizar = prompt(`Que deseas hacer? \n\n 1 - Continuar comprando\n 2 - Finalizar`)
    if (parseInt(finalizar) === 1) {
        procesoDeCompra()
    } else if (parseInt(finalizar) == 2) {
        mostrarCarrito(Carrito)
    } else {
        continuarComprando()
    }
}
iniciarTienda()

