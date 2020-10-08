(function(window, document, $) {
    $(function() {
      "use strict";
  
      $('a[href^="#"]').on("click", function() {
          const speed = 600;
          const href= $(this).attr("href");
          const target = $(href == "#" || href == "" ? 'html' : href);
          const position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
 
        const typed3 = new Typed('#frontend', {
          strings: ['Web Frontend-Entwickler'],
          typeSpeed: 50,
          backSpeed: 30,
          smartBackspace: true, // this is a default
          contentType: 'html',
          loop: false
        });


        function animation(){
            $('.fadeInUp').each(function(){
              //ターゲットの位置を取得
              const target = $(this).offset().top;
              //スクロール量を取得
              const scroll = $(window).scrollTop();
              //ウィンドウの高さを取得
              const windowHeight = $(window).height();
              //ターゲットまでスクロールするとフェードインする
              if (scroll > target - windowHeight){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              }
            });
          }
          animation();
          $(window).scroll(function (){
            animation();
          });


          const EffectTime = 900;
          const DelayTime = 100;
          $('.fadein').css({ opacity: 0 });

          $(window).on('scroll load', function() {
          const scMiddle = $(this).scrollTop() + $(this).height() / 2;
          const listPos = $('.txt01').offset().top;
          if ( listPos < scMiddle ) {
            $('.fadein').each( function(index) {
               $(this).delay(DelayTime * index).animate({'opacity': 1}, EffectTime);
             });
           }
          });

  
    });
  })(window, document, jQuery);
  
