window.addEventListener("load", cargarTipo);
window.addEventListener("load", iniciar);

var cont = 0;
var cunt = 0;
function iniciar(){
    document.getElementById("tipo").addEventListener("change", cargaTalla);
}

function cargarTipo(){
    let httpRequest = new XMLHttpRequest()
    httpRequest.addEventListener("readystatechange", recibirTipo)
    httpRequest.open("GET", "producto.json")
    httpRequest.send()
}

function cargarTalla(){
    let httpRequest = new XMLHttpRequest()
    httpRequest.addEventListener("readystatechange", recibirTalla)
    httpRequest.open("GET", "producto.json")
    httpRequest.send()
}

function cargarMovil(){
    let httpRequest = new XMLHttpRequest()
    httpRequest.addEventListener("readystatechange", recibirMovil)
    httpRequest.open("GET", "producto.json")
    httpRequest.send()
}

function recibirTipo() {
    let texto = document.getElementById("info")
    if (this.readyState == 4) {
        if (this.status == 200) {
            texto.innerHTML = ""
                let lista = document.getElementById("tipo")
                let list = JSON.parse(this.responseText)
                let tipo = list.articulo;
            for (items of tipo) {
                lista.appendChild(crear(items["descripcion"]))
            }
            texto.innerHTML = ""
        } else if (this.status == 404) {
            texto.innerHTML = "Página no encontrada"
        } else {
            texto.innerHTML = "Error de conexión"
        }
    } else if (this.readyState == 3) {
        texto.innerHTML = "Cargando..."
    }
}

function recibirTalla() {
    let texto = document.getElementById("info")
    if (this.readyState == 4) {
        if (this.status == 200) {
            texto.innerHTML = ""
                let lista = document.getElementById("talla")
                let list = JSON.parse(this.responseText)
                let tipo = list.talla;
            while (lista.hasChildNodes()) {   
                lista.removeChild(lista.firstChild);
            }
            lista.appendChild(crear("Seleccione la talla"))
            for (items of tipo) {
                lista.appendChild(crear(items["descripcion"]))
            }
            texto.innerHTML = ""
        } else if (this.status == 404) {
            texto.innerHTML = "Página no encontrada"
        } else {
            texto.innerHTML = "Error de conexión"
        }
    } else if (this.readyState == 3) {
        texto.innerHTML = "Cargando..."
    }
}

function recibirMovil() {
    let texto = document.getElementById("info")
    if (this.readyState == 4) {
        if (this.status == 200) {
            texto.innerHTML = ""
                let lista = document.getElementById("talla")
                let list = JSON.parse(this.responseText)
                let tipo = list.moviles;
                while (lista.hasChildNodes()) {   
                    lista.removeChild(lista.firstChild);
                  }
            console.log(lista)
            lista.appendChild(crear("Seleccione la marca de movil"))
            for (items of tipo) {
                lista.appendChild(crear(items["descripcion"]))
            }
            texto.innerHTML = ""
        } else if (this.status == 404) {
            texto.innerHTML = "Página no encontrada"
        } else {
            texto.innerHTML = "Error de conexión"
        }
    } else if (this.readyState == 3) {
        texto.innerHTML = "Cargando..."
    }
}

function crear(texto) {
    let op = document.createElement("option")
    let text = document.createTextNode(texto)
    //let id = document.createAttribute("id")
    //let num = document.createAttributeNS("id", numero)
    op.appendChild(text)
    //text.setAttribute(id)
    //text.setNodeValue(num)
    return op
}

function borrar(){
    let lista = document.getElementById("talla");
    while(lista.hasChildNodes){
        lista.removeChild
    }

}

function cargaTalla(){
    if (this.value=="Sudadera" || this.value=="Camiseta"){
        document.getElementById("talla").disabled=""
        document.getElementById("talla").required="required"
        cargarTalla()
    }
    else if(this.value=="Movil"){
        document.getElementById("talla").selectedIndex = "0";
        document.getElementById("talla").disabled=""
        document.getElementById("talla").required="required"
        cargarMovil()
    }
    else{
        document.getElementById("talla").selectedIndex = "0";
        document.getElementById("talla").disabled="disabled"
        document.getElementById("talla").required=""
    }
}