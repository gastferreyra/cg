/*===========================================================================
                                EFECTOS
===========================================================================*/

$(function() {
  new WOW().init();
});


/*===========================================================================
                            LOADER
===========================================================================*/

$('#loader').delay(3000).queue(function(){
  $(this).addClass("noloader");
});



/*===========================================================================
                                OBRAS
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



// $(document).load(function(){
//
//   var $container = $(".masonry-container");
//   $container.Imagesloaded(function(){
//     $container.masonry({
//       columnWidth: ".grid-sizer",
//       itemSelector: ".item"
//     });
//   });
// });

/*===========================================================================
                                IMAGEN PRODUCTOS
===========================================================================*/

$(function() {
  $("#img-producto").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
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
                                CLIENTES
===========================================================================*/
$(function() {
  $("#clientes-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:3
            },

            // breakpoint from 768 up
            768 : {
                items:5
            },

            992 : {
              items: 6
            }
          }
  });
});

/*===========================================================================
                                NOVEDADES
===========================================================================*/
$(function() {
  $("#novedades-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1
      },
      // breakpoint from 480 up
      480 : {
          items:2
      },
      // breakpoint from 768 up
      620 : {
          items:2
      },

      992 : {
        items: 3
      }
}
  });
});


/*===========================================================================
                                NAVIGATION
===========================================================================*/
$(function() {
 $(window).scroll(function(){
   if ($(this).scrollTop() <50 ) {
     /* Si window scroll top es menor a 50px esconder navigation bar */
     $("nav").removeClass("cg-top-nav");
     $("nav li a.smooth-scroll").css('color', 'white');
     $("img.logocg1").css('opacity', '1');
     $("img.logocg2").css('opacity', '0');
     $("#back-to-top").fadeOut();
      $("nav li a.smooth-scroll").removeClass("cg-nav-hov");
   } else {
     /* Si es mayor, mostrar navigation bar */
     $("nav").addClass("cg-top-nav");
     $("nav li a.smooth-scroll").css('color', 'rgb(70,63,64)');
     $("img.logocg1").css('opacity', '0');
     $("img.logocg2").css('opacity', '1');
     $("#back-to-top").fadeIn();
     $("nav li a.smooth-scroll").addClass("cg-nav-hov");


   }
   });
 });



 /*===========================================================================
                                 NAVIGATION (Productos)
 ===========================================================================*/
 $(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() <50 ) {
      /* Si window scroll top es menor a 50px esconder navigation bar */
      $("nav").removeClass("cg-top-nav");
      $("nav li a.menu-item").css('color', 'white');
      $("img.logocg1").css('opacity', '1');
      $("img.logocg2").css('opacity', '0');
      $("#back-to-top").fadeOut();
       $("nav li a.menu-item").removeClass("cg-nav-hov");
    } else {
      /* Si es mayor, mostrar navigation bar */
      $("nav").addClass("cg-top-nav");
      $("nav li a.menu-item").css('color', 'rgb(70,63,64)');
      $("img.logocg1").css('opacity', '0');
      $("img.logocg2").css('opacity', '1');
      $("#back-to-top").fadeIn();
      $("nav li a.menu-item").addClass("cg-nav-hov");


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
                                MAPA
===========================================================================*/


    function initMap() {


    	var cgcomercial = {
    		info: '<div id="map-content"><h5>Oficinas Comerciales</h5><br>\
    					<strong> Dirección</strong>&nbsp; &nbsp; Pasaje Carabelas 265, CABA.<br>\
              <strong> Teléfono</strong>&nbsp; &nbsp; +5411 4328-7681<br>\
    					<a href="https://goo.gl/maps/5t45hvY9WU12">Como llegar</a></div>',
              lat: -34.6053194,
          		long: -58.3824277
    	};

    	var cgfabrica = {
    		info: '<div id="map-content"><h5>Fábrica</h5><br>\r\
    					<strong> Dirección</strong>&nbsp; &nbsp; Calle 830 Nº450<br>\
              <strong> Teléfono</strong>&nbsp; &nbsp; +5411 4250-7666<br>\
    					<a href="https://goo.gl/maps/M62uakVTKMv">Como llegar</a> </div>',
              lat: -34.7307274,
              long: -58.3979491
    	};

    	var locations = [
          [cgcomercial.info, cgcomercial.lat, cgcomercial.long, 0],
          [cgfabrica.info, cgfabrica.lat, cgfabrica.long, 1],
        ];

    	var map = new google.maps.Map(document.getElementById('map'), {
    		zoom: 10,
    		center: new google.maps.LatLng(-34.6973372,-58.4482101),
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	});

    	var infowindow = new google.maps.InfoWindow({});

    	var marker, i;

    	for (i = 0; i < locations.length; i++) {
    		marker = new google.maps.Marker({
    			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    			map: map,
          icon:'img/logos/CGmark.png'
    		});

    		google.maps.event.addListener(marker, 'click', (function (marker, i) {
    			return function () {
    				infowindow.setContent(locations[i][0]);
    				infowindow.open(map, marker);
    			}
    		})(marker, i));
    	}
    }



    /*===========================================================================
                                  SIDEBAR (+)
    ===========================================================================*/


    $(function() {
      $('.plus-minus-toggle').on('click', function() {
        $(this).toggleClass('collapsed');
      });
    });




    /*===========================================================================
                                  MODAL (Novedades)
    ===========================================================================*/


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



    /*===========================================================================
                                  CERRAR MENU MOBILE ONCLICK
    ===========================================================================*/

    $(function(){
      $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
      });
    });
