  
  //-----------------NAVIGATE TOP BTN----------------------------
  $('.btn-top').click(function(){
          $('body').animate({'scrollTop': 0}, 1500);
          $('html').animate({'scrollTop': 0}, 1500);
        });

        $(window).scroll(function(){
          if($(window).scrollTop() > 800){
            $('.btn-top').addClass('activity');
          }
          else{
            $('.btn-top').removeClass('activity');
          }
        })
		
	//---------------------NAVIGATE DOWN PAGE------------------------
		
		 jQuery(document).ready(function($) {
              $('nav').on('click', function() {
                if ( $(this).hasClass('nav-arrow') ) {
                  var movePos = $(window).scrollTop() + $(window).height();}
              $('html, body').animate({scrollTop: movePos}, 900);
                });
              });
			  
			  
	//-------------------------SLIDE----------------------------	  
		 var slideIndex = 1;
          showSlides(slideIndex);
          
          function plusSlides(n) {
            showSlides(slideIndex += n);
          }
          
          function currentSlide(n) {
            showSlides(slideIndex = n);
          }
          
          function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "flex";  
            dots[slideIndex-1].className += " active";
          }
          

          //--------------------------HAMBURGER--------------------------------------
          $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
           })
           $('.overlay-menu a').click(function(){
             $('#overlay').removeClass('open');
             $('#toggle').removeClass('active');
           })