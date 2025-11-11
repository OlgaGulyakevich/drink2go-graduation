// ============================================================
// Drink2Go - Header Mobile Menu Toggle
// ============================================================
// Manage mobile menu open/close functionality
// ============================================================


/**
 * Initialize mobile menu functionality in header
 * Toggles menu visibility and changes burger icon to close icon
 * @returns {void}
 */
const initMobileMenu = () => {
  const header = document.querySelector('.header');
  const toggleButton = document.querySelector('.js-toggle-button');
  const nav = document.querySelector('.header__nav');

  if (!toggleButton || !nav) {
    return; // Exit if elements not found
  }

  // Create container for mobile menu
  const createMobileMenu = () => {
    // Check if container already exists
    let mobileMenu = document.querySelector('.header__mobile-menu');

    if (!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.classList.add('header__mobile-menu');

      // Clone navigation for mobile menu
      const mobileNav = nav.cloneNode(true);
      mobileNav.classList.add('header__mobile-nav');

      mobileMenu.appendChild(mobileNav);
      header.appendChild(mobileMenu);
    }

    return mobileMenu;
  };

  const mobileMenu = createMobileMenu();

  /**
   * Toggle mobile menu state (open/closed)
   * Changes burger icon to close icon and back
   * @returns {void}
   */
  const toggleMenu = () => {
    const isOpen = toggleButton.classList.contains('header__toggle--open');
    const toggleIcon = toggleButton.querySelector('.header__toggle-icon use');

    if (isOpen) {
      // Close menu
      toggleButton.classList.remove('header__toggle--open');
      mobileMenu.classList.remove('header__mobile-menu--open');
      toggleButton.setAttribute('aria-label', 'Open menu');
      toggleIcon.setAttribute('href', 'icons/stack.svg#menu');
      document.body.style.overflow = ''; // Allow scroll
    } else {
      // Open menu
      toggleButton.classList.add('header__toggle--open');
      mobileMenu.classList.add('header__mobile-menu--open');
      toggleButton.setAttribute('aria-label', 'Close menu');
      toggleIcon.setAttribute('href', 'icons/stack.svg#close');
      document.body.style.overflow = 'hidden'; // Block scroll
    }
  };

  /**
   * Close mobile menu on link click
   * @returns {void}
   */
  const handleLinkClick = () => {
    if (toggleButton.classList.contains('header__toggle--open')) {
      toggleMenu();
    }
  };

  /**
   * Close menu on window resize (transition to desktop)
   * @returns {void}
   */
  const handleResize = () => {
    if (window.innerWidth >= 768 && toggleButton.classList.contains('header__toggle--open')) {
      toggleMenu();
    }
  };

  // Event listeners
  toggleButton.addEventListener('click', toggleMenu);

  // Close menu on click on any link inside
  const menuLinks = mobileMenu.querySelectorAll('.nav__link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
  });

  // Close menu on window resize
  window.addEventListener('resize', handleResize);

  // Accessibility: close menu on Escape
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && toggleButton.classList.contains('header__toggle--open')) {
      toggleMenu();
    }
  });
};


// ============================================================
// 🚀 INITIALIZATION
// ============================================================

export { initMobileMenu };
