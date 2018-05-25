
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

$(function() {
$(document).ready(function() {
$('.tweetable').each(function() {   
$(this).wrap('<a class="tweet-link" target="_blank" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent($(this).text()) + " " + encodeURIComponent($(this).parents('.post-outer').find('.timestamp-link').attr('href') || $(location).attr('href')) +'"></a>');
    });
});
});
//]]>
