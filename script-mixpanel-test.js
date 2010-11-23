(function(){
    
    var getScript = function(url,success){
        var script=document.createElement('script');
        script.src=url;
        var head=document.getElementsByTagName('head')[0],
        done=false;
        // Attach handlers form all browsers
        script.onload=script.onreadystatechange = function(){
            if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
                done=true;
                success();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            }
        };
        head.appendChild(script);
    };
    
    var dealwithit = function() {
        var dealing_with_it = true;
        var deal = jQuery.noConflict();        

        function getScrollTop(){
            if(typeof pageYOffset!= 'undefined'){
                //most browsers
                return pageYOffset;
            } else { 
                var browsers= document.body; //IE 'quirks'
                var d= document.documentElement; //IE with doctype
                d= (d.clientHeight)? d: b;
                return d.scrollTop;
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
        glasses_left += "px";

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
        
        var deal_scrollTop = getScrollTop();
        
        var top = deal_scrollTop - glasses_h;
        top += "px";
        
        var middle = deal_scrollTop + glasses_top;
        middle += "px";
        
        deal_div.css({ "top" : top, "left" : glasses_left, "display" : "block" } );        
        deal_div.animate({"top":  middle }, 4000, function() { 
            deal("#deal_with_it_text").css("display", "block");
            deal_div.draggable();
        });
        
        /* mixpanel */
        var mp_protocol = (('https:' == document.location.protocol) ? 'https://' : 'http://'); document.write(unescape('%3Cscript src="' + mp_protocol + 'api.mixpanel.com/site_media/js/api/mixpanel.js" type="text/javascript"%3E%3C/script%3E')); 
        try {  
            var mpmetrics = new MixpanelLib('630376491575008072dbd405de6fed5d'); }
        catch(err) { null_fn = function () {}; var mpmetrics = {  track: null_fn,  track_funnel: null_fn,  register: null_fn,  register_once: null_fn, register_funnel: null_fn }; } 

        mpmetrics.track("clicked bookmarklet");
        /* end-mixpanel */
    };

    if (typeof jQuery!='undefined') {  //jq is true
        var deal = jQuery.noConflict();
        if (deal.ui) { // ui is true
            dealwithit();
        } else { // ui is false, jq is true
            getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js', function() {  // load ui
                if(deal.ui) {
                    dealwithit();
                } else {
                    alert('error loading jquery ui');
                }    
            });
        }
    }
             
    if (typeof jQuery == 'undefined') { // ui is false
        // more or less stolen form jquery core and adapted by paul irish        
        getScript('http://code.jquery.com/jquery-latest.min.js',function() { // load jq
            if (typeof jQuery=='undefined') {
                alert('error: yalls');
            } else {
                var deal = jQuery.noConflict();
            }
            if (deal.ui) { // jq true, ui true
                dealwithit();
            } else { // jq true, ui is false
                getScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js', function() { // load ui
                    if(deal.ui) {
                        dealwithit();
                    } else {
                        alert('error loading jquery ui');
                    }              
                }); 
            }
        }); // end callback from loadin jq
    }
})();
