import 'jquery';
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import owlCarousel from 'owl.carousel';

//AFFIX MENU
document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    window.pageYOffset > `100` ? header.classList.add('affix') : header.classList.remove('affix')
});

//RESPONSIVE NAV
const hamburger = document.querySelector('.hamburger__menu-icon');
const menu = document.querySelector('.header__nav');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('collapsed');
    menu.classList.toggle('collapsed');
});

//SCROLL TO THE PROJECTS
$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

//OWL CAROUSEL
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
  	margin: 10,
  	nav: true,
  	items: 1,
  	navText: ["Poprzednie", "Następne"]
  });
});