/**
 * Drink2Go - Main JavaScript Entry Point
 * Инициализация всех скриптов проекта
 */

// Импорт модулей
import { initPriceSlider } from './filters.js';

/**
 * Инициализация приложения после загрузки DOM
 */
const initApp = () => {
  // Инициализация range-slider цены (NoUISlider)
  initPriceSlider();

  // TODO: Инициализация мобильного меню
  // TODO: Инициализация слайдера hero

  console.log('✅ Drink2Go initialized');
};

// Запуск после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
