import dataImages from './data/images';
import { loadImage } from './galery/loadImage';

const containerCategories = document.getElementById('categories');
const galery = document.getElementById('galery');

containerCategories.addEventListener( 'click', (e)=>{
    e.preventDefault();
    if(e.target.closest('a')){
        galery.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';    

        const activeCategory = e.target.closest('a').dataset.categoria;
        const images = dataImages.images[activeCategory];
        const carousel = galery.querySelector('.galeria__carousel-slides');
        carousel.innerHTML = '';

        const {id, nombre, ruta, descripcion} = images[0];
        loadImage(id, nombre, ruta, descripcion);

        images.forEach((image) => {
            const slide =`
            <a href="#" class="galeria__carousel-slide">
                <img class="galeria__carousel-image" src="${image.ruta}" alt="" />
            </a>
            `;
            console.log(image);
            galery.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
    }

})