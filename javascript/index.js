var homeBtn = $("nav .menu-btn a").eq(0);
var featuresBtn = $("nav .menu-btn a").eq(1);
var servicesBtn = $("nav .menu-btn a").eq(2);
var aboutBtn = $("nav .menu-btn a").eq(3);
var pricingBtn = $("nav .menu-btn a").eq(4);
var teamBtn = $("nav .menu-btn a").eq(5);
var contactBtn = $("nav .menu-btn a").eq(6);
var html = document.querySelector("html");
var sectionId = ["#header","#feature","#hosting","#about","#pricing","#team","#contact"];

function changeActive(btnName){
    $("nav .menu-btn a").removeClass("active");
    btnName.addClass("active");
}

function scrolling(sectionName){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(sectionName).offset().top
    }, 1000);
}

$("nav .menu-btn a").click(function(){
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
})
