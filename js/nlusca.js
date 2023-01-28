$(document).ready(function(){
    
    setInterval(function(){
	$('img').each(function(){
		console.log('hola lusca');
	    if(!$(this).hasClass("luscad")){
		var number = 1 + Math.floor(Math.random() * 14);
		if(number < 11){
		    var image = chrome.extension.getURL("img/"+number+".jpg");
		}
		else{
		    var image = chrome.extension.getURL("img/"+number+".gif");
		}
		var width = $(this).width();
		var height = $(this).height();
		$(this).addClass("luscad");
		$(this).attr("src",image);
		$(this).width(width);
		$(this).height(height);
	    }
	});
    },200);
});