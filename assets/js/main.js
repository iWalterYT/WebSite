//Copyright (c) 2025 Created By @iWalterYT
// Scrollspy
var spy = new Gumshoe('#nav  a');
// Burger
   $('.burger').on('click', function (event) {
        $(this).toggleClass('open');
        $('.navigation-bar').toggleClass('show');
    })

    // Darkmode
    $('.darkmode-btn').on('click', function (event) {
        $('body').toggleClass('darkmode');
    })

    // modal
    $('.btn-view').on('click', function (event) {
        $('.modal-container').addClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container').removeClass('active');
    })
// بررسی حالت ذخیره شده هنگام لود صفحه
const darkStored = localStorage.getItem('darkMode');

if(darkStored === 'true') {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}

// تابع برای تغییر دارک/لایت
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
}

// اضافه کردن به دکمه
document.querySelectorAll('.darkmode-btn').forEach(btn => {
    btn.addEventListener('click', toggleDarkMode);
});

// Sticky navbar
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('fixed');
		 }
		else {
			$('header').removeClass('fixed');
		 }
	});
});
// Scroll to TOP
var btn = $('.scrollup');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

    // testmonial
    $('.testmonial-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 700,
        margin:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })