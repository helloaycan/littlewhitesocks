
<script language='javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js' type='text/javascript'/>
<script type='text/javascript'>//<![CDATA[
/**
this script was written by Confluent Forms LLC http://www.confluentforms.com
for the BlogXpertise website http://www.blogxpertise.com
any updates to this script will be posted to BlogXpertise
please leave this message and give credit where credit is due!
**/
$(document).ready(function(){
    // the dimension of your content within the columns
    var areawidth = $('div.firsthomepage-thumbnail.nopin').width();
    $('.post-body').find('img').each(function(n, image){
        var image = $(image);
        var height = image.attr('height');
        var width = image.attr('width');
        var newHeight = (height/width * areawidth).toFixed(0);
        image.attr('width',areawidth).attr('height',newHeight);
        var greater = Math.max(areawidth,newHeight);
        image.attr({src : image.attr('src').replace(/s\B\d{3,4}/,'s' + greater)});
    });
});
//]]></script>




/**
this script was written by Confluent Forms LLC http://www.confluentforms.com
for the BlogXpertise website http://www.blogxpertise.com
any updates to this script will be posted to BlogXpertise
please leave this message and give credit where credit is due!
**/
/** $(document).ready(function() {
        var dimension = 280;
        $('.labelthumbnail').find('img').each(function(n, image){
          var image = $(image);
          image.attr({src : image.attr('src').replace(/s\B\d{2,4}/,'s' + dimension)});
          image.attr('width',dimension);
          image.attr('height',dimension);
        });
      });
      $(document).ready(function() {
        var dimension = 360;
        $('.homepage-thumbnail').find('img').each(function(n, image){
          var image = $(image);
          image.attr({src : image.attr('src').replace(/s\B\d{2,4}/,'s' + dimension)});
          image.attr('width',dimension);
          image.attr('height',dimension);
        });
      });
      $(document).ready(function() {
        var dimension = 770;
        $('.firsthomepage-thumbnail').find('img').each(function(n, image){
          var image = $(image);
          image.attr({src : image.attr('src').replace(/s\B\d{2,4}/,'s' + dimension)});
          image.attr('width',w);
          image.attr('height',h);
        });
      });
      **/
