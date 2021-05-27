document.addEventListener("DOMContentLoaded",function(){
const homeBtn = $("nav .menu-btn li").eq(0);
const featuresBtn = $("nav .menu-btn li").eq(1);
const servicesBtn = $("nav .menu-btn li").eq(2);
const aboutBtn = $("nav .menu-btn li").eq(3);
const pricingBtn = $("nav .menu-btn li").eq(4);
const teamBtn = $("nav .menu-btn li").eq(5);
const contactBtn = $("nav .menu-btn li").eq(6);
const html = document.querySelector("html");
const sectionId = ["#header","#feature","#hosting","#about","#pricing","#team","#contact"];

animateCSS('.head-title', 'fadeInUp');
function changeActive(btnName){
    $("nav .menu-btn li").removeClass("active");
    btnName.addClass("active");
    $(".navbar-toggler").removeClass("collapsed");
    $(".navbar-collapse").removeClass("show");
}

function scrolling(sectionName){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(sectionName).offset().top
    }, 1000);
}

$("nav .menu-btn li").click(function(){
    var number = 6 - $(this).nextAll().length;
    changeActive($(this));
    scrolling(sectionId[number]);
})

$(".start-btn").click(function(){
    scrolling(sectionId[1]);
})

$(window).scroll(function(){
    if (html.scrollTop < $("#feature").offset().top - 10) {
        changeActive(homeBtn);
    }else if (html.scrollTop < $("#hosting").offset().top - 10) {
        changeActive(featuresBtn);
    }else if (html.scrollTop < $("#about").offset().top - 10) {
        changeActive(servicesBtn);
    }else if (html.scrollTop < $("#pricing").offset().top - 10) {
        changeActive(aboutBtn);
    }else if (html.scrollTop < $("#team").offset().top - 10) {
        changeActive(pricingBtn);
    }else if (html.scrollTop < $("#contact").offset().top - 10) {
        changeActive(teamBtn);
    }else if (html.scrollTop > $("#contact").offset().top - 10) {
        changeActive(contactBtn);
    }
    
if (html.scrollTop === 0){
    animateCSS('.head-title', 'fadeInUp');
}
})
    
})

// animation function 

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
