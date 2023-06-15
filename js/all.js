$(document).ready(function(){
    $('#toTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },800)
    });
    $('.navbar-btn').click(function(){
        $('.navbar-collapse').toggleClass('show');
    });
});
