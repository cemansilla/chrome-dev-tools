/**
 * Alerta
 */
function mostrarAlerta(){
  alert('Alerta desde test.js');
}

/**
 * Alerta con parámetro
 */
function saludar(nombre){
  alert('Hola ' + nombre);
}

/**
 * Petición ajax sin parámetros
 */
function cargarNumeros(){
  $.ajax({
    url: 'server/ajax_cargar_numeros.php',
    data: {},
    type: 'GET',
    dataType : 'json',
    success: function(response){
      console.log('Respuesta AJAX cargarNumeros', response);
    }
  });
}

/**
 * Petición ajax con parámetro de cantidad
 */
function cargarNumerosCantidad(cuantos){
  $.ajax({
    url: 'server/ajax_cargar_numeros_con_parametro.php',
    data: {
      'cantidad': cuantos
    },
    type: 'GET',
    dataType : 'json',
    success: function(response){
      console.log('Respuesta AJAX cargarNumerosCantidad', response);
    }
  });
}

/**
 * Envío form newsletter
 */
$(document).on('submit', '#form_newsletter', function(e){
  e.preventDefault();

  $.ajax({
    url: 'server/ajax_guardar_newsletter.php',
    data: {
      'email': $('#news_email').val()
    },
    type: 'POST',
    dataType : 'json',
    success: function(response){
      console.log('Respuesta AJAX guardar newsletter', response);
    }
  });
});