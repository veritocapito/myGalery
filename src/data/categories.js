import data from './images';
const {images} = data

export default {
    categories:[
        {id: 'viaje2015', nombre: 'Italia 2015', cantidad: images['asia'].length, portada: './img/viaje2015.jpg'},
        {id: 'viaje2017', nombre: 'España 2017', cantidad: images['oceania'].length, portada: './img/viaje2017.jpg'},
        {id: 'cumpleSol', nombre: 'Cumple 38 Sol', cantidad: images['africa'].length, portada: './img/cumpleSol.jpg'},
        {id: 'bautismo', nombre: 'Bautismo', cantidad: images['europa'].length, portada: './img/bautismo.jpg'},
        {id: 'comunion', nombre: 'Comunión Giane', cantidad: images['comunion'].length, portada: './img/comunion.jpg'},
        {id: 'cumpleGiane', nombre: 'Cumple 10 Giane', cantidad: images['antartida'].length, portada: './img/cumpleGiane.jpg'},
    ]
}