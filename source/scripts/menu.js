/**
 * Бургер-меню (Mobile/Tablet)
 * Переключение видимости навигации
 */

const initMenu = () => {
  const toggleButton = document.querySelector('.js-toggle-button');
  const header = document.querySelector('.header');
  const body = document.body;
  const nav = document.querySelector('.header__nav');

  if (!toggleButton || !header || !nav) {
    return; // Если элементы не найдены, выходим
  }

  // Состояние меню
  let isMenuOpen = false;

  /**
   * Открыть меню
   */
  const openMenu = () => {
    isMenuOpen = true;
    header.classList.add('header--menu-open');
    body.classList.add('menu-open');
    toggleButton.setAttribute('aria-label', 'Закрыть меню');

    // Меняем иконку с menu на close
    const icon = toggleButton.querySelector('use');
    if (icon) {
      icon.setAttribute('href', 'icons/stack.svg#close');
    }
  };

  /**
   * Закрыть меню
   */
  const closeMenu = () => {
    isMenuOpen = false;
    header.classList.remove('header--menu-open');
    body.classList.remove('menu-open');
    toggleButton.setAttribute('aria-label', 'Открыть меню');

    // Меняем иконку с close на menu
    const icon = toggleButton.querySelector('use');
    if (icon) {
      icon.setAttribute('href', 'icons/stack.svg#menu');
    }
  };

  /**
   * Переключить меню
   */
  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /**
   * Обработчик клика на кнопку бургера
   */
  toggleButton.addEventListener('click', toggleMenu);

  /**
   * Закрытие меню по клавише ESC
   */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  /**
   * Закрытие меню при изменении размера окна (desktop)
   * На desktop бургер-меню скрыто, поэтому закрываем меню автоматически
   */
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440 && isMenuOpen) {
      closeMenu();
    }
  });

  /**
   * Закрытие меню при клике на ссылку в навигации (для mobile)
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

// Инициализация при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMenu);
} else {
  initMenu();
}

export default initMenu;
