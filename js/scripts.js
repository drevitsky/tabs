$(document).ready(function(){
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
    //закрашивает звездочки
    $('.score__star').on('click', function(e){
    	var n = $(this).index()
    
    console.log(n);
    $('.score__list').attr("data-score", n + 1);
    })
    //закрашивает звездочки end
   

$('.data-num').on('click',changecolors);
var x = 1, y = 5;
  var ix = 0;
function changecolors(ex) {
    if (x == 1 && y > 0)
    {setInterval(change, 500);}
     else {return false}

}

function change(ex) {
 
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

      while (ix < 1){
      $('#scary').addClass('active').fadeIn(600);

      setTimeout(function(){$('#scary').removeClass('active');},1000)
      //$('.wrap--any').css('background', color).text('Ну и ладно.......'); 
        ix++;
        console.log(ix);
        }
      return;
        
        
   }
    $('.wrap--any').css('background', color);
     $('.data-num').attr("data-num", y);
    console.log(color);
 return ex;
    
}



});

