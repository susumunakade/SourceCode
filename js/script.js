//ドロワー機能 headerセクション

jQuery("#js_drawer_icon").on("click", function(e){
    e.preventDefault();
    jQuery("#js_drawer_icon").toggleClass("is_checked");
    jQuery("#js_drawer_content").toggleClass("is_checked");
});

//アコーディオン qaセクション

jQuery(".js-accordion").on("click", function(e){
    e.preventDefault();

    if(jQuery(this).parent().hasClass("qa__is_open")){
        jQuery(this).parent().removeClass("qa__is_open");
        jQuery(this).next().slideUp();
    }else{        
        jQuery(this).parent().addClass("qa__is_open");
        jQuery(this).next().slideDown();
    };

});

//トップへ戻るアイコンのスクロール非表示

jQuery(window).on("scroll", function(){
  if(jQuery(window).scrollTop() > 300){
    jQuery("#js-page-top").addClass("is_show");
  }else{
    jQuery("#js-page-top").removeClass("is_show");
  };
});

//スムーススクロール

jQuery('a[href^="#"]').on("click", function(e){
  e.preventDefault();

  const speed = 500;
  const id = jQuery(this).attr("href");
  const target = jQuery(id === "#" ? "html" : id);
  const position = jQuery(target).offset().top;

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

//モーダル機能 prizesセクション
//sweets
jQuery("#prizes__card_sweets").on("click", function(){
    jQuery("#prizes__modal_sweets").fadeIn();
});

jQuery(".prizes__modal_button").on("click", function(){
    jQuery("#prizes__modal_sweets").fadeOut();
});

//cat
jQuery("#prizes__card_cat").on("click", function(){
    jQuery("#prizes__modal_cat").fadeIn();
});

jQuery(".prizes__modal_button").on("click", function(){
    jQuery("#prizes__modal_cat").fadeOut();
});

//noodle
jQuery("#prizes__card_noodle").on("click", function(){
    jQuery("#prizes__modal_noodle").fadeIn();
});

jQuery(".prizes__modal_button").on("click", function(){
    jQuery("#prizes__modal_noodle").fadeOut();
});

//coffee
jQuery("#prizes__card_coffee").on("click", function(){
    jQuery("#prizes__modal_coffee").fadeIn();
});

jQuery(".prizes__modal_button").on("click", function(){
    jQuery("#prizes__modal_coffee").fadeOut();
});


//toto
jQuery("#prizes__card_toto").on("click", function(){
    jQuery("#prizes__modal_toto").fadeIn();
});

jQuery(".prizes__modal_button").on("click", function(){
    jQuery("#prizes__modal_toto").fadeOut();
});



//swiper aboutセクション
const about_swiper = new Swiper('.about__swiper', {
  // Optional parameters
    //   direction: 'vertical',
  loop: true,
  centeredSlides: true,        // センターに配置

    // ⬇️ 追加：自動再生設定
  autoplay: {
    delay: 0, // ← 0にすると止まらずに流れ続ける
    disableOnInteraction: false,  //on
  },

  // ⬇️ 追加：スライド速度（大きいほどゆっくり動く）
  speed: 4000, // 速度調整（ms）

  // ⬇️ 無限にスムーズに流れるようにCSSと合わせて必要
  freeMode: true, // スナップなしで滑らかに  on
  freeModeMomentum: true, // 惰性スクロールを無効に  on

  slidesPerView: 4,  // 1画面に表示する画像の数
  spaceBetween: 50,  // スライド間のスペース(px)

  breakpoints:{  //デフォルトSPサイズでブレイクポイント768pxで表示枚数変わる
    1000:{
      slidesPerView: 5,  // 1画面に表示する画像の数
      spaceBetween: 50,  // スライド間のスペース(px)
    },

    1400:{
      slidesPerView: 7,  // 1画面に表示する画像の数
      spaceBetween: 50,  // スライド間のスペース(px)
    },
  }


  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

// swiper spotsセクション

// 画面幅を取得してPCかどうかを判定
const isPC = window.matchMedia('(min-width: 767px)').matches;

const spots_swiper = new Swiper('.spots__swiper', {
  // Optional parameters
    //   direction: 'vertical',
  loop: true,
  centeredSlides: true,        // センターに配置

    // ⬇️ 追加：自動再生設定 全画面サイズでスライドする
  // autoplay: {
  //   delay: 0, // ← 0にすると止まらずに流れ続ける
  //   disableOnInteraction: false,
  // },

    // ⬇️ PCはautoplayしない。SPのみ autoplay 有効
  autoplay: isPC ? false : {
    delay: 0,
    disableOnInteraction: false,
  },

  // ⬇️ 追加：スライド速度（大きいほどゆっくり動く）
  speed: 3000, // 速度調整（ms）

  // ⬇️ 無限にスムーズに流れるようにCSSと合わせて必要
  freeMode: true, // スナップなしで滑らかに
   freeModeMomentum: false, // 惰性スクロールを無効に

  slidesPerView: 4,  //4 1画面に表示する画像の数
  spaceBetween: 16,  // スライド間のスペース(px)

  breakpoints:{  //デフォルトSPサイズでブレイクポイント768pxで表示枚数変わる
    768:{
      slidesPerView: 3,  //3 1画面に表示する画像の数
      spaceBetween: 32,  // スライド間のスペース(px)
      speed: 1000,  // スライドの速度
    },
  },


  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-next',
    prevEl: '#js-gallery-prev',
  },
});