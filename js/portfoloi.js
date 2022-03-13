$(document).ready(()=> {
    var isfirstCall = false;
    $('.next_project').click(function(){
      navigateDown()
    });

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";
  
    function pagination() {
      scrolling = true;
  
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
  
      setTimeout(function() {
        scrolling = false;
      }, animTime);
    };
  
    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    };
  
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };
  
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if(($(window).scrollTop() < ($('.skw-pages').offset().top + 500)) && ($(window).scrollTop() > ($('.skw-pages').offset().top - 300))){
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else { 
          navigateDown();
        }
      }

      if(($(window).scrollTop() < ($('#about').offset().top)) && !isfirstCall){
        isfirstCall = true;
        $('.about-title').addClass('animated-text0');
        $('.skill').addClass('animated-text2');
        $('.about-content').addClass('animated-text1');
      }
    });
  
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  });