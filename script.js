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
 
        var typed3 = new Typed('#frontend', {
          strings: ['Frontend Web-Entwickler'],
          typeSpeed: 50,
          backSpeed: 30,
          smartBackspace: true, // this is a default
          contentType: 'html',
          loop: false
        });


        function animation(){
            $('.fadeInUp').each(function(){
              //ターゲットの位置を取得
              var target = $(this).offset().top;
              //スクロール量を取得
              var scroll = $(window).scrollTop();
              //ウィンドウの高さを取得
              var windowHeight = $(window).height();
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


          // particle.js how to make stars 
          // https://www.youtube.com/watch?v=Bi--IqcY5-0

  
    });
  })(window, document, jQuery);
  
