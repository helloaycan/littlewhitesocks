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

//<![CDATA[   
$(document).ready(function() {
var userFeed = new Instafeed({
get: 'user',
limit: "6",
userId: 30746667,
resolution: 'standard_resolution',
square: 'true',
accessToken: '30746667.3f33fc7.95ca36e07cbc4ccc86b3d02c4ccf56a6',
clientId: '3f33fc7c3faf4ee2ba1b0ef93aaf2fbe',
template: '<li><a href="{{link}}" target="_blank"> <div><img src="{{image}}" /></div></a></li>'
});
userFeed.run();
});
//]]>

//<![CDATA[
jQuery(function($) {
$(document).ready(function() {
$('.tweetable').each(function() {   
$(this).wrap('<a class="tweet-link" target="_blank" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent($(this).text()) + " " + encodeURIComponent($(this).parents('.post-outer').find('.timestamp-link').attr('href') || $(location).attr('href')) +'"></a>');
    });
});
});
//]]>
