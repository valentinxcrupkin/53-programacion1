
const calcular_raices = () => {

    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value

    const bloque1 = ( Math.pow(b,2) ) - (4*a*c)
    const raiz = Math.sqrt(bloque1)

    const raiz1 = (-b + raiz) / (2*a)
    const raiz2 = (-b - raiz) / (2*a)

    const r = 'Raiz 1='+ raiz1 + ' Raiz 2='+raiz2;

    document.getElementById("resultado").textContent = r; 

}


const  boton = document.getElementById("btn_calcular")
boton.addEventListener("click", calcular_raices)