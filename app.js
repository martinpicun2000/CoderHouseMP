//objeto de productos
const productos = [ 
  {prod_id: 1, precio:60, nombre:"Arroz"},
  {prod_id: 2, precio:65, nombre:"Fideos"},
  {prod_id: 3, precio:30, nombre:"Agua"},
  {prod_id: 4, precio:90, nombre:"Chocolate"},
  {prod_id: 5, precio:70, nombre:"Aceite"},
  {prod_id: 6, precio:240, nombre:"Huevos"},
  {prod_id: 7, precio:37, nombre:"Harina"},
  {prod_id: 8, precio:190, nombre:"Coca-Cola"},
  {prod_id: 9, precio:83, nombre:"Tomates"}
]
//#121212
// Obtener objetos de HTML
const listaSuper = document.getElementById("listaSuper")
const listarCarrito = document.getElementById("listaCarritoCompras")
const botonComprar = document.getElementById("btnComprar")
const btnDarkMode = document.getElementById("btnDarkMode")

//Agrego array donde se va a agregar el carrito de compra
let carritoCompra = JSON.parse(localStorage.getItem("carrito")) || []



const calcularTotalCarrito = () => {
    let total = carritoCompra.reduce((total, elemento)=>{
        return total + elemento.precio
    }, 0)
    return total
}

const mostrarTotalCompra = ()=> {
    const divTotal = document.getElementById("totalCompra")
    divTotal.innerText = calcularTotalCarrito()
}

const guardarCarrito = () => {
        const carritoJSON = JSON.stringify(carritoCompra)
    localStorage.setItem("carrito", carritoJSON)
}

const mostrarCarrito = () => {
    listarCarrito.innerHTML = ""
    carritoCompra.forEach(prod=>{
        const li = document.createElement("li")
        li.innerHTML = `${prod.nombre} - $${prod.precio}`
        listarCarrito.appendChild(li)
    })
}

const agregarCarritoCompra = (prod)=>{
    carritoCompra.push(prod)
    mostrarCarrito()
    guardarCarrito()
    mostrarTotalCompra()
}

function mostrarProductosSuperEmePe(){
    listaSuper.innerHTML = ""
    productos.forEach(prod=>{
        const li = document.createElement("li")
        const primerDiv = document.createElement("div")
        const btn = document.createElement("button")
        li.id = prod.prod_id
        primerDiv.innerText = `${prod.nombre} - $${prod.precio}`
        btn.innerText = "Comprar"
        btn.addEventListener("click", ()=>{
            agregarCarritoCompra(prod)
        })

        li.appendChild(primerDiv)
        li.appendChild(btn) dsa
        listaSuper.appendChild(li)
    })
}

const vaciarCarritoCompra = () => {
    carritoCompra = []
    guardarCarrito()
    mostrarCarrito()
    mostrarTotalCompra()
}

const comprar = () => {
    const agradecimmiento = document.getElementById("Despedida")
    agradecimmiento.innerText = "Gracias por comprar en Eme Pe!"
    guardarCarrito()
    vaciarCarritoCompra()
    mostrarTotalCompra()
}

botonComprar.onclick = comprar
btnDarkMode.addEventListener("click", ()=>{
            document.body.classList.toggle("darkmode")
        })

mostrarProductosSuperEmePe()
