/**
 * Pranjal Trivedi Portfolio - main.js
 */

(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. Mobile Navigation Logic (Right-Side Drawer) ---
    const body = document.querySelector('body');
    const navDrawer = document.getElementById('navDrawer');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const drawerCloseBtn = document.querySelector('.drawer-close');
    const navLinks = document.querySelectorAll('.navmenu a');

    // Toggle Function
    const toggleMenu = () => {
      body.classList.toggle('mobile-nav-active');
    };

    const closeMenu = () => {
      body.classList.remove('mobile-nav-active');
    };

    if (mobileNavToggleBtn) mobileNavToggleBtn.addEventListener('click', toggleMenu);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMenu);
    
    // Close when clicking a link
    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Close when clicking outside the drawer (Light Dismiss)
    document.addEventListener('click', (e) => {
      if (body.classList.contains('mobile-nav-active')) {
        // If click is NOT inside drawer and NOT on the toggle button
        if (!navDrawer.contains(e.target) && !mobileNavToggleBtn.contains(e.target)) {
          closeMenu();
        }
      }
    });


    // --- 2. Swiper Initialization (Restored Dots & Arrows) ---
    // This looks for all instances of .mySwiper and connects their unique controls
    const swiperInstances = document.querySelectorAll('.mySwiper');
    
    swiperInstances.forEach((el) => {
      // Find navigation/pagination relative to this specific swiper container
      const parent = el.parentElement;
      
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: el.querySelector('.swiper-pagination') || parent.querySelector('.swiper-pagination'),
          clickable: true,
        },
        navigation: {
          nextEl: parent.querySelector('.swiper-button-next'),
          prevEl: parent.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        },
      });
    });


    // --- 3. AOS Safety Check & Initialization ---
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        offset: 100,
        once: true
      });
    }

  });
})();


// Add this to your click event listeners
const overlay = document.getElementById('navOverlay');

if (overlay) {
  overlay.addEventListener('click', () => {
    document.querySelector('body').classList.remove('mobile-nav-active');
  });
}


function filterCerts(category) {
  const items = document.querySelectorAll('.cert-item');
  const buttons = document.querySelectorAll('.btn-google-filter');

  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filter items
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
      setTimeout(() => item.style.opacity = "1", 10);
    } else {
      item.style.opacity = "0";
      setTimeout(() => item.style.display = "none", 300);
    }
  });
}


function filterCerts(category, event) {
  const items = document.querySelectorAll('.cert-item');
  const buttons = document.querySelectorAll('.btn-google-filter');

  // Update button active state
  buttons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  // Filter with smooth fade
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
      setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      setTimeout(() => { item.style.display = 'none'; }, 400);
    }
  });
}


function filterPortfolio(category, event) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.btn-google-filter');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
      setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.98)';
      setTimeout(() => { item.style.display = 'none'; }, 300);
    }
  });
}


