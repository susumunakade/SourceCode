//ドロワー機能

jQuery("#js_drawer_icon").on("click", function(e){
    e.preventDefault();
    jQuery("#js_drawer_icon").toggleClass("is_checked");
    jQuery("#js_drawer_content").toggleClass("is_checked");
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
  
  jQuery('#js_drawer_content a[href^="#"]').on("click", function(e){
    e.preventDefault();
  
    jQuery("#js_drawer_icon").removeClass("is_checked");
    jQuery("#js_drawer_content").removeClass("is_checked");
  
  });