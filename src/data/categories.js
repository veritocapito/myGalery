import data from './images';
const {images} = data

export default {
    categories:[
        {id: 'casamiento', nombre: 'Casamiento', cantidad: images['casamiento'].length, portada: './img/casamiento.jpg'},
        {id: 'viaje2015', nombre: 'Italia 2015', cantidad: images['viaje2015'].length, portada: './img/viaje2015.jpg'},
        {id: 'viaje2017', nombre: 'España 2017', cantidad: images['viaje2017'].length, portada: './img/viaje2017.jpg'},
        {id: 'bautismo', nombre: 'Bautismo', cantidad: images['bautismo'].length, portada: './img/bautismo.jpg'},
        {id: 'comunion', nombre: 'Comunión Giane', cantidad: images['comunion'].length, portada: './img/comunion.webp'},
        {id: 'vacaciones', nombre: 'Vacaciones', cantidad: images['vacaciones'].length, portada: './img/vacaciones.jpg'}
    ]
}