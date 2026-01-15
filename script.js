// Arreglo de datos del catalogo
var stock = [
    { id: 101, titulo: "Laptop Gamer X", precio: 12500, img: "img/laptop.jpg" },
    { id: 102, titulo: "Mouse Optico", precio: 350, img: "img/mouse.jpg" },
    { id: 103, titulo: "Teclado Mecanico", precio: 850, img: "img/teclado.jpg" },
    { id: 104, titulo: "Audifonos Pro", precio: 1200, img: "img/audifonos.jpg" }
];

// Carrito de compras temporal
var carrito = [];

// Funcion para cambiar entre las "pestañas"
function cambiarSeccion(nombreSec) {
    console.log("Cambiando a: " + nombreSec);
    
    // Ocultamos todas las secciones
    var secciones = document.getElementsByClassName('seccion');
    for(var i = 0; i < secciones.length; i++){
        secciones[i].style.display = 'none';
    }
    
    // Mostramos la que queremos
    document.getElementById('sec-' + nombreSec).style.display = 'block';
}

// Cargar los productos al inicio
function renderTienda() {
    var divLista = document.getElementById('lista-prods');
    divLista.innerHTML = ""; // Limpiar

    for(var i=0; i < stock.length; i++) {
        var p = stock[i];
        divLista.innerHTML += `
            <div class="item-card">
                <img src="${p.img}" alt="prod">
                <h4>${p.titulo}</h4>
                <p>Precio: $${p.precio}</p>
                <button class="btn-add-car" onclick="agregarAlCarro(${p.id})">Agregar</button>
            </div>
        `;
    }
}

function agregarAlCarro(idProd) {
    // Buscar producto por ID
    for(var j=0; j < stock.length; j++) {
        if(stock[j].id == idProd) {
            carrito.push(stock[j]);
            break;
        }
    }
    
    // Actualizar numero en el menu
    document.getElementById('num-items').innerText = carrito.length;
    console.log("Producto agregado...");
}

function verCarrito() {
    var modal = document.getElementById('modalCarrito');
    var listaHtml = document.getElementById('items-carrito');
    var totalTxt = document.getElementById('total-monto');
    
    listaHtml.innerHTML = "";
    var cuenta = 0;

    if(carrito.length == 0) {
        listaHtml.innerHTML = "<p>El carrito esta vacio.</p>";
    } else {
        for(var k=0; k < carrito.length; k++) {
            cuenta += carrito[k].precio;
            listaHtml.innerHTML += `
                <div style="border-bottom:1px solid #ccc; padding:5px 0;">
                    ${carrito[k].titulo} - <b>$${carrito[k].precio}</b>
                </div>
            `;
        }
    }
    
    totalTxt.innerText = cuenta;
    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById('modalCarrito').style.display = "none";
}

// Iniciar app
window.onload = function() {
    renderTienda();
    console.log("App cargada correctamente.");
};