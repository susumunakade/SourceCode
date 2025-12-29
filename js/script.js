//  ハンバーガーメニューとドロワー

$("#js_button_drawer").on("click", function(){
    $(this).toggleClass("is_checked");
    $("#js_drawer").slideToggle();
    $("body").toggleClass("is_fixed");
    
});

// スクロールアニメーション

$(function () {
    // スクロール時の処理
    $(window).scroll(function () {

      // 対象要素に初期状態のスタイルを付与
      $(".scrollAnim").addClass("ready");
    
      // ウィンドウの高さを取得
      const windowHeight = $(this).height();
  
      // 現在の座標を取得
      const scrollAmount = $(this).scrollTop();
  
      $(".ready").each(function () {
        // 対象要素の座標を取得
        const targetPosition = $(this).offset().top;
  
        // 対象要素が画面内に入った時の処理
        console.log(scrollAmount);
        console.log(windowHeight);
        console.log(targetPosition);

        if (scrollAmount > targetPosition - windowHeight + 60) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
   });
});

// $(window).on("scroll", function(){
//     console.log($(window).scrollTop());
//     if($(this).scrollTop() > 80){
//         $(".service").fadeIn(3000);
//     }
// });

// $(window).on("scroll", function(){
//     if($(this).scrollTop() > 120){
//         $(".works").fadeIn(5000);
//     }
// });

// $(window).on("scroll", function(){
//     if($(this).scrollTop() > 470){
//         $(".about").fadeIn(5000);
//     }
// });

// $(window).on("scroll", function(){
//     if($(this).scrollTop() > 880){
//         $(".work_flow").fadeIn(5000);
//     }
// });

// $(window).on("scroll", function(){
//     if($(this).scrollTop() > 1100){
//         $(".message").fadeIn(5000);
//     }
// });

// $(window).on("scroll", function(){
//     if($(this).scrollTop() > 1700){
//         $(".page_bottom").fadeIn(6000);
//     }
// });




