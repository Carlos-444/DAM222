let productos = [
    { id: 1, nombre: "Cafe", precio: 30, tipo: "Cafe" },
    { id: 2, nombre: "Capuchino", precio: 45, tipo: "Cafe" },
    { id: 3, nombre: "Sandwich", precio: 50, tipo: "comida" },
    { id: 4, nombre: "Pastel", precio: 60, tipo: "postre" },
    { id: 5, nombre: "Tarta", precio: 70, tipo: "postre" },
    { id: 6, nombre: "Ensalada", precio: 40, tipo: "comida" }
];

// Función para mostrar los productos en la página
function mostrarProductos() {
    let texto = "";

    productos.forEach(function(producto) {
        texto += `
            <div class="producto">
                ${producto.nombre} - $${producto.precio}

                <button onclick="editarProducto(${producto.id})">
                    Editar
                </button>

                <button onclick="eliminarProducto(${producto.id})">
                    Eliminar
                </button>
            </div>
        `;
    });

    document.getElementById("productos").innerHTML = texto;
}

// Función para agregar un nuevo producto
function agregarProducto() {
    let nombre = document.getElementById("nombre").value;
    let precio = Number(document.getElementById("precio").value);

    let producto = {
        id: Date.now(),
        nombre: nombre,
        precio: precio
    };

    productos.push(producto);

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";

    mostrarProductos();
}


function editarProducto(id) {
    let producto = productos.find(function(producto) {
        return producto.id == id;
    });

    let nuevoNombre = prompt("Nuevo nombre", producto.nombre);
    let nuevoPrecio = prompt("Nuevo precio", producto.precio);

    producto.nombre = nuevoNombre;
    producto.precio = Number(nuevoPrecio);

    mostrarProductos();
}

function eliminarProducto(id) {
    productos = productos.filter(function(producto) {
        return producto.id != id;
    });

    mostrarProductos();
}

function mostrarPedidos() {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let texto = "";

    pedidos.forEach(function(pedido) {
        if (pedido.estado == "En cocina" || pedido.estado == "Listo") {
            texto += `
                <div class="pedido">
                    <p>Pedido ${pedido.id}</p>
                    <p>Total: $${pedido.total}</p>
                    <p>Estado: ${pedido.estado}</p>

                    <button onclick="pedidoListo(${pedido.id})">
                        Pedido listo
                    </button>
                </div>
            `;
        }
    });

    document.getElementById("pedidos").innerHTML = texto;
}

//
function pedidoListo(id) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let pedido = pedidos.find(function(pedido) {
        return pedido.id == id;
    });

    pedido.estado = "Listo";

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    alert("Pedido listo");

    mostrarPedidos();
}

//

const boton = document.getElementById("btn-menu");
const menu = document.getElementById("menu-contenido");

boton.addEventListener("click", () => {
  menu.classList.toggle("oculto");
});


mostrarProductos();
mostrarPedidos();