var pause = function(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); } 
    while(curDate-date < millis);
} 

if (typeof jQuery === 'undefined') {

    var e = document.createElement("script");
    e.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js";
    e.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(e);

}

pause(2000);

if (jQuery){
 var deal = jQuery.noConflict();
    
deal(document).ready(function(){
    var width = deal(window).width(); 
    var height = deal(window).height();
    var glasses_w = 321;
    var glasses_h = 52;

    var glasses_top = (height / 2) - glasses_h;
    var glasses_left = (width / 2) - glasses_w;

    var css = document.createElement("link");
			css.setAttribute("href", "https://github.com/jgv/deal-with-it/raw/master/deal.css");
			css.setAttribute("rel", "stylesheet");
			css.setAttribute("type", "text/css");
			document.getElementsByTagName("head")[0].appendChild(css);

    var img = document.createElement("div");
    img.id = "deal_with_it";
    var html = "<img width='" + glasses_w + "'";
    html += "height='" + glasses_h + "'";
    html += "style='" + glasses_top + "; left:" + glasses_left + "'";
    html += "src='https://github.com/jgv/deal-with-it/raw/master/glasses.png'>";
//    img += "</div>";

    img.innerHTML = html; 
    document.getElementsByTagName("body")[0].appendChild(img);
    var deal_div = deal("#deal_with_it");
    deal_div.css({ "top" : glasses_top, "left" : glasses_left } );
    
});


}
