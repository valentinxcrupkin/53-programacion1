import Area from "./area.js";

const mostrar = () => {
    const base1 = document.getElementById("inp1").value
    const base2 = document.getElementById("inp2").value
    const h = document.getElementById("inp3").value

    const instancia = new Area()

    instancia.base1 = base1
    instancia.base2 = base2
    instancia.h = h

    const respuesta = instancia.calcularArea()
    document.getElementById("r1").textContent = respuesta

}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)