/**
this script was written by Confluent Forms LLC http://www.confluentforms.com
for the BlogXpertise website http://www.blogxpertise.com
any updates to this script will be posted to BlogXpertise
please leave this message and give credit where credit is due!
**/
      $(document).ready(function() {
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
        var w = 770;
        var h = auto;
        $('.firsthomepage-thumbnail').find('img').each(function(n, image){
          var image = $(image);
          image.attr({src : image.attr('src').replace(/s\B\d{2,4}/,'s' + w + '-h' + h +'-c')});
          image.attr('width',w);
          image.attr('height',h);
        });
      });
