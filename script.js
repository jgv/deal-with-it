if (!jQuery) {

    var e = document.createElement("script");
    e.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js";
    e.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(e);

}
    
deal(document).ready(function(){
    var deal = jQuery.noConflict();
    var width = deal(window).width(); 
    var height = deal(window).height();
    var glasses_w = 321;
    var glasses_h = 52;

    var glasses_top = (height / 2) - glasses_h;
    var glasses_left (width / 2) - glasses_w;

    var img = "<img width='" + glasses_w + "'";
    var img += "height='" + glasses_h + "'";
    var img += "style='position:absolute; top:" + glasses_top + "; left:" + glasses_left + "'";
    var img += "src='https://github.com/jgv/deal-with-it/raw/master/glasses.png'>";

    document.getElementsByTagName("body")[0].appendChild(img) 

});


