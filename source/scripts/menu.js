/**
 * Mobile menu (Mobile/Tablet)
 * Toggle navigation visibility
 */

const initMenu = () => {
  const toggleButton = document.querySelector('.js-toggle-button');
  const header = document.querySelector('.header');
  const body = document.body;
  const nav = document.querySelector('.header__nav');

  if (!toggleButton || !header || !nav) {
    return; // Exit if elements not found
  }

  // Menu state
  let isMenuOpen = false;

  /**
   * Open menu
   */
  const openMenu = () => {
    isMenuOpen = true;
    header.classList.add('header--menu-open');
    body.classList.add('menu-open');
    toggleButton.setAttribute('aria-label', 'Close menu');

    // Change icon from menu to close
    const icon = toggleButton.querySelector('use');
    if (icon) {
      icon.setAttribute('href', 'icons/stack.svg#close');
    }
  };

  /**
   * Close menu
   */
  const closeMenu = () => {
    isMenuOpen = false;
    header.classList.remove('header--menu-open');
    body.classList.remove('menu-open');
    toggleButton.setAttribute('aria-label', 'Open menu');

    // Change icon from close to menu
    const icon = toggleButton.querySelector('use');
    if (icon) {
      icon.setAttribute('href', 'icons/stack.svg#menu');
    }
  };

  /**
   * Toggle menu
   */
  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /**
   * Burger button click handler
   */
  toggleButton.addEventListener('click', toggleMenu);

  /**
   * Close menu on ESC key
   */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  /**
   * Close menu on window resize (desktop)
   * On desktop burger menu is hidden, so close menu automatically
   */
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440 && isMenuOpen) {
      closeMenu();
    }
  });

  /**
   * Close menu on navigation link click (for mobile)
   */
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isMenuOpen && window.innerWidth < 1440) {
        closeMenu();
      }
    });
  });
};

// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMenu);
} else {
  initMenu();
}

export default initMenu;
