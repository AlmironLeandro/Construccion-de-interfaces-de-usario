	var div = document.querySelector("div");
				/*
				div.style.background="red";
				div.style.height= "500px";
				div.style.width="500px";*/
	div.classList.add("square")
	// console.log(h1.classList) -> h1 no esta definido
	function verificar() {
		div.classList.toggle("square");
	}
setInterval('verificar()', 1000);
	