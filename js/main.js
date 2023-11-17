$(document).ready(function () {
    $(".customer-stars").starRating({
        totalStars: 5,
        strokeColor: '#F1B90B',
        ratedColor: '#F1B90B',
        starSize: 23,
        readOnly: true, // stars will not be able to be changed
        strokeWidth: 20
      });

      // slider
      $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="btn slider-btn slider-prev"></button>',
        nextArrow: '<button class="btn slider-btn slider-next active"></button>',
        responsive: [
          {
            breakpoint: 981, /*hides buttons at resolution 980 */
            settings: {
              arrows:false,
              dots: true
            }
          },
        ]
      });

      // for switching the class between the buttons
      $('.slider-btn').click(function(){  // кавычки нужны для отправки элемента в html
        $('.slider-btn').removeClass("active"); // when you delete or add the class don't put the dot in front
        $(this).addClass("active")
      })

      $(".burger").click(function() { // animation for burger and nav
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
        $(".body").toggleClass("hidden") // 'hidden' applies to the class in style.css 
      })
});