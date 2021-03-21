// SWIPERS
    const asiatica = new Swiper('.swiper-asiatica', {
      loop: true
    });
    const carnes = new Swiper('.swiper-carnes', {
      loop: true,
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
  //asiatica
    $(".swiper-asiatica").mouseenter(function() {
      asiatica.autoplay.start();
      $(".swiper-asiatica .swiper-title-1-r").addClass("hidden");
    });
    $(".swiper-asiatica").mouseleave(function() {
      asiatica.autoplay.stop();
      $(".swiper-asiatica .swiper-title-1-r").removeClass("hidden");
    });

  //carnes
    $(".swiper-carnes").mouseenter(function() {
      carnes.autoplay.start();
      $(".swiper-carnes .swiper-title-1-r").addClass("hidden");
    });
    $(".swiper-carnes").mouseleave(function() {
      carnes.autoplay.stop();
      $(".swiper-carnes .swiper-title-1-r").removeClass("hidden");
    });

  //pizza
    $(".swiper-pizza").mouseenter(function() {
      pizza.autoplay.start();
      $(".swiper-pizza .swiper-title-2-r").addClass("hidden");
    });
    $(".swiper-pizza").mouseleave(function() {
      pizza.autoplay.stop();
      $(".swiper-pizza .swiper-title-2-r").removeClass("hidden");
    });

  //pinchos
    $(".swiper-pinchos").mouseenter(function() {
      pinchos.autoplay.start();
      $(".swiper-pinchos .swiper-title-1-r").addClass("hidden");
    });
    $(".swiper-pinchos").mouseleave(function() {
      pinchos.autoplay.stop();
      $(".swiper-pinchos .swiper-title-1-r").removeClass("hidden");
    });

  //papas
    $(".swiper-papas").mouseenter(function() {
      papas.autoplay.start();
      $(".swiper-papas .swiper-title-2-r").addClass("hidden");
    });
    $(".swiper-papas").mouseleave(function() {
      papas.autoplay.stop();
      $(".swiper-papas .swiper-title-2-r").removeClass("hidden");
    });

  //helados
    $(".swiper-helados").mouseenter(function() {
      helados.autoplay.start();
      $(".swiper-helados .swiper-title-2-r").addClass("hidden");
    });
    $(".swiper-helados").mouseleave(function() {
      helados.autoplay.stop();
      $(".swiper-helados .swiper-title-2-r").removeClass("hidden");
    });

  //coct
    $(".swiper-coct").mouseenter(function() {
      coct.autoplay.start();
      $(".swiper-coct .swiper-title-1-r").addClass("hidden");
    });
    $(".swiper-coct").mouseleave(function() {
      coct.autoplay.stop();
      $(".swiper-coct .swiper-title-1-r").removeClass("hidden");
    });
