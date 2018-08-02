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

   

$('.data-num').on('click',changecolors);
var x = 1, y = 10;
 
function changecolors() {
    if (x == 1 && y > 0)
    {setInterval(change, 1000);}
     else {return false}

}

function change() {
    if (x == 1 && y > 0) {
       color = "red";
        x ++;
        y --;
        console.log(x);
        console.log(y);

    } else  if (x != 1 && y > 0) {
        color = "yellow";
        x = 1;
        console.log(x);
    }
        else {
      color = '#000';
      $('#scary').addClass('active').fadeIn(600);
        
   } 
    $('.wrap--any').css('background', color);
     $('.data-num').attr("data-num", y);
    console.log(color);

    
}



});

