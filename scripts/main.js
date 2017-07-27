
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(59.938536,30.3224549),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var pointer = new google.maps.LatLng(59.938536,30.3224549);
  var marker = new google.maps.Marker({
    position: pointer,
    map: map,
    icon: 'img/icon-map-marker.svg'
  })
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
  // Slider settings
  $('.slider__inner').slick({
    autoplay: true,
    autoplaySpeed: 600,
    cssEase: 'ease',
    fade: true,
    speed: 1000,
    prevArrow: $('.slider__arrow--left'),
    nextArrow: $('.slider__arrow--right'),
    dots: false,
  });

  $('.examples__inner').slick({
    autoplay: false,
    // autoplaySpeed: 600,
    cssEase: 'ease',
    fade: true,
    speed: 1000,
    prevArrow: $('.slider__arrow--left'),
    nextArrow: $('.slider__arrow--right'),
    dots: true,
    dotsClass: 'examples__point'
  });

  // Toggle menu
  $('.header__map').click(function() {
    $('.header__sitemap').toggleClass('-active');
  });


  // Animate scroll from top menu to sections
  function animateScroll(event) {
    var id  = $(this).attr('href');
    var top = $(id).offset().top;

    if (id.includes('#')) {
      event.preventDefault();
      $('body,html').animate({ scrollTop: top }, 1000);
    }
  }

  $('.header__sitemap').on('click', 'a', animateScroll);
  $('.footer__nav').on('click', 'a', animateScroll);
});
