const contador = document.getElementById('contadorVisitas');
const boton = document.getElementById('btnReestablecer');


window.onbeforeunload = () => {
    
    let visitas = localStorage.getItem('visitas') || 0;

    visitas = parseInt(visitas, 10) || 0;

    visitas += 1;

   localStorage.setItem('visitas', visitas);

};


boton.addEventListener('click', () => {
    localStorage.setItem('visitas', '0');
    contador.innerText = localStorage.getItem('visitas')
})

contador.innerText = localStorage.getItem('visitas')