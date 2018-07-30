$(document).ready(function(){
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
    $('.score__star').on('click', function(e){
    	var n = $(this).index()
    
    console.log(n);
    $('.score__list').attr("data-score", n + 1);
    })
});

