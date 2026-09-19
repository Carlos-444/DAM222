function listarPedidos() {

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let lista = document.getElementById("listaPedidos");

    lista.innerHTML = "";

    for (let i = 0; i < pedidos.length; i++) {

        if (pedidos[i].estado != "Pagado") {

            let productos = "";

            for (let j = 0; j < pedidos[i].productos.length; j++) {

                productos +=
                    "<li>" +
                    pedidos[i].productos[j].nombre +
                    "</li>";
            }

            lista.innerHTML +=
                "<div class='pedido'>" +

                "<h3>Pedido #" + pedidos[i].id + "</h3>" +

                "<ul>" +
                productos +
                "</ul>" +

                "<p>Estado: " +
                pedidos[i].estado +
                "</p>" +

                "<button onclick='prepararPedido(" + i + ")'>" +
                "Preparando" +
                "</button>" +

                "<button onclick='pedidoListo(" + i + ")'>" +
                "Listo" +
                "</button>" +

                "</div>";
        }
    }
}




function prepararPedido(posicion) {

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos[posicion].estado = "Preparando";

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    listarPedidos();
}



function pedidoListo(posicion) {

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos[posicion].estado = "Listo";

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    listarPedidos();
}


listarPedidos();