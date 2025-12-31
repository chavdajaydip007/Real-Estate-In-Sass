$('.benner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
})
$('.client-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoplay:true,
    animateIn: 'animate__fadeIn',
    animateOut: 'animate__fadeOut',
})


var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "nav#menu", {
                       "slidingSubmenus": false,
                       "offCanvas": {
                          "position": "left"
                       },
                       "theme": "white"
                    });
                }
            );