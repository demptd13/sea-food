$(function(){
 $('.header__slider').slick({
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="/images/prev-arrow.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="/images/next-arrow.svg" alt=""></button>',
  vertical: true,
 });
 $('.product__name').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  asNavFor: '.product__content',
  vertical: true,
  infinite: true,
  centerMode: true,
  prevArrow: '<button type="button" class="product-prev"><img src="/images/prev-arrow-product.svg" alt=""></button>',
  nextArrow: '<button type="button" class="product-next"><img src="/images/next-arrow-product.svg" alt=""></button>',
  responsive: [
   {
    breakpoint: 971,
    settings: {
     vertical: false,
     slidesToShow: 3,
     arrows: false,
     dots: true,
     centerMode: false,
    }
   },
   {
    breakpoint: 621,
    settings: {
     vertical: false,
     slidesToShow: 2,
     arrows: false,
     dots: true,
     centerMode: false,
    }
   },
   {
    breakpoint: 422,
    settings: {
     vertical: false,
     slidesToShow: 1,
     arrows: false,
     dots: true,
     centerMode: false,
    }
   }
  ]
 });
 $('.product__content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.product__name',
  fade: true,
  arrows: false,
 });

 $('.menu__btn').on('click', function (){
  $('.menu__list').toggleClass('menu__list--active');
 });
});


