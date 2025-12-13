$(document).ready(function () {
  $(".hero-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });

  $(".brand-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $(".team-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



$(".ticket").click(function (){
  $(".pop").css("display","flex");
});

$(".close").click(function(){
  $(".pop").css("display","none");
});

$(".tab1").click(function(){
  $(".service1").css("display","block");
  $(".service2").css("display","none");
   $(".service3").css("display","none");
  $(this).css({"background-color":"#002e8d", "color":"#fff"});
  $(".tab2,.tab3").css({"background-color":"transparent", "color":"#242426"});
});

$(".tab2").click(function(){
  $(".service2").css("display","block");
  $(".service1").css("display","none");
  $(".service3").css("display","none");
  $(this).css({"background-color":"#002e8d", "color":"#fff"});
  $(".tab1,.tab3").css({"background-color":"transparent", "color":"#242426"});
});

$(".tab3").click(function(){
  $(".service3").css("display","block");
  $(".service1").css("display","none");
  $(".service2").css("display","none");
  $(this).css({"background-color":"#002e8d", "color":"#fff"});
  $(".tab1, .tab2").css({"background-color":"transparent", "color":"#242426"});
});


$(".ser-list1").click(function(){
  $(".ser-item2,.ser-item3,.ser-item4,.ser-item5,.ser-item6").css("display","none");
  $(".ser-item1").css("display","block");
  $(this).addClass("ser-new");
  $(".ser-list2,.ser-list3,.ser-list4,.ser-list5,.ser-list6").removeClass("ser-new");
});
$(".ser-list2").click(function(){
  $(".ser-item1,.ser-item3,.ser-item4,.ser-item5,.ser-item6").css("display","none");
  $(".ser-list1,.ser-list3,.ser-list4,.ser-list5,.ser-list6").removeClass("ser-new");
  $(this).addClass("ser-new");
  $(".ser-item2").css("display","block");
});
$(".ser-list3").click(function(){
  $(".ser-item2,.ser-item1,.ser-item4,.ser-item5,.ser-item6").css("display","none");
  $(".ser-list2,.ser-list1,.ser-list4,.ser-list5,.ser-list6").removeClass("ser-new");
  $(".ser-item3").css("display","block");
  $(this).addClass("ser-new");

});
$(".ser-list4").click(function(){
  $(".ser-item2,.ser-item3,.ser-item1,.ser-item5,.ser-item6").css("display","none");
  $(".ser-list2,.ser-list3,.ser-list1,.ser-list5,.ser-list6").removeClass("ser-new");
  $(".ser-item4").css("display","block");
  $(this).addClass("ser-new");

});
$(".ser-list5").click(function(){
  $(".ser-item2,.ser-item3,.ser-item4,.ser-item1,.ser-item6").css("display","none");
  $(".ser-list2,.ser-list3,.ser-list4,.ser-list1,.ser-list6").removeClass("ser-new");
  $(this).addClass("ser-new");
  $(".ser-item5").css("display","block");
});
$(".ser-list6").click(function(){
  $(".ser-item2,.ser-item3,.ser-item4,.ser-item5,.ser-item1").css("display","none");
  $(".ser-list2,.ser-list3,.ser-list4,.ser-list5,.ser-list6").removeClass("ser-new");
  $(this).addClass("ser-new");
  $(".ser-item6").css("display","block");
});