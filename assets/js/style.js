$(document).ready(function(){
    $('.slider-onboarding').slick({
      arrows: false,
      dots: true,
      infinite: true,
    });
});

$(document).ready(function(){
  $('.slider-dashboard').slick({
    arrows: false,
    dots: true,
    infinite: true,
  });
});

function openSidebar(){
  document.getElementById("sidebar").style.width = "200px";
}

function closeSidebar(){
  document.getElementById("sidebar").style.width = "0px";
}