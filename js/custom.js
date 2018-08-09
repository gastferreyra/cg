/*===========================================================================
                                SERVICES
===========================================================================*/

$(function() {
  new WOW().init();
});


/*===========================================================================
                                COMUNIDAD
===========================================================================*/
$(function() {
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});


/*===========================================================================
                                NOSOTROS
===========================================================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/*===========================================================================
                                TESTIMONIOS
===========================================================================*/
$(function() {
  $("#customer-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});


/*===========================================================================
                                ESTADÍSTICAS
===========================================================================*/
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});


/*===========================================================================
                                SPONSORS
===========================================================================*/
$(function() {
  $("#sponsors-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/*===========================================================================
                                NAVIGATION
===========================================================================*/
$(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop()<50) {
      /* Si window scroll top es menor a 50px esconder navigation bar */
      $("nav").removeClass("cg-top-nav");
    } else {
      /* Si es mayor, mostrar navigation bar */
      $("nav").addClass("cg-top-nav");
    }

    });
  });


/* Smooth Scrolling*/

$(function() {
/* Selecciona TODOS los a con la clase smooth-scroll */
  $("a.smooth-scroll").click(function(event){
/*Previene de usar la default de cuando se clickea ir directamente a la url */
  event.preventDefault();
  /*Toma o devuelve section id si son clickeados */
  var section = $(this).attr("href");

  $('html,body').animate({
    scrollTop: $(section).offset().top - 64
  }, 1250, "easeInOutExpo");  /*Efecto de easing.1.3.js*/

    });
  });



  /*===========================================================================
                                  SUBRAYADO
  ===========================================================================*/

// 
//   // VARIABLES
// const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));
//
// const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';
//
// // HELPER FUNCTIONS
//
// // 1. Get random number in range. Used to get random index from array.
// const randNumInRange = max => Math.floor(Math.random() * (max - 1));
//
// // 2. Merge two separate array values at the same index to
// // be the same value in new array.
// const mergeArrays = (arrOne, arrTwo) => arrOne
//   .map((item, i) => `${item} ${arrTwo[i]}`)
//   .join(', ');
//
// // 3. Curried function to add a background to array of elms
// const addBackground = (elms) => (color) => {
//   elms.forEach(el => {
//     el.style.backgroundImage = color;
//   });
// }
// // 4. Function to get data from API
// const getData = async(url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.data;
// }
//
// // 5. Partial Application of addBackground to always apply
// // background to the magicalUnderlines constant
// const addBackgroundToUnderlines = addBackground(magicalUnderlines);
//
// // GRADIENT FUNCTIONS
//
// // 1. Build CSS formatted linear-gradient from API data
// const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;
//
// // 2. Get single gradient from data pulled in array and
// // apply single gradient to a callback function
// const applyGradient = async(url, callback) => {
//   const data = await getData(url);
//   const gradient = buildGradient(data[randNumInRange(data.length)]);
//   callback(gradient);
// }
//
// // RESULT
// applyGradient(gradientAPI, addBackgroundToUnderlines);
