$(document).ready(function() {
	
	
	///// show-nav [START] //////////////////
	$('.btn__more').hover(function() {
  		$(this).closest('.subscription__item').addClass('animate');
  	},function() {
  		$(this).closest('.subscription__item').removeClass('animate');
  	})
  	$('.nav__btn--sp').on('click',function(e) {
      e.stopPropagation();
      $('.nav ul').slideToggle(300);
      $(this).toggleClass('active');
  	})
	});