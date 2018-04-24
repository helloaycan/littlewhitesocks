
$(document).ready(function() {
  var labels=[];
  var label;
  var alternateLabel;
  if('.post-labels a'.length>1){$('.post-labels a').each(function(){labels.push($(this).text().trim())});label=labels[Math.floor(labels.length*Math.random())];
  var labelLocation=labels.indexOf(label);
  if(labelLocation===labels.length-1){alternateLabel=labels[labelLocation-1]}
  else
  {alternateLabel=labels[labelLocation+1]}}
  if(label!==undefined){
  var title=$(".entry-title").text().trim();
  var labelCount=0;
  var alternateLabelCount=0;
  var matches=[];
  var url=$('link[rel="alternate"][title*="Atom"]').eq(0).attr("href");$.ajax({url:url,data:{"max-results":20,alt:"json-in-script"},dataType:"jsonp",success:function(e){$.each(e.feed.entry,function(t,n){
  if(e.feed.entry[t].category!==undefined){var r=[];for(
  var i=0;i<e.feed.entry[t].category.length;i++){r.push(e.feed.entry[t].category[i].term)}
  if($.inArray(label,r)!==-1){labelCount++}
  if($.inArray(alternateLabel,r)!==-1){alternateLabelCount++}}});
  if(labelCount<=1-1&&alternateLabelCount>=1-1){label=alternateLabel}$.each(e.feed.entry,function(t,n){
  if(e.feed.entry[t].category!==undefined){
  var r=[];
  for(
  var i=0;i<e.feed.entry[t].category.length;i++){r.push(e.feed.entry[t].category[i].term)}
  if($.inArray(label,r)!==-1){
  var s=e.feed.entry[t].title.$t.trim();
  if(s!==title){
  var o;for(
  var u=0;u<e.feed.entry[t].link.length;u++){
  if(e.feed.entry[t].link[u].rel==="alternate"){o=e.feed.entry[t].link[u].href}}
  var a;
  if(e.feed.entry[t].media$thumbnail!==undefined){a=e.feed.entry[t].media$thumbnail.url.split(/s72-c/).join("s300-c")}
  {matches.push('<li><img style="background:url('+a+') 0 center no-repeat;background-size:100%;" nopin="nopin"/><a href="'+o+'">'+s+"</a></li>")}
  }}}});

  {{$('.post-footer-share').after('<div class="related-posts"><div class="header-box"><p>YOU MIGHT ALSO LIKE</p></div><ul></ul></div>')}matches.sort(function(){return.5-Math.random()});
  for(
  var t=0;t<3;t++){
  $(".related-posts ul").append(matches[t])}}$('.post-footer-share').css("clear","both");{
}}})}
});
