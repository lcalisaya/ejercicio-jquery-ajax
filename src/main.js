import css from './main.scss';

//Primero, el DOM tiene que estar listo
$(document).ready(function(){

  //Petición simple con Ajax
  // $.ajax('social.html', {
  //   success: function(respuesta){
  //     //console.log(respuesta);
  //     $('.lateral').append($(respuesta));
  //   }
  // });
  //
  // //Método atajo = Get
  // $.get('social.html', function(respuesta){
  //   $('.lateral').append($(respuesta));
  // })

  //Traer datos en formato JSON, desde un servidor
  $.getJSON('https://randomuser.me/api/?results=84')
    .then(function(respuesta){
      //console.log(respuesta);

      //Insertar cada avatar del Usuario ficticio en el document
      respuesta.results.forEach(function(persona){
        //console.log(persona.picture.thumbnail); //son rutas de imágenes
        $('<img>').attr('src', persona.picture.thumbnail).appendTo('.contenido');
      });
    });
});

console.log('hola desde webpack dev server!');
