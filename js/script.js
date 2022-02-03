
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




