//me comunico con el servicio de firestore
const db = firebase.firestore()

const guardar_cliente = () => {

    const unCliente = {
        nombre: 'Juan',
        apellido: 'Perez',
        dni: 22468424
    }

    db.collection('cliente').doc().set(unCliente)


}

const boton = document.getElementById("btn_guardar")
boton.addEventListener("click", guardar_cliente)