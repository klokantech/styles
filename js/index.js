/* Navbar-top */

function init() {
  /* Navbar Hamburger */
  var navsideBtn = document.querySelector('.navside-btn');
  if (navsideBtn) {
    navsideBtn.addEventListener(
            'click', openMenu
            );
    var bg = document.createElement('div');
    bg.setAttribute('class', 'navside-bg');
    bg.addEventListener('click', openMenu);
    document.body.appendChild(bg);
  }
  
  function openMenu() {
    var menu = document.querySelector('.navside').classList;
    if (menu.contains('open')) {
      menu.remove('open');
      bg.classList.remove('open');
    } else {
      menu.add('open');
      bg.classList.add('open');
    }
  }

  /* Navbar-top */
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

  /* Tabs */
  var tabsBtn = document.getElementsByClassName('tabs-btn');
  for (var i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].onclick = function() {
      clean();
      this.className = 'tabs-btn active';
      document.getElementById('tab-' + this.id.slice(-1))
              .className = 'tabs-tab active';
    };
  }

  function clean() {
    var tabsBtn = document.getElementsByClassName('tabs-btn');
    for (var i = 0; i < tabsBtn.length; i++) {
      tabsBtn[i].className = 'tabs-btn';
    }
    var tabsTab = document.getElementsByClassName('tabs-tab');
    for (var i = 0; i < tabsTab.length; i++) {
      tabsTab[i].className = 'tabs-tab';
    }
  }
}

window.onload = init;

//hide messages
function hideMessages(sec) {
  if (sec === undefined) {
    var sec = 2;
  }
  setTimeout(function() {
    var els = document.getElementsByClassName('message');
    for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'none';
    }
  }, sec * 1000);
}