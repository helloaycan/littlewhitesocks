        $(document).ready(function() {
          //CODE OPTIONS
          var maxSearched = 20;
          var minimum = 1;
          var maximum = 3;
          var imageSize = 235;
          var roundImages = false;
          var relatedTitle = true;
          var labelInTitle = false;
          var relatedTitleText = "YOUIKE";
          var defaultImage = "";
          var campaignTracking = false;
          var campaignSource = "";
          var campaignMedium = "";
          var campaignName = "";
          var postLabels = $('.post-labels a');
          var insertBefore = $('.mbt-pager');
          //END CODE OPTIONS - DO NOT EDIT BELOW THIS LINE
          var labels=[];var label;var alternateLabel;var minposts=minimum-1;if(postLabels.length===1){label=postLabels.text().trim()}else if(postLabels.length>1){$(postLabels).each(function(){labels.push($(this).text().trim())});label=labels[Math.floor(labels.length*Math.random())];var labelLocation=labels.indexOf(label);if(labelLocation===labels.length-1){alternateLabel=labels[labelLocation-1]}else{alternateLabel=labels[labelLocation+1]}}if(label!==undefined){var title=$(".entry-title").text().trim();var labelCount=0;var alternateLabelCount=0;var matches=[];var url=$('link[rel="alternate"][title*="Atom"]').eq(0).attr("href");$.ajax({url:url,data:{"max-results":maxSearched,alt:"json-in-script"},dataType:"jsonp",success:function(e){$.each(e.feed.entry,function(t,n){if(e.feed.entry[t].category!==undefined){var r=[];for(var i=0;i<e.feed.entry[t].category.length;i++){r.push(e.feed.entry[t].category[i].term)}if($.inArray(label,r)!==-1){labelCount++}if($.inArray(alternateLabel,r)!==-1){alternateLabelCount++}}});if(labelCount<=minposts&&alternateLabelCount>=minposts){label=alternateLabel}$.each(e.feed.entry,function(t,n){if(e.feed.entry[t].category!==undefined){var r=[];for(var i=0;i<e.feed.entry[t].category.length;i++){r.push(e.feed.entry[t].category[i].term)}if($.inArray(label,r)!==-1){var s=e.feed.entry[t].title.$t.trim();if(s!==title){var o;for(var u=0;u<e.feed.entry[t].link.length;u++){if(e.feed.entry[t].link[u].rel==="alternate"){o=e.feed.entry[t].link[u].href}}var a;if(e.feed.entry[t].media$thumbnail!==undefined){a=e.feed.entry[t].media$thumbnail.url.split(/s72-c/).join("s"+imageSize+"-c")}else{a=defaultImage}if(matches.length<maxSearched&&campaignTracking===false){matches.push('<li><a href="'+o+'"><img src="'+a+'" alt="'+s+'" nopin="nopin">'+s+"</a></li>")}else if(matches.length<maxSearched&&campaignTracking===true){matches.push('<li><a href="'+o+"?utm_source="+campaignSource+"&utm_medium="+campaignMedium+"&utm_campaign="+campaignName+'"><img src="'+a+'" alt="'+s+'" nopin="nopin">'+s+"</a></li>")}}}}});if(matches.length>=minimum){if(relatedTitle===true&&labelInTitle===true){insertBefore.before('<div class="related-posts">'+relatedTitleText+' <span class="related-term">'+label+"</span><ul></ul></div>")}else if(relatedTitle===true&&labelInTitle===false){insertBefore.before('<div class="related-posts">'+relatedTitleText+"<ul></ul></div>")}else{insertBefore.before('<div class="related-posts"><ul></ul></div>')}matches.sort(function(){return.5-Math.random()});for(var t=0;t<maximum;t++){$(".related-posts ul").append(matches[t])}}insertBefore.css("clear","both");$(".related-posts ul li").css({"max-width":imageSize,"border":"none","padding":"0"});if(roundImages===true){$(".related-posts ul li img").css({"width":imageSize,"height":imageSize,"border-radius":"50%"})}else{$(".related-posts ul li img").css({"max-width":imageSize,"height":"auto"});}}})}
        });
