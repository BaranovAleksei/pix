$(function() {

// my function
	
	//Каруселька1
	var owl = $(".slider");
	
	owl.owlCarousel({
		loop: true,
		itemClass: "slide-wrap",
		responsive:{
		400:{
			items:3
		},
		1000:{
			items:3
		},
		1200:{
			items:4
		}
	}
	});

	$(".arrowRight").click(function(){
		owl.trigger("next.owl");
	});

	//Каруселька Middle
	var owlMiddle = $(".sliderMiddle");
	
	owlMiddle.owlCarousel({
		loop: true,
		itemClass: "slide-wrap",
		responsive:{
		400:{
			items:3
		},
		1000:{
			items:3
		},
		1200:{
			items:4
		}
	}
	});

	$(".arrowRightMiddle").click(function(){
		owlMiddle.trigger("next.owl");
	});
	
	//Каруселька Mobile
	var owlMob = $(".sliderMob");
	
	owlMob.owlCarousel({
		loop: true,
		itemClass: "slide-wrap",
		responsive:{
		250:{
			items:1
		},
		550:{
			items:2
		}
	}
	});

	$(".popup-with-zoom-anim").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".formQuestion").addClass("noVisible");
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.success').removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$(".menu button").click(function(){
			$(".menu button ").hide(150);
			$(".menuIndices").show(400);
		});

		$(".close").click(function(){
			$('.menuIndices').hide(200);
			$('.menu button').show(400);
			var curPos=$(document).scrollTop();
			$("body,html").animate({"scrollTop": curPos});
			return false;
		})

		$(".first").click(function(){
			$("body,html").animate({"scrollTop": 0});
			return false;
		});

		$(".second").click(function(){
			$("body,html").animate({"scrollTop": 1155});
			return false;
		});

		$(".last").click(function(){
			$("body,html").animate({"scrollTop": 2860});
			return false;
		});

});
