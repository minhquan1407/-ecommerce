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
	// forgot-password
	$('a#forgot-pw').click(function() {
		$("#test").hide();
		$('#box').removeClass('out');
		$("#test").fadeIn('slow');
		$('#box3').addClass('out');
		return false;
	});
	$('#cancel3').click(function() {
		$("#test").hide();
		$('#box3').removeClass('out');
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

});

document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.body');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi100";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 100){
            if(trangthai == "duoi100")
            {
                trangthai="tren100";
                menu.classList.add('menutora');
            }
        }
        else{
            if(trangthai=="tren100"){
            menu.classList.remove('menutora');
            trangthai="duoi100";}
        }
    
    })
})