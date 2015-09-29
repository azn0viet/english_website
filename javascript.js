(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
		$('.dropdown').on('hover', function(event) { 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
			event.preventDefault(); 
			event.stopPropagation();
		});
		$("select[name='reason']").change(function() { 
		   $(".service").addClass("hidden");
		   $('#'+$(this).val()).removeClass("hidden");
		})
	});
})(jQuery);