(function(window, document, $) {
    $(function() {
      "use strict";
        
      /*--------- Language change ---------*/ 
      const glot = new Glottologist();

      //loading JSON
      glot.import("lang.json").then(() => {
        glot.render();
      })

      /****Event for changing the languages **/
     const de = document.getElementById('de');
     const en = document.getElementById('en');

     de.addEventListener('click', e => {
       e.preventDefault();
       glot.render('de');
     })
     
     en.addEventListener('click', e => {
       e.preventDefault();
       glot.render('en');
     })
    /*------------------------*/  
  
      $('a[href^="#"]').on("click", function() {
          const speed = 600;
          const href= $(this).attr("href");
          const target = $(href == "#" || href == "" ? 'html' : href);
          const position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });

        const typed3 = new Typed('#frontend', {
          strings: ['Web Frontend Developer'],
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

          $('article').flowtype({
            minimum   : 375,
            maximum   : 1024,
            minFont   : 16,
            maxFont   : 24,
          });

  
    });
  })(window, document, jQuery);
  
