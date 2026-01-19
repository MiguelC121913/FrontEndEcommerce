// Base de datos local
var inventario = [
    { id: 1, item: "Laptop Profesional", precio: 1500, foto: "img/laptop.jpg" },
    { id: 2, item: "Mouse Gamer RGB", precio: 45, foto: "img/mouse.jpg" },
    { id: 3, item: "Teclado Mecánico", precio: 85, foto: "img/teclado.jpg" },
    { id: 4, item: "Audífonos Studio", precio: 120, foto: "img/audifonos.jpg" }
];

var miCarrito = [];

// Navegación de pestañas
function mostrarSeccion(idDeseado) {
    var bloques = document.getElementsByClassName('modulo-seccion');
    
    for (var i = 0; i < bloques.length; i++) {
        bloques[i].style.display = 'none';
    }
    
    document.getElementById('sec-' + idDeseado).style.display = 'block';
}

// Pintar productos con ALT descriptivo
function cargarProductos() {
    var contenedor = document.getElementById('grid-productos');
    contenedor.innerHTML = ""; // Reset

    for (var i = 0; i < inventario.length; i++) {
        var p = inventario[i];
        contenedor.innerHTML += `
            <div class="tarjeta-prod">
                <img src="${p.foto}" alt="Imagen de ${p.item} disponible en TechStore">
                <h3>${p.item}</h3>
                <p>Precio: <strong>$${p.precio}</strong></p>
                <button class="btn-add" onclick="meterAlCarro(${p.id})">Comprar</button>
            </div>
        `;
    }
}

function meterAlCarro(idBuscado) {
    for (var j = 0; j < inventario.length; j++) {
        if (inventario[j].id === idBuscado) {
            miCarrito.push(inventario[j]);
            break;
        }
    }
    document.getElementById('contador').innerText = miCarrito.length;
}

function abrirCarrito() {
    var modal = document.getElementById('modal-car');
    var listaDiv = document.getElementById('lista-car');
    var txtTotal = document.getElementById('monto-total');
    
    listaDiv.innerHTML = "";
    var suma = 0;

    if (miCarrito.length === 0) {
        listaDiv.innerHTML = "<p>Aún no has elegido productos.</p>";
    } else {
        for (var k = 0; k < miCarrito.length; k++) {
            suma += miCarrito[k].precio;
            listaDiv.innerHTML += `
                <div style="border-bottom:1px dashed #ccc; padding: 10px 0;">
                    ${miCarrito[k].item} - $${miCarrito[k].precio}
                </div>
            `;
        }
    }
    
    txtTotal.innerText = suma;
    modal.style.display = "block";
}

function cerrarCarrito() {
    document.getElementById('modal-car').style.display = "none";
}

// Ejecución inicial
window.onload = function() {
    cargarProductos();
};