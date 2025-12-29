$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.main-container').fadeIn('fast');
});
$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		var b1_pos = vw - (vw * 0.4); // 10% from center
		var b2_pos = vw - (vw * 0.2); // 20% from center
		var b3_pos = vw; // 30% from center
		var b4_pos = vw + (vw * 0.2); // 40% from center
		var b5_pos = vw + (vw * 0.4); // 50% from center
		var b6_pos = vw + (vw * 0.6); // 60% from center


		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b11').animate({ top: 140, left: b1_pos }, 500);
		$('#b22').animate({ top: 140, left: b2_pos }, 500);
		$('#b33').animate({ top: 140, left: b3_pos }, 500);
		$('#b44').animate({ top: 140, left: b4_pos }, 500);
		$('#b55').animate({ top: 140, left: b5_pos }, 500);
		$('#b66').animate({ top: 140, left: b6_pos }, 500);
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = $(window).width() * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = $(window).width() * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = $(window).width() * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = $(window).width() * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = $(window).width() * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = $(window).width() * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}


	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b3,#b4,#b6').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b5').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();

		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').addClass('bounce-in').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});


	$('#wish_message').click(function () {
		vw = $(window).width() / 2;
		var b1_pos = vw - (vw * 0.4);
		var b2_pos = vw - (vw * 0.2);
		var b3_pos = vw;
		var b4_pos = vw + (vw * 0.2);
		var b5_pos = vw + (vw * 0.4);
		var b6_pos = vw + (vw * 0.6);

		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b11').animate({ top: 140, left: b1_pos }, 500);
		$('#b22').animate({ top: 140, left: b2_pos }, 500);
		$('#b33').animate({ top: 140, left: b3_pos }, 500);
		$('#b44').animate({ top: 140, left: b4_pos }, 500);
		$('#b55').animate({ top: 140, left: b5_pos }, 500);
		$('#b66').animate({ top: 140, left: b6_pos }, 500);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		window.startConfetti(); // Trigger confetti
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop(i) {
			$(".message-content p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
				i = i + 1;
				$(".message-content p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
				if (i == 50) {
					$(".message-content p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});

				}
				else {
					msgLoop(i);
				}

			});
			// body...
		}

		msgLoop(0);
	});
});




//alert('hello');