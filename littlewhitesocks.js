

$(document).ready(function () {
$(".scroll-top-mobile, .scroll-top").click(function(event) {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    event.preventDefault();
  });
 });


jQuery(function () {
function checkOffset() {
  var a=$(document).scrollTop()+window.innerHeight;
  var b=$('.bottom-navigation').offset().top;
  if (a<b) {
    $('.scroll-top-mobile').css('bottom', '10px');
  } else {
    $('.scroll-top-mobile').css('bottom', (10+(a-b))+'px');
  }
}
$(document).ready(checkOffset);
$(document).scroll(checkOffset);
});

$(document).ready(function() {
$().bind('load resize scroll',function(e){
if ($(this).scrollTop() > 200 && $(this).width() < 667) { 
      $('.scroll-top-mobile').fadeIn(500);
  $(".scroll-top").css("display","none");
} 
else {
$('.scroll-top-mobile').fadeOut(500);
$(".scroll-top").css("display","block");
} 
});
 });
