// seleciona o botão pelo id
const Finalizar = document.getElementById("Finalizar");

// adiciona um ouvinte de evento de clique ao botão
Finalizar.addEventListener("click", function() {
  // código que será executado quando o botão for clicado
  alert("Compra finalizada!");
});

// seleciona o botão pelo id
const Horarios = document.getElementById("Horarios");

// adiciona um ouvinte de evento de clique ao botão
Horarios.addEventListener("click", function() {
  // código que será executado quando o botão for clicado
  alert("Escolha o horario");
});

$(document).ready(function() {
 
    $('.method').on('click', function() {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });
   
  })
  var $cardInput = $('.input-fields input');
   
  $('.next-btn').on('click', function(e) {
   
    $cardInput.removeClass('warning');
   
    $cardInput.each(function() {    
       var $this = $(this);
       if (!$this.val()) {
         $this.addClass('warning');
       }
    })
  });