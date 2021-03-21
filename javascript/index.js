var homeBtn = document.querySelectorAll("nav .menu-btn a")[0];
var featuresBtn = document.querySelectorAll("nav .menu-btn a")[1];
var servicesBtn = document.querySelectorAll("nav .menu-btn a")[2];
var aboutBtn = document.querySelectorAll("nav .menu-btn a")[3];
var pricingBtn = document.querySelectorAll("nav .menu-btn a")[4];
var teamBtn = document.querySelectorAll("nav .menu-btn a")[5];
var contactBtn = document.querySelectorAll("nav .menu-btn a")[6];
var html = document.querySelector("html");

function changeActive(ActiveBtn){
    homeBtn.classList.remove("active");
    servicesBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    pricingBtn.classList.remove("active");
    teamBtn.classList.remove("active");
    contactBtn.classList.remove("active");
    featuresBtn.classList.remove("active");
    ActiveBtn.classList.add("active");
}

homeBtn.addEventListener("click",function(){
    changeActive(homeBtn);
    html.scrollTo(0,0);
})
featuresBtn.addEventListener("click",function(){
    changeActive(featuresBtn);
    html.scrollTo(0,545);
})
servicesBtn.addEventListener("click",function(){
    changeActive(servicesBtn);
    html.scrollTo(0,1234);
})
aboutBtn.addEventListener("click",function(){
    changeActive(aboutBtn);
    html.scrollTo(0,1861);
})
pricingBtn.addEventListener("click",function(){
    changeActive(pricingBtn);
    html.scrollTo(0,2620);
})
teamBtn.addEventListener("click",function(){
    changeActive(teamBtn);
    html.scrollTo(0,4236);
})
contactBtn.addEventListener("click",function(){
    changeActive(contactBtn);
    html.scrollTo(0,5696);
})

window.addEventListener("scroll",function(){
    if (html.scrollTop < 467) {
        changeActive(homeBtn);
    } else if (html.scrollTop < 1168) {
        changeActive(featuresBtn);
    }else if (html.scrollTop < 1779) {
        changeActive(servicesBtn);
    }else if (html.scrollTop < 2592) {
        changeActive(aboutBtn);
    }else if (html.scrollTop < 4140) {
        changeActive(pricingBtn);
    }else if (html.scrollTop < 5564) {
        changeActive(teamBtn);
    }else if (html.scrollTop > 5564) {
        changeActive(contactBtn);
    }
})
