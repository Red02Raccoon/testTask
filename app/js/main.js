var pull = $('#pull'),
    menu = $('.menu__list ');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
    var w = $(window).width();
    if(w > 480 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});


 $(document).ready(function(){
        var button = $(".button"),
            menuContent = $(".content-nav"),
            w,
            arrow = $(".button__link-arrow "),
            item = $(".nav__item"),
            list_2 = $(".nav__list-2");

        w = $(window).width(); 
        $(window).resize(function(){
            w = $(window).width();
        });

        button.on("click", function(){
            if (w < 480) {
                menuContent.slideToggle();
                arrow.toggleClass('rotate');
            }
        });

       

       button.hover(function() {
        if(w > 480) {
           menuContent = $(this).children(".content-nav");
           menuContent.slideDown('slow');
           arrow.toggleClass('rotate');
                item.hover(function() {
                   list_2 = $(this).children(".nav__list-2");
                   list_2.slideDown('slow');},
                   function(){
                    list_2.slideUp('slow',function(){$(this).stop(true);});
                });
         }
     },
        function(){
            if(w > 480) {
            menuContent.slideUp('slow',function(){$(this).stop(true);});
            arrow.toggleClass('rotate')}
        });
 });



 $(document).ready(function(){
  $('.slider__list').bxSlider( {
  auto: true,
  pause: 9000
  });
});





