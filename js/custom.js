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
                                clientes
===========================================================================*/
$(function() {
  $("#clientes-list").owlCarousel({
    items: 5,
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
   if ($(this).scrollTop() == 0) {
     /* Si window scroll top es menor a 50px esconder navigation bar */
     $("nav").removeClass("cg-top-nav");
     $("nav li a.smooth-scroll").css('color', 'white');
   } else {
     /* Si es mayor, mostrar navigation bar */
     $("nav").addClass("cg-top-nav");
     $("nav li a.smooth-scroll").css('color', 'rgb(70,63,64)');
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
