import dataCategories from './data/categories';
const {categories} = dataCategories;
const containerCategories = document.getElementById('categories')

categories.forEach( (category) => {
    const newCategory = document.createElement('a');
    const plantilla = `
        <img class="categoria__img" src="${category.portada}" alt="${category.nombre}" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${category.nombre}</p>
            <p class="categoria__numero-fotos">${category.cantidad} fotos</p>
        </div>
    `;
    newCategory.innerHTML = plantilla;
    newCategory.classList.add('categoria');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    containerCategories.appendChild(newCategory);
})