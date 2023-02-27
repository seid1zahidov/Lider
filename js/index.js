$('.brend-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".xidemetler_right button").click(function(){
    $(".xidemetler_right button").removeClass("active")
    $(this).addClass("active")
})