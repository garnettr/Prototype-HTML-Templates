

////////////////
// DOM elements
///////////////


// Navigation
const nav = $('#navigation').height();

// Grab heigt of Navigation
var topHeight = $('#navigation').height();

// Grab site header height 
const siteHeader = $('.site-header').height();

// Grab height of contact-Hero
const contactHero = $('.contact-hero').height();

console.log(contactHero);

// Grab subnav height thats inside of .sub-wrapper
const subNav = $('.subnav').height();

// hero wrapper 
const heroWrapper = $('.hero-wrapper');

// Sub Navigation
const subNavHeight =  $('.subnav-wrapper');

// Hidden Navigation
const hiddenSubnav =  $('.hidden-subnav');

// Print Sub Header Hight out to check
console.log(subNavHeight);

// Grab Content Wrapper Height
const contentWrapper = $('.content-wrapper').height();

// Printing out the height of Top Height
console.log(contentWrapper);


/////////// ------------
/// Render
 
// Grab Height of the Containers Leading up point of Snap
const navTop = siteHeader + contactHero + subNav;

console.log(navTop);

// Store and Keep track of window size
var width;

window.onresize = window.onload = function() {
  width = this.innerWidth;
}

// Sticky Nav
const stickyNavigation = function () {
  if (window.scrollY >= navTop && window.scrollY <= contentWrapper && width > 768) {
    hiddenSubnav.addClass('fixed-nav-js');
  } 
  else {
   hiddenSubnav.removeClass('fixed-nav-js');
  }
}


// Smoth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


window.addEventListener('scroll', stickyNavigation);



