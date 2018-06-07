// Generated by CoffeeScript 1.9.3
(function(){var t,e,o;t=function(){function i(t,e){var o,i;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",square:!1,links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(o in t)i=t[o],this.options[o]=i;this.context=null!=e?e:this,this.unique=this._genKey()}return i.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&0<this.context.nextUrl.length},i.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},i.prototype.run=function(t){var e,o;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&((o=document.createElement("script")).id="instafeed-fetcher",o.src=t||this._buildUrl(),document.getElementsByTagName("head")[0].appendChild(o),e="instafeedCache"+this.unique,window[e]=new i(this.options,this),window[e].unique=this.unique),!0},i.prototype.parse=function(t){var e,o,i,n,r,s,a,p,c,l,h,u,d,f,m,g,y,w,b,k,v,_,E,x,I,N,T,q,B,j,C;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(N="least"===(T="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"))[0],T[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",N);break;case"liked":t.data=this._sortBy(t.data,"likes.count",N);break;case"commented":t.data=this._sortBy(t.data,"comments.count",N);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(d=t.data,I=parseInt(this.options.limit,10),null!=this.options.limit&&d.length>I&&(d=d.slice(0,I)),s=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(d=this._filter(d,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(h=a="",j=document.createElement("div"),p=0,v=d.length;p<v;p++){if("object"!=typeof(l=(c=d[p]).images[this.options.resolution]))throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);y=l.width,g="square",(m=l.height)<y&&(g="landscape"),y<m&&(g="portrait"),u=l.url,0<=window.location.protocol.indexOf("http")&&!this.options.useHttp&&(u=u.replace(/https?:\/\//,"//")),h=this._makeTemplate(this.options.template,{model:c,id:c.id,link:c.link,type:c.type,image:u,width:y,height:m,orientation:g,caption:this._getObjectProperty(c,"caption.text"),likes:c.likes.count,comments:c.comments.count,location:this._getObjectProperty(c,"location.name")}),!0===this.options.square&&((C=document.createElement("div")).innerHTML=h,(B=C.querySelector("img[src='"+u+"']"))&&(B.parentNode.replaceChild(this._enforceSquare(B),B),h=C.innerHTML)),a+=h}for(j.innerHTML=a,n=[],i=0,o=j.childNodes.length;i<o;)n.push(j.childNodes[i]),i+=1;for(b=0,_=n.length;b<_;b++)x=n[b],s.appendChild(x)}else for(k=0,E=d.length;k<E;k++){if(c=d[k],f=document.createElement("img"),"object"!=typeof(l=c.images[this.options.resolution]))throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);u=l.url,0<=window.location.protocol.indexOf("http")&&!this.options.useHttp&&(u=u.replace(/https?:\/\//,"//")),f.src=u,!0===this.options.square&&(f=this._enforceSquare(f)),!0===this.options.links?((e=document.createElement("a")).href=c.link,e.appendChild(f),s.appendChild(e)):s.appendChild(f)}if("string"==typeof(q=this.options.target)&&(q=document.getElementById(q)),null==q)throw r='No element with id="'+this.options.target+'" on page.',new Error(r);q.appendChild(s),document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")),w="instafeedCache"+this.unique,window[w]=void 0;try{delete window[w]}catch(t){t}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},i.prototype._buildUrl=function(){var t,e;switch("https://api.instagram.com/v1",this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return e="https://api.instagram.com/v1/"+t,null!=this.options.accessToken?e+="?access_token="+this.options.accessToken:e+="?client_id="+this.options.clientId,null!=this.options.limit&&(e+="&count="+this.options.limit),e+="&callback=instafeedCache"+this.unique+".parse"},i.prototype._genKey=function(){var t;return""+(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()},i.prototype._makeTemplate=function(t,e){var o,i,n,r,s;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)r=o.match(i)[1],s=null!=(n=this._getObjectProperty(e,r))?n:"",o=o.replace(i,function(){return""+s});return o},i.prototype._enforceSquare=function(t){var e,o;return(e=document.createElement("div")).setAttribute("class","instafeed-image-square"),o="height:0; overflow:hidden; position: relative; padding-top:100%;","objectFit"in document.documentElement.style==!0?(e.style.cssText=o,t.style.cssText="height: 100%; left: 0; object-fit:cover; position:absolute; top: 0; width: 100%;",e.appendChild(t.cloneNode())):e.style.cssText=o+" background-size:cover; background-repeat:no-repeat; background-position:center; background-image:url("+t.src+");",e},i.prototype._getObjectProperty=function(t,e){var o,i;for(i=(e=e.replace(/\[(\w+)\]/g,".$1")).split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},i.prototype._sortBy=function(t,n,r){var e;return e=function(t,e){var o,i;return o=this._getObjectProperty(t,n),i=this._getObjectProperty(e,n),r?i<o?1:-1:o<i?1:-1},t.sort(e.bind(this)),t},i.prototype._filter=function(t,e){var o,i,n,r;for(o=[],i=function(t){if(e(t))return o.push(t)},n=0,r=t.length;n<r;n++)i(t[n]);return o},i}(),e=this,o=function(){return t},"function"==typeof define&&define.amd?define([],o):"object"==typeof module&&module.exports?module.exports=o():e.Instafeed=o()}).call(this);

/*********************************************************************
*  #### Twitter Post Fetcher v18.0.2 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(0,function(){var y="",_=1,T=!0,k=[],C=!1,E=!0,N=!0,x=null,A=!0,B=!0,I=null,L=!0,M=!1,z=!1,j=!0,i="en",q=!0,H=!1,a=null;function P(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function F(e){for(var t=e.getElementsByTagName("a"),i=t.length-1;0<=i;i--)t[i].setAttribute("target","_blank"),t[i].setAttribute("rel","noopener")}function S(e,t){for(var i=[],a=new RegExp("(^| )"+t+"( |$)"),n=e.getElementsByTagName("*"),s=0,l=n.length;s<l;s++)a.test(n[s].className)&&i.push(n[s]);return i}function O(e){if(void 0!==e&&0<=e.innerHTML.indexOf("data-image")){var t=e.innerHTML.match(/data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i)[1];return decodeURIComponent(t)+".jpg"}}var R={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=1),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!1),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.useEmoji&&(e.useEmoji=!0),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),void 0===e.dataOnly&&(e.dataOnly=!1),C)k.push(e);else{C=!0,y=e.domId,_=e.maxTweets,T=e.enableLinks,N=e.showUser,E=e.showTime,B=e.showRetweet,x=e.dateFunction,I=e.customCallback,L=e.showInteraction,M=e.showImages,z=e.useEmoji,j=e.linksInNewWindow,q=e.showPermalinks,H=e.dataOnly;var t=document.getElementsByTagName("head")[0];null!==a&&t.removeChild(a),(a=document.createElement("script")).type="text/javascript",void 0!==e.list?a.src="https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug="+e.list.listSlug+"&screen_name="+e.list.screenName+"&suppress_response_codes=true&lang="+(e.lang||i)+"&rnd="+Math.random():void 0!==e.profile?a.src="https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name="+e.profile.screenName+"&suppress_response_codes=true&lang="+(e.lang||i)+"&rnd="+Math.random():void 0!==e.likes?a.src="https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name="+e.likes.screenName+"&suppress_response_codes=true&lang="+(e.lang||i)+"&rnd="+Math.random():a.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||i)+"&callback=__twttrf.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(a)}},callback:function(e){if(void 0===e||void 0===e.body)return C=!1,void(0<k.length&&(R.fetch(k[0]),k.splice(0,1)));z||(e.body=e.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"")),M||(e.body=e.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,"")),N||(e.body=e.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var t=document.createElement("div");function i(e){var t=e.getElementsByTagName("img")[0];if(t)t.src=t.getAttribute("data-src-2x");else{var i=e.getElementsByTagName("a")[0].getAttribute("href").split("twitter.com/")[1],a=document.createElement("img");a.setAttribute("src","https://twitter.com/"+i+"/profile_image?size=bigger"),e.prepend(a)}return e}t.innerHTML=e.body,void 0===t.getElementsByClassName&&(A=!1);var a=[],n=[],s=[],l=[],r=[],o=[],c=[],m=0;if(A)for(var d=t.getElementsByClassName("timeline-Tweet");m<d.length;)0<d[m].getElementsByClassName("timeline-Tweet-retweetCredit").length?r.push(!0):r.push(!1),(!r[m]||r[m]&&B)&&(a.push(d[m].getElementsByClassName("timeline-Tweet-text")[0]),o.push(d[m].getAttribute("data-tweet-id")),N&&n.push(i(d[m].getElementsByClassName("timeline-Tweet-author")[0])),s.push(d[m].getElementsByClassName("dt-updated")[0]),c.push(d[m].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==d[m].getElementsByClassName("timeline-Tweet-media")[0]?l.push(d[m].getElementsByClassName("timeline-Tweet-media")[0]):l.push(void 0)),m++;else for(d=S(t,"timeline-Tweet");m<d.length;)0<S(d[m],"timeline-Tweet-retweetCredit").length?r.push(!0):r.push(!1),(!r[m]||r[m]&&B)&&(a.push(S(d[m],"timeline-Tweet-text")[0]),o.push(d[m].getAttribute("data-tweet-id")),N&&n.push(i(S(d[m],"timeline-Tweet-author")[0])),s.push(S(d[m],"dt-updated")[0]),c.push(S(d[m],"timeline-Tweet-timestamp")[0]),void 0!==S(d[m],"timeline-Tweet-media")[0]?l.push(S(d[m],"timeline-Tweet-media")[0]):l.push(void 0)),m++;a.length>_&&(a.splice(_,a.length-_),n.splice(_,n.length-_),s.splice(_,s.length-_),r.splice(_,r.length-_),l.splice(_,l.length-_),c.splice(_,c.length-_));var p=[],u=(m=a.length,0);if(H)for(;u<m;)p.push({tweet:a[u].innerHTML,author:n[u]?n[u].innerHTML:"Unknown Author",author_data:{profile_url:n[u]?n[u].querySelector('[data-scribe="element:user_link"]').href:null,profile_image:n[u]?"https://twitter.com/"+n[u].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1]+"/profile_image?size=bigger":null,profile_image_2x:n[u]?"https://twitter.com/"+n[u].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1]+"/profile_image?size=original":null,screen_name:n[u]?n[u].querySelector('[data-scribe="element:screen_name"]').title:null,name:n[u]?n[u].querySelector('[data-scribe="element:name"]').title:null},time:s[u].textContent,timestamp:s[u].getAttribute("datetime").replace("+0000","Z").replace(/([\+\-])(\d\d)(\d\d)/,"$1$2:$3"),image:O(l[u]),rt:r[u],tid:o[u],permalinkURL:void 0===c[u]?"":c[u].href}),u++;else for(;u<m;){if("string"!=typeof x){var g=s[u].getAttribute("datetime"),h=new Date(s[u].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),f=x(h,g);if(s[u].setAttribute("aria-label",f),a[u].textContent)if(A)s[u].textContent=f;else{var w=document.createElement("p"),b=document.createTextNode(f);w.appendChild(b),w.setAttribute("aria-label",f),s[u]=w}else s[u].textContent=f}var v="";T?(j&&(F(a[u]),N&&F(n[u])),N&&(v+='<div class="user">'+P(n[u].innerHTML)+"</div>"),v+='<p class="tweet"><i class="fas fa-quote-left"></i>  '+P(a[u].innerHTML)+'  <i class="fas fa-quote-right"></i></p>',E&&(v+=q?'<p class="timePosted"><a href="'+c[u]+'">'+s[u].getAttribute("aria-label")+"</a></p>":'<p class="timePosted">'+s[u].getAttribute("aria-label")+"</p>")):(a[u].textContent,N&&(v+='<p class="user">'+n[u].textContent+"</p>"),v+='<p class="tweet">'+a[u].textContent+"</p>",E&&(v+='<p class="timePosted">'+s[u].textContent+"</p>")),M&&void 0!==l[u]&&void 0!==O(l[u])&&(v+='<div class="media"><img src="'+O(l[u])+'" alt="Image from tweet" /></div>'),L&&(v+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+o[u]+'" class="twitter_reply_icon"'+(j?' target="_blank" rel="noopener">':">")+'<i class="fas fa-reply"></i></a><a href="https://twitter.com/intent/retweet?tweet_id='+o[u]+'" class="twitter_retweet_icon"'+(j?' target="_blank" rel="noopener">':">")+'<i class="fas fa-retweet"></i></a><a href="https://twitter.com/intent/favorite?tweet_id='+o[u]+'" class="twitter_fav_icon"'+(j?' target="_blank" rel="noopener">':">")+'<i class="fas fa-heart"></i></a></p>'),M?p.push(v):!M&&a[u].textContent.length&&p.push(v),u++}!function(e){if(null===I){for(var t=e.length,i=0,a=document.getElementById(y),n="<ul>";i<t;)n+="<li>"+e[i]+"</li>",i++;n+="</ul>",a.innerHTML=n}else I(e)}(p),C=!1,0<k.length&&(R.fetch(k[0]),k.splice(0,1))}};return window.__twttrf=R,window.twitterFetcher=R}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();e.forEach(function(e){var t=e instanceof Node;i.appendChild(t?e:document.createTextNode(String(e)))}),this.insertBefore(i,this.firstChild)}})});var config3={id:"457641628446908416",domId:"tweetdeck"};twitterFetcher.fetch(config3);

$(document).ready(function(){var d,n,e=[];if(1<".post-labels a".length){$(".post-labels a").each(function(){e.push($(this).text().trim())}),d=e[Math.floor(e.length*Math.random())];var t=e.indexOf(d);n=t===e.length-1?e[t-1]:e[t+1]}if(void 0!==d){var s=$(".entry-title").text().trim(),i=0,o=0,c=[],r=$('link[rel="alternate"][title*="Atom"]').eq(0).attr("href");$.ajax({url:r,data:{"max-results":20,alt:"json-in-script"},dataType:"jsonp",success:function(f){$.each(f.feed.entry,function(e,t){if(void 0!==f.feed.entry[e].category){for(var r=[],a=0;a<f.feed.entry[e].category.length;a++)r.push(f.feed.entry[e].category[a].term);-1!==$.inArray(d,r)&&i++,-1!==$.inArray(n,r)&&o++}}),i<=0&&0<=o&&(d=n),$.each(f.feed.entry,function(e,t){if(void 0!==f.feed.entry[e].category){for(var r=[],a=0;a<f.feed.entry[e].category.length;a++)r.push(f.feed.entry[e].category[a].term);if(-1!==$.inArray(d,r)){var n=f.feed.entry[e].title.$t.trim();if(n!==s){for(var i,o,l=0;l<f.feed.entry[e].link.length;l++)"alternate"===f.feed.entry[e].link[l].rel&&(i=f.feed.entry[e].link[l].href);void 0!==f.feed.entry[e].media$thumbnail&&(o=f.feed.entry[e].media$thumbnail.url.split(/s72-c/).join("s300-c")),c.push('<li><img style="background:url('+o+') 0 center no-repeat;background-size:100%;" nopin="nopin"/><a href="'+i+'">'+n+"</a></li>")}}}}),$(".post-footer-share").after('<div class="related-posts"><div class="header-box"><p>YOU MIGHT ALSO LIKE</p></div><ul></ul></div>'),c.sort(function(){return.5-Math.random()});for(var e=0;e<3;e++)$(".related-posts ul").append(c[e]);$(".post-footer-share").css("clear","both")}})}});
