// ============================================
// MAIN ENTRY POINT FOR ALL SCRIPTS
// ============================================

// Mobile menu
import initMenu from './menu.js';

// Slider
import initSlider from './slider.js';

// Filters (Price range slider)
import { initPriceSlider } from './filters.js';

// Navigation (Active link)
import initNavigation from './nav.js';

// Initialize all modules
initMenu();
initSlider();
initPriceSlider();
initNavigation();
