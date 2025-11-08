// ============================================
// NAVIGATION - Active Link Management
// ============================================

/**
 * ?@545;O5B 0:B82=K9 ?C=:B =02830F88 =0 >A=>25 B5:CI53> URL
 * 8 4>102;O5B :;0AA nav__link--current
 */
const initNavigation = () => {
  const navLinks = document.querySelectorAll('.nav__link');

  if (!navLinks.length) return;

  // >;CG05< B5:CI89 ?CBL (pathname + hash)
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  navLinks.forEach((link) => {
    // #18@05< :;0AA --current C 2A5E AAK;>:
    link.classList.remove('nav__link--current');

    const linkHref = link.getAttribute('href');

    // A;8 MB> O:>@=0O AAK;:0 (#catalog, #delivery 8 B.4.)
    if (linkHref && linkHref.startsWith('#')) {
      if (currentHash === linkHref) {
        link.classList.add('nav__link--current');
      }
    }
    // A;8 MB> AAK;:0 =0 AB@0=8FC (index.html, 404.html 8 B.4.)
    else if (linkHref && linkHref.includes('.html')) {
      // !@02=8205< 8<O D09;0
      const linkFileName = linkHref.split('/').pop();
      const currentFileName = currentPath.split('/').pop() || 'index.html';

      if (linkFileName === currentFileName) {
        link.classList.add('nav__link--current');
      }
    }
  });

  // 1@01>BG8: :;8:0 ?> O:>@=K< AAK;:0<
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // ">;L:> 4;O O:>@=KE AAK;>: =0 B>9 65 AB@0=8F5
      if (href && href.startsWith('#')) {
        // #18@05< --current C 2A5E
        navLinks.forEach((navLink) => {
          navLink.classList.remove('nav__link--current');
        });

        // >102;O5< --current : :;8:=CB>9 AAK;:5
        link.classList.add('nav__link--current');
      }
    });
  });

  // 1@01>BG8: 87<5=5=8O hash 2 URL (4;O :>@@5:B=>3> 2K45;5=8O ?@8 8A?>;L7>20=88 :=>?:8 "=0704")
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

// -:A?>@B
export default initNavigation;
