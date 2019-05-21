
$(function(){

	//ハンバーガーメニュー
	$('.js-hum').on('click', function(){
 		$(this).toggleClass('on');
 	 	$('nav').fadeToggle(400);
 	});

	$('#timer2').yycountdown({
		endDateTime : '2019/06/19 15:00:00',  //カウントダウン終了日時
		unit : {d: '日', h: '時間', m: '分', s: '秒'},  //カウントダウン単位
		complete : function(_this){  //カウントダウン完了時のコールバック
	    	_this.find('.yycountdown-box').css({color:'red'});
	}
});

	$('.sl-wrap').slick({
		// dots: true,
		// dotsClass: 'slide-dots',
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		infinite: true,
		speed: 500,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev">◀︎</button>',
		nextArrow: '<button type="button" class="slick-next">▶︎</button>',
		cssEase: 'linear'
	});

	//スムーズスクロール
 	$('.backtop').on('click', function(){
 		//.animate({処理: どこまで処理するか}, 処理を行う秒数)
 		$('body, html').animate({scrollTop: 0}, 1000);
 	});

	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 1000; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
   });

	$(document).ready(function(){
		$('html').fadeIn(2000);
	});












});