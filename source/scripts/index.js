/* в этот файл добавляет скрипты*/

// Бургер-меню
import initMenu from './menu.js';

// Слайдер
import initSlider from './slider.js';

// Фильтры (Range-slider цены)
import { initPriceSlider } from './filters.js';

// Навигация (Active link)
import initNavigation from './nav.js';

// Инициализация
initMenu();
initSlider();
initPriceSlider();
initNavigation();
