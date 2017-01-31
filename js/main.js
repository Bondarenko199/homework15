$(function() {

    $('#owl-one').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        dotsEach:true,
        // navClass:["custom-owl-prev", "custom-owl-next"],
        navText:[],
        smartSpeed: 1000
    });


    var menuButton = $("#menu-button");

    menuButton.on("click", function(){
        $(this).toggleClass("change");
        $("#nav-list").slideToggle(300);
    });
});
