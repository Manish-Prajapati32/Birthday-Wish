$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.main-container').fadeIn('fast');
});

$(document).ready(function () {
    var vw;

    function resizeBalloons() {
        vw = $(window).width() / 2;
        var b1_pos = vw - (vw * 0.4);
        var b2_pos = vw - (vw * 0.2);
        var b3_pos = vw;
        var b4_pos = vw + (vw * 0.2);
        var b5_pos = vw + (vw * 0.4);
        var b6_pos = vw + (vw * 0.6);

        $('#b11').css('left', b1_pos);
        $('#b22').css('left', b2_pos);
        $('#b33').css('left', b3_pos);
        $('#b44').css('left', b4_pos);
        $('#b55').css('left', b5_pos);
        $('#b66').css('left', b6_pos);
    }

    $(window).resize(resizeBalloons);

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow', function () {
            setTimeout(function() {
                $('#play').fadeIn('slow');
            }, 5000);
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
        $('body').addClass('peach-after');
        $(this).fadeOut('slow', function () {
            setTimeout(function() {
                $('#bannar_coming').fadeIn('slow');
            }, 6000);
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow', function () {
            setTimeout(function() {
                $('#balloons_flying').fadeIn('slow');
            }, 6000);
        });
    });

    function loopOne() {
        var randleft = $(window).width() * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({ left: randleft, bottom: randtop }, 10000, loopOne);
    }
    function loopTwo() {
        var randleft = $(window).width() * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({ left: randleft, bottom: randtop }, 10000, loopTwo);
    }
    function loopThree() {
        var randleft = $(window).width() * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({ left: randleft, bottom: randtop }, 10000, loopThree);
    }
    function loopFour() {
        var randleft = $(window).width() * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({ left: randleft, bottom: randtop }, 10000, loopFour);
    }
    function loopFive() {
        var randleft = $(window).width() * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({ left: randleft, bottom: randtop }, 10000, loopFive);
    }
    function loopSix() {
        var randleft = $(window).width() * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({ left: randleft, bottom: randtop }, 10000, loopSix);
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

        $(this).fadeOut('slow', function () {
            setTimeout(function() {
                $('#cake_fadein').fadeIn('slow');
            }, 5000);
        });
    });

    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow').addClass('bounce-in');
        $(this).fadeOut('slow', function () {
            setTimeout(function() {
                $('#light_candle').fadeIn('slow');
            }, 3000);
        });
    });

    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow', function () {
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
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');

        $('#b11').animate({ top: 140, left: b1_pos }, 500);
        $('#b22').animate({ top: 140, left: b2_pos }, 500);
        $('#b33').animate({ top: 140, left: b3_pos }, 500);
        $('#b44').animate({ top: 140, left: b4_pos }, 500);
        $('#b55').animate({ top: 140, left: b5_pos }, 500);
        $('#b66').animate({ top: 140, left: b6_pos }, 500);

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        window.startConfetti();
        $(this).fadeOut('slow', function () {
            setTimeout(function() {
                $('#story').fadeIn('slow');
            }, 3000);
        });
    });

    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast', function () {
            $('.message').fadeIn('slow');
        });

        function msgLoop(i) {
            $(".message-content p:nth-child(" + i + ")").fadeOut('slow', function () {
                i++;
                if (i < 50) {
                    $(".message-content p:nth-child(" + i + ")").fadeIn('slow', function() {
                        setTimeout(function() {
                            msgLoop(i);
                        }, 1000);
                    });
                } else {
                    $(".message-content p:nth-child(49)").fadeOut('slow', function () {
                        $('.cake').fadeIn('fast');
                    });
                }
            });
        }

        msgLoop(0);
    });

    resizeBalloons(); // Initial positioning
});