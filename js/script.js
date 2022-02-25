$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
      $('body, html').toggleClass('lock');
   });
});


$(document).ready(function () {
   $('.menu__link').click(function (event) {
      $('body, html').removeClass('lock');
       $('.header__burger, .menu').removeClass('active');
   });
});
$(document).ready(function () {
   $('.popup-link').click(function (event) {
      $('body, html').addClass('lock');
       $('.header__burger, .menu').removeClass('active');
   });
});




$(document).ready(function () {
   $('.currency__list').change(function (event) {
      let currency = $(".currency__list option:selected").text();
      if(currency == "USD"){
         $('.nameprice-price').text("$388.00");  
      }
      if(currency == "RUB"){
         $('.nameprice-price').text("388.00 ₽");  
      }
     if(currency == "EURO"){
         $('.nameprice-price').text("388.00 €");  
      }
   });
});
$(document).ready(function () {
   $('.language__list').change(function (event) {
      let language = $(".currency__list option:selected").text();
      if(currency == "USD"){
         $('.nameprice-price').text("$388.00");  
      }
   });
});

$(document).ready(function () {

   $('.slider__body').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 900,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,

      draggable: true,/*mouse swipe dlia pk*/
      swipe: true,
      touchThreshold: 5,
   });

});



$(document).ready(function () {

   $('.glass-slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 900,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,

      draggable: true,/*mouse swipe dlia pk*/
      swipe: true,
      touchThreshold: 5,
   });

});




$(document).ready(function () {
  $(".custom-select").click(function (event) {
    $(".list").toggleClass("active");
    if($(".list1").hasClass('active')){
         $(".list1").removeClass("active");
    }
  });
});
$(document).ready(function () {
  $(".sub-header").click(function (event) {
    $(".list").removeClass("active");
  });
});
$(document).ready(function () {
  $(".slider").click(function (event) {
    $(".list").removeClass("active");
  });
});
$(document).ready(function () {
  $(".custom-select1").click(function (event) {
    $(".list1").toggleClass("active");
    if($(".list").hasClass('active')){
         $(".list").removeClass("active");
    }
  });
});
$(document).ready(function () {
  $(".sub-header").click(function (event) {
    $(".list1").removeClass("active");
  });
});
$(document).ready(function () {
  $(".slider").click(function (event) {
    $(".list1").removeClass("active");
  });
});
$(document).ready(function () {
$('#radio2').on('change', function() {
  if($('#radio2:checked')){
    const element = $(".custom");
    element.text("Russian"); 
  }
});
});

$(document).ready(function () {
$('#radio1').on('change', function() {

  if($('#radio1:checked')){
    const element = $(".custom");
    element.text("English"); 
  }
});
});
$(document).ready(function () {
$('#radio3').on('change', function() {
   if($('#radio3:checked')){
    const element = $(".custom");
    element.text("Italian"); 
  }
});
});



$(document).ready(function () {
$('#radio5').on('change', function() {
  if($('#radio5:checked')){
    const element = $(".custom1");
    element.text("EURO"); 
  }
});
});

$(document).ready(function () {
$('#radio4').on('change', function() {

  if($('#radio4:checked')){
    const element = $(".custom1");
    element.text("USD"); 
  }
});
});
$(document).ready(function () {
$('#radio6').on('change', function() {
   if($('#radio6:checked')){
    const element = $(".custom1");
    element.text("RUB"); 
  }
});
});
