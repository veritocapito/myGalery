const galery = document.getElementById('galery');

const closeGalery = () => {
    galery.classList.remove('galeria--active');
    document.body.style.overflow = '';
}

export default closeGalery;