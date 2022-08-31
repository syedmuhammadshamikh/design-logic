// header start
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 50){
    $("header").addClass("shrink");
  }
  else
  {
    $("header").removeClass("shrink");
  }
});
// header end

// datafancybox start
$('[data-fancybox]').fancybox({
  // Options will go here
  buttons : [
    'close'
  ],
  wheel : false,
  transitionEffect: "slide",
   // thumbs          : false,
  // hash            : false,
  loop            : true,
  // keyboard        : true,
  toolbar         : true,
  animationEffect : false,
  arrows          : true,
  clickContent    : false
});
// datafancybox end

// project counter start
var a = 0;
$(window).scroll(function() {

  var oTop = $('.counterSec').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-number');
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
    a = 1;
  }

});
/*--------------------------------------*/
// project counter end

// testSlider start
$('.testSlider').slick({
dots: false,
arrows:true,
infinite: true,
autoplay:true,
speed: 1000,
slidesToShow: 2,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
// testSlider end

// floatingForm start
$(".outer-show").click(function(){
$('body').toggleClass('show');
$('.floatingform-sec').toggleClass('show');
$('.overlayfloatingform').toggleClass('show');
});
$(".clickbutton").click(function(){
$('.overlayfloatingform').removeClass('show');
});
$(document).ready(function() {
$(".clickbutton").click(function() {
$('.floatbutton').toggleClass("active");
$('.crossplus').toggleClass("rotate");
});
$(".topformswitch").click(function() {
$('.topformwrap').toggleClass("active");
});

});
// floatingForm end


$('.imgslider').slick({
  centerMode: true,
  centerPadding: '250px',
  // autoplay:'true',
  slidesToShow: 1,
  prevArrow:"<button type='button' class='btn-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='btn-right '><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint:993,
      settings:{
        centerPadding: '150px',
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 485,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 385,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});