const galery = document.getElementById('galery');

const loadImage = (id, nombre, ruta, descripcion) => {
    galery.querySelector('.galeria__imagen').src = ruta;
    galery.querySelector('.galeria__imagen').dataset.idImagen = id;
    galery.querySelector('.galeria__titulo').innerText = nombre;
    galery.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
}

export { loadImage };