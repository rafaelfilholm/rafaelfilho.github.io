$(function () {
	$(".panel").click(function() {
		if($("#navbar").hasClass('in')){
			$(".navbar-toggle").trigger('click');
		}
	});
});