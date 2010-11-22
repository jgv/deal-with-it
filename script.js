if (typeof jQuery == 'undefined') {
	  var jQ = document.createElement('script');
	  jQ.type = 'text/javascript';
	  jQ.onload==runthis;
	  jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	  document.body.appendChild(jQ);
    var deal = jQuery.noConflict();    
    var dealing_with_it = false;
    if(deal.ui && !dealing_with_it){
	      dealwithit();
    } else {
	      var jQui = document.createElement('script');
	      jQui.type = 'text/javascript';
	      jQui.onload==runthis;
	      jQui.src = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js';
	          document.body.appendChild(jQui);
        if (!dealing_with_it){
            dealwithit();
        }
    }
}

function dealwithit() {
    var dealing_with_it = true;
            
    function getScrollTop(){
        if(typeof pageYOffset!= 'undefined'){
            //most browsers
            return pageYOffset;
        } else { 
            var BROWSERS= document.body; //IE 'quirks'
            var D= document.documentElement; //IE with doctype
            D= (D.clientHeight)? D: B;
            return D.scrollTop;
        }
    }
    var width = deal(window).width(); 
    var height = deal(window).height();
    var glasses_w = 321;
    var glasses_h = 52;
    var deal_w = 322;
    var deal_h = 34;
    
    
    var glasses_top = (height / 2) - glasses_h;
    var glasses_left = (width / 2) - (glasses_w / 2);

    glasses_left += "px"
    var css = document.createElement("link");
		css.setAttribute("href", "https://github.com/jgv/deal-with-it/raw/master/deal.css");
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("type", "text/css");
		document.getElementsByTagName("head")[0].appendChild(css);
    
    var img = document.createElement("div");
    img.id = "deal_with_it";

    var html = "<img width='" + glasses_w + "'";
    html += "height='" + glasses_h + "'";
    html += "src='https://github.com/jgv/deal-with-it/raw/master/glasses.png'>";
    html += "<br />";
    html += "<br />";
    html += "<img width='" + deal_w + "'";
    html += "height='" + deal_h + "'";
    html += "style='display:none'";
    html += "id='deal_with_it_text'";
    html += "src='https://github.com/jgv/deal-with-it/raw/master/deal.png'>";
    
    img.innerHTML = html; 
    document.getElementsByTagName("body")[0].appendChild(img);
    var deal_div = deal("#deal_with_it");

  //  var deal_scrollTop = deal(window).scrollTop();
    var deal_scrollTop = getScrollTop();
    console.log("scrolltop function: " + getScrollTop());
    console.log('scrolltop: ' + deal_scrollTop);
    var top = deal_scrollTop - glasses_h;
    top += "px";
    var middle = deal_scrollTop + glasses_top;
    middle += "px";
    console.log('top: ' + top);
    console.log('middle: ' + middle);
    deal_div.css({ "top" : top, "left" : glasses_left, "display" : "block" } );
    
    deal_div.animate({"top":  middle }, 4000, function() { 
        deal("#deal_with_it_text").css("display", "block");
        deal_div.draggable();
    });
}    
/*
if (!window.dealing_with_it && JQuery && deal.ui) {
    new dealwithit();
}
*/
