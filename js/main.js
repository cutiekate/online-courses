


$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoWidth: true,
        responsive:{
            320:{
                items:1,
                autoWidth: false,
            },
            375:{
                items:1,
                autoWidth: false,
            },
            414:{
                items:1,
                autoWidth: false,
            },
            768:{
                items:1,
            }
        }
    })
    
});