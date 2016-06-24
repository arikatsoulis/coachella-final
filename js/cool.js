$(document).scroll(function() {
    console.log($(document).scrollTop());

    if($(document).scrollTop() > 2000) {
      $('.gonnahide').hide();
    
    } else {
    	$('.gonnahide').show();
    }

})
