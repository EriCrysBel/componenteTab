const tabLinks= document.querySelectorAll('.tab-link');
const tabPanes= document.querySelectorAll('.tab-pane');

tabLinks.forEach(
  function(link,index){

    link.addEventListener('click',function(){
      tabPanes.forEach(function(pane,indice){
        pane.style.display='none';
      });
      tabPanes[index].style.display='block';
    })
  }
);

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// document.addEventListener('DOMContentLoaded', function () {
//   // Seleccionar todas las pestañas y contenidos
//   let tabLinks = document.querySelectorAll('.tab-link');
//   let tabContents = document.querySelectorAll('.tab-content');

//   // Función para ocultar todos los contenidos de las pestañas
//   function hideTabContent() {
//       tabContents.forEach(function (tabContent) {
//           tabContent.style.display = 'none';
//       });
//   }

//   // Función para mostrar el contenido de una pestaña
//   function showTabContent(id) {
//       let tabContent = document.querySelector(`#${id}`);
//       tabContent.style.display = 'block';
//   }

//   // Ocultar todos los contenidos de las pestañas al inicio
//   hideTabContent();

//   // Agregar eventos a los enlaces de las pestañas
//   tabLinks.forEach(function (tabLink) {
//       tabLink.addEventListener('click', function (event) {
//           event.preventDefault();
//           let id = event.target.getAttribute('.tab-link');
//           hideTabContent();
//           showTabContent(id);
//       });
//   });
// });
