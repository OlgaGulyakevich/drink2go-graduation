// ============================================
// NAVIGATION - Active Link Management
// ============================================

/**
 * Get the current path and hash from the URL
 * and add the active class to the current link
 */
const initNavigation = () => {
  const navLinks = document.querySelectorAll('.nav__link');

  if (!navLinks.length) return;

  // Get the current path and hash from the URL
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  navLinks.forEach((link) => {
    // Remove the active class from all links
    link.classList.remove('nav__link--current');

    const linkHref = link.getAttribute('href');

    // If the link href starts with #, add the active class to the current link
    if (linkHref && linkHref.startsWith('#')) {
      if (currentHash === linkHref) {
        link.classList.add('nav__link--current');
      }
    }
    // If the link href includes .html, add the active class to the current link
    else if (linkHref && linkHref.includes('.html')) {
      // Get the file name from the link href
      const linkFileName = linkHref.split('/').pop();
      const currentFileName = currentPath.split('/').pop() || 'index.html';

      if (linkFileName === currentFileName) {
        link.classList.add('nav__link--current');
      }
    }
  });

  // Add event listeners to the navigation links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // If the href starts with #, add the active class to the current link
      if (href && href.startsWith('#')) {
        // Remove the active class from all links
        navLinks.forEach((navLink) => {
          navLink.classList.remove('nav__link--current');
        });

        // Add the active class to the current link
        link.classList.add('nav__link--current');
      }
    });
  });

  // Add event listener to the window to handle hash change
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash;

    navLinks.forEach((link) => {
      link.classList.remove('nav__link--current');

      const linkHref = link.getAttribute('href');
      if (linkHref === newHash) {
        link.classList.add('nav__link--current');
      }
    });
  });
};

// Export the initNavigation function 
export default initNavigation;
