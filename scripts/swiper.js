$(document).ready(function () {
    
  // SWIPERS
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

    const papas = new Swiper('.swiper-papas', {
      loop: true
    });

    const helados = new Swiper('.swiper-helados', {
      loop: true
    });

    const coct = new Swiper('.swiper-coct', {
      loop: true
    });
    


    //EVENTS
    $(".swiper-asiatica").mouseenter(function() {
        asiatica.autoplay.start();
    });
    $(".swiper-asiatica").mouseleave(function() {
      asiatica.autoplay.stop();
    });
    
    $(".swiper-carnes").mouseenter(function() {
      carnes.autoplay.start();
    });
    $(".swiper-carnes").mouseleave(function() {
      carnes.autoplay.stop();
    });

    $(".swiper-pizza").mouseenter(function() {
      pizza.autoplay.start();
    });
    $( ".swiper-pizza").mouseleave(function() {
      pizza.autoplay.stop();
    });

    $(".swiper-pinchos").mouseenter(function() {
      pinchos.autoplay.start();
    });
    $(".swiper-pinchos").mouseleave(function() {
      pinchos.autoplay.stop();
    });

    $(".swiper-papas").mouseenter(function() {
      papas.autoplay.start();
    });
    $(".swiper-papas" ).mouseleave(function() {
      papas.autoplay.stop();
    });

    $(".swiper-helados").mouseenter(function() {
      helados.autoplay.start();
    });
    $(".swiper-helados").mouseleave(function() {
      helados.autoplay.stop();
    });

    $(".swiper-coct").mouseenter(function() {
      coct.autoplay.start();
    });
    $(".swiper-coct").mouseleave(function() {
      coct.autoplay.stop();
    });
})