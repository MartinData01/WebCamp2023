$(document).ready(function(){
    // 回到頂端
    $('#toTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },800)
    });
    // 手機版選單
    $('.navbar-btn').click(function(){
        $('.navbar-collapse').toggleClass('show');
    });
    // 排序按鈕
    $('.dropdown-btn').click(function(){
        $('.dropdown-menu').toggleClass('show');
    });
    // 排序按鈕 - 改選單的字
    $('.new-to-old').click(function(e) {
        e.preventDefault();
        $('.dropdown-menu').toggleClass('show');
        $('.dropdown-btnText').text(this.text);
      });
      
    $('.old-to-new').click(function(e) {
        e.preventDefault();
        $('.dropdown-menu').toggleClass('show');
        $('.dropdown-btnText').text(this.text);
      });
});
