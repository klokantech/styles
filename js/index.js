/* Navbar-top */

function init() {
  document.getElementById('nav-mobile-btn').onclick = function() {
    var navMobileNav = document.getElementById('nav-mobile-nav');
    var navMobileBtn = document.getElementById('nav-mobile-btn');
    if (navMobileNav.className === 'active') {
      navMobileNav.className = '';
      navMobileBtn.className = '';
    } else {
      navMobileNav.className = 'active';
      navMobileBtn.className = 'active';
    }
  };
}

window.onload = init;