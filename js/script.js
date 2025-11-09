//ドロワー機能

jQuery("#js_drawer_icon").on("click", function(e){
    e.preventDefault();
    jQuery("#js_drawer_icon").toggleClass("is_checked");
    jQuery("#js_drawer_content").toggleClass("is_checked");
});

jQuery(".js-accordion").on("click", function(e){
    e.preventDefault();

    if(jQuery(this).parent().hasClass("is_open")){
        jQuery(this).parent().removeClass("is_open");
        jQuery(this).next().slideUp();
    }else{        
        jQuery(this).parent().addClass("is_open");
        jQuery(this).next().slideDown();
    };

});

//swiper 

const swiper = new Swiper('#js-gallery-swiper', {
  spaceBetween: 82,
  // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '#js-gallery-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#js-gallery-next',
      prevEl: '#js-gallery-prev',
    },
});

//モーダル機能

jQuery("#js-modal-open").on("click", function(e){
  e.preventDefault();

  jQuery("#js-about-modal")[0].showModal();
});

jQuery(".js-modal-close").on("click",function(){

  jQuery("#js-about-modal")[0].close();
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

//トップへ戻るアイコンのスクロール非表示

jQuery(window).on("scroll", function(){
  if(jQuery(window).scrollTop() > 100){
    jQuery("#js-page-top").addClass("is_show");
  }else{
    jQuery("#js-page-top").removeClass("is_show");
  };
});


const intersectionObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add("is-in-view");
    }else{
      entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem){
  intersectionObserver.observe(inViewItem);
})