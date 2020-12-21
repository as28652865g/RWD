$(document).ready(function() {
      $('.hamburger').on('click',  function(e){
         e.preventDefault();
         $('body').toggleClass('menu-show');
   });
   $('.top a').click(function(e){
      e.preventDefault();
      $('html,body').animate({
         scrollTop: 0
      }, 1000);
   });
});
