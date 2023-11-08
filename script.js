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
///////////////////////////////CODIGO FORMULARIO\\\\\\\\\\\\\\\\\\\\
document.getElementById('coordsForm').addEventListener('submit', function(event) {
  var longitud = document.getElementById('longitud').value;
  var latitud = document.getElementById('latitud').value;

  if (longitud < -180 || longitud > 180) {
      event.preventDefault();
      document.getElementById('errorLongitud').innerHTML = "La longitud debe estar entre -180 y 180.";
  }

  if (latitud < -90 || latitud > 90) {
      event.preventDefault();
      document.getElementById('errorLatitud').innerHTML = "La latitud debe estar entre -90 y 90.";
  }
});
