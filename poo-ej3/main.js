import Anime from './anime.js'


const obtener = () => {

    const instancia = new Anime()
    instancia.obtenerDatos()


}

const boton = document.getElementById("btn_obtener")
boton.addEventListener("click",obtener)
