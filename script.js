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
