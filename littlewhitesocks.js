jQuery(function($) {
$('.search-top').click(function() {
  $('.search-box').fadeIn();
});
$('.close-search').click(function() {
  $('.search-box').fadeOut();
});
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $('.search-box').fadeOut();
  }
});
});

jQuery(function($) {
    $('a.mobile-categories').click(function(){
      if ($('ul.mobile-labels').css('display') == 'none') {
        $('ul.mobile-labels').slideDown(500);
 $('i.fa-chevron-down').addClass("active");
 
      }else{
        $('ul.mobile-labels').slideUp(500);
 $('i.fa-chevron-down').removeClass('active');
      }
    });
});
$('.mobile-cross, .overlay').click(function(){
  $('a.cross').toggleClass('active');
  return false;
});

jQuery(function($) {
    $(".mobile-cross, .overlay").click(function(){
      if(parseInt($(".side-categories").css('right')) === 0){
        $(".side-categories").animate({right: '-350px'});
		$('.overlay').fadeOut(500);
 $('ul.mobile-labels').slideUp(500);
      }else{
        $(".side-categories").animate({right: '0px'});
		$('.overlay').fadeIn(500);
      }
    });
});

jQuery(function($) {
$('.archive-index ol li').each(function() {
var $dropdown = $(this);
$("a.archive-link", $(this)).click(function(e) {
e.preventDefault();
$("ol.archive-container, .archive-select-m").css("display","flex");
$("ol.archive-container").not($("ol.archive-container", $dropdown)).css("display","none");
$("a.archive-link").css("color","white");
$(this).css("color","black");
return false;
});
});
});

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

$(window).load(function() {
$(window).bind('load resize scroll',function(e){
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
