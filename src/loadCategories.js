import dataCategories from './data/categories';
const {categories} = dataCategories;
const containerCategories = document.getElementById('categories')

categories.forEach( (category) => {
    const newCategory = document.createElement('a');
    const template = `
        <img class="categoria__img" src="${category.portada}" alt="${category.nombre}" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${category.nombre}</p>
            <p class="categoria__numero-fotos">${category.cantidad} fotos</p>
        </div>
    `;
    newCategory.innerHTML = template;
    newCategory.classList.add('categoria');
    newCategory.href = '#';
    newCategory.dataset.categoria = category.id;

    containerCategories.append(newCategory);
});