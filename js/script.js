// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var href = $(this).attr('href');
	// tangkap elemen yg bersangkutan
	var elemenHref = $(href);

	// pindahkan scroll
	$('html').animate({
		scrollTop: elemenHref.offset().top - 55
	}, 750, 'easeInOutExpo');
	e.preventDefault();
});

// parallax effect

// about : muncul ketika halaman di load
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
	$('.title-about').addClass('titleMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
    
    // jumbotron effect : delay scroll
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/6 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
	});
	
	// title/judul(h2) ditiap section kecuali about : muncul-geser ke kanan
	if(wScroll > $('.portfolio').offset().top - 500) {
		$('.title-portfolio').addClass('titleMuncul');
	}
	if(wScroll > $('.contact').offset().top - 500) {
		$('.title-contact').addClass('titleMuncul');
	}

	// portfolio : muncul 1-1
	if(wScroll > $('.portfolio').offset().top - 450 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('pfMuncul');
			},200 * (i+1));
		});
		// $('.portfolio .thumbnail').addClass('pfMuncul');
	}
});

