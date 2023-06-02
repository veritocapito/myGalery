import dataImages from './data/images';

const containerCategories = document.getElementById('categories');
const galery = document.getElementById('galery');

containerCategories.addEventListener( 'click', (e)=>{
    e.preventDefault();
    if(e.target.closest('a')){
        galery.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';    
        
        //console.log(dataImages);

        const activeCategory = e.target.dataset.category;
        const images = dataImages.images[activeCategory];
        console.log(images);

    }

})