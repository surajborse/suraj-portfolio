$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })



    var typed3 = new Typed('.type', {
        strings: ['Front End Developer.', 'UI Developer.', 'React.js Developer.'],
        typeSpeed: 60,
        backSpeed: 60,
        smartBackspace: true, // this is a default
        loop: true
    });
})

