/**
 * ローディングアニメーション用の関数
 */
// 表示
function show_txt() {
  $('.loader img').fadeIn(400);
}
// 非表示
function hide_txt() {
  $('.loader img').fadeOut(400);
}
// ローダー終了
function end_loader() {
  $('.loader').fadeOut(800);
}

/**
 * テキストを１文字ずつ表示するアニメーション用の関数
 */
 function EachTextAnimeControl() {
  $('section .body p').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
    } else {
      $(this).removeClass("appeartext");
    }
  });
}

/**
 * スライドインアニメーション用の関数
 */
 function slideinAnime(){
  $('.slideinAnime').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      // 上から下へ表示するクラスを付与
      $(this).addClass("slideinAnimeUpDown");
      // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
      $(this).children(".slideinAnimeInner").addClass("slideinAnimeDownUp");
      // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      // 上から下へ表示するクラスを取り除く
      $(this).removeClass("slideinAnimeUpDown");
      $(this).children(".slideinAnimeInner").removeClass("slideinAnimeDownUp");
      }
  });
}

/**
 * 画面をスクロールした時の処理
 */ 
 $(window).scroll(function() {
  
  // テキストを1文字ずつ表示するアニメーション
  EachTextAnimeControl();

  // スライドインアニメーション
  slideinAnime();
})

/**
 * 画面が読み込まれた時の処理
 */ 
 $(window).on('load', function () {

  // ローディングアニメーション
  setTimeout(function () {
    show_txt();
  }, 0)
  setTimeout(function () {
    hide_txt();
  }, 2000)
  setTimeout(function () {
    end_loader();
  }, 2500)
  
  // テキストを１文字ずつ表示するアニメーション
  var elements = $("section .body p");
  elements.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        var n = i / 50; // ここで表示速度を調整する
        textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
  EachTextAnimeControl();
});

/**
 * スライドショー
 */
 $(function(){
  $('.slider').slick({
    autoplay:true, //自動再生する
    autoplaySpeed:3000, //自動再生するスピード
    dots:true, //ドット部分を表示する
    arrows: false, // 矢印を表示しない
    infinite:true, //無限にスライドする
    fade:true, //フェードする
    speed:1000 //フェードするスピード
  });
});

/**
 * スクロール時にヘッダーの外観を変更する
 */
 $(function() {
	var _window = $(window),
		_header = $('header'),
    _headerLogo = $('.header_logo'),
		topSectionBottom;
	
	_window.on('scroll',function() {
		topSectionBottom = $('.top').height();
		if(_window.scrollTop() > topSectionBottom - 50) {
			_header.addClass('scrolled');
      _headerLogo.addClass('scrolled'); 
		}
		else {
			_header.removeClass('scrolled');
      _headerLogo.removeClass('scrolled');
		}
	});
	_window.trigger('scroll');	
});
