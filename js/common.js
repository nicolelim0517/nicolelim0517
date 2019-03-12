$(document).ready(function(){
 navToggle();
})

function navToggle(){
  var target = $('.nav .nav_toggle')
  target.on('click', function(){
    if(target.attr('aria-expanded') == 'true'){
     $('.gnb').fadeOut(200);
     target.removeClass('active');
     target.attr('aria-expanded','false')
     $('.wrap').removeClass('scr_block')
    }else{
      $('.gnb').fadeIn(200);
      target.addClass('active');
      target.attr('aria-expanded','true');
      $('.wrap').addClass('scr_block')
    }
  })
}
