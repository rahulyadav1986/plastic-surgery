

$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .container',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#testimonial-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText:[
        ("<span><img src='images/l_arrow.png' /></span>"),
        ("<span><img src='images/r_arrow.png' /></span>"),
    ],
	dots:true,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
jQuery('#testimonial-carousel2').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText:[
        ("<span><img src='images/l_arrow.png' /></span>"),
        ("<span><img src='images/r_arrow.png' /></span>"),
    ],
	dots:true,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery('#before_after-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText:[
        ("<span><img src='images/l_arrow.png' /></span>"),
        ("<span><img src='images/r_arrow.png' /></span>"),
    ],
	dots:true,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
    jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  jQuery(".collapse").on('show.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });


  jQuery(".card .card-header:first").addClass("active").show(); //Activate first tab

  jQuery(".card-header").on('click', '.card-header', function(){    
    if (jQuery(this).find('.accordion-toggle').hasClass('active')) {        
    }
    

 })











