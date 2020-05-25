
var boton = document.querySelector("button")
var parrafo = document.querySelector("p")
var seEjecutaEnEvento = evento()
function evento(){
	boton.addEventListener("click", function(){
    document.querySelector("body").insertAdjacentHTML("beforeend", "<p>BEEP</p>")
    boton.classList.toggle("color")
})
}



