import closeGalery from "./closeGalery";

const galery = document.getElementById('galery');

galery.addEventListener('click', (e) =>{
    const button = e.target.closest('button');
    
    if(button?.dataset?.accion === 'cerrar-galeria'){
        closeGalery()
    }
})