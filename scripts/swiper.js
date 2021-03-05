$(document).ready(function () {
    
  const asiatica = new Swiper('.swiper-asiatica', {
    loop: true
    });
    const carnes = new Swiper('.swiper-carnes', {
      loop: true
    });
    const pizza = new Swiper('.swiper-pizza', {
      loop: true
    });
    const pinchos = new Swiper('.swiper-pinchos', {
      loop: true
    });
    
    $( ".swiper-asiatica" ).mouseenter(function() {
        asiatica.autoplay.start();
    });
    $( ".swiper-asiatica" ).mouseleave(function() {
      asiatica.autoplay.stop();
    });
    
    $( ".swiper-carnes" ).mouseenter(function() {
      carnes.autoplay.start();
    });
    $( ".swiper-carnes" ).mouseleave(function() {
      carnes.autoplay.stop();
    });

    
    $( ".swiper-pizza" ).mouseenter(function() {
      pizza.autoplay.start();
    });
    $( ".swiper-pizza" ).mouseleave(function() {
      pizza.autoplay.stop();
    });

    $( ".swiper-pinchos" ).mouseenter(function() {
      pinchos.autoplay.start();
    });
    $( ".swiper-pinchos" ).mouseleave(function() {
      pinchos.autoplay.stop();
    });
})