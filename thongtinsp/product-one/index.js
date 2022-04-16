// Back-top
$(function(){
	$('a#login').click(function() {
		$("#test").fadeIn('slow');
		$('#box').addClass('out');
		return false;
	});
	$('#cancel').click(function() {
		$("#test").hide();
		$('#box').removeClass('out');
		return false;
	});

	// $('a#login').click(function() {
	// 	$('#box').fadeIn('slow');
	// 		$('form').fadeIn('slow');
	// });

	// $('#cancel').click(function() {
	// 	$('#box,form').hide();
	// });

	$('a#register').click(function() {
		$("#test").fadeIn('slow');
		$('#box2').addClass('out');
		return false;
	});
	$('#cancel2').click(function() {
		$("#test").hide();
		$('#box2').removeClass('out');
		return false;
	});
	// end login and register

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
		else $(".lentop").fadeOut();
			});
	$(".lentop").click(function () {
		$("body,html").animate({scrollTop: 0}, "slow");
			});
	// end lentop

	$(".thumb a").click(function(e) {
		e.preventDefault();
		$('.imgBox img').attr("src", $(this).attr("href"));
	});
	// contact
	$('.contactmenu').click(function(){
		$('html,body').animate({scrollTop:$('.footer1').offset().top}, "slow");
		return false;
	});
	$('.content-btn').click(function(){
		$('html,body').animate({scrollTop:$('.detail').offset().top}, "slow");
		return false;
	});
});
// test zoom

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = (offsetX / zoomer.offsetWidth) * 100
    y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + "% " + y + "%";
 }
