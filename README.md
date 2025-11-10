# Drink2Go - Responsive E-commerce Website

> **Pixel-perfect responsive website** for a coffee shop built with HTML5, SCSS (BEM methodology), and Vanilla JavaScript. Completed in 7 days as part of HTML Academy graduation project.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-7859cf?style=flat&logo=github&logoColor=white)](https://olgagulyakevich.github.io/drink2go-graduation/)
[![Project Status](https://img.shields.io/badge/status-completed-success)](https://olgagulyakevich.github.io/drink2go-graduation/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gulp](https://img.shields.io/badge/Gulp-CF4647?logo=gulp&logoColor=white)](https://gulpjs.com/)

## 🎯 Project Overview

**Drink2Go** is a responsive e-commerce website for a coffee shop featuring convenient filtering by coffee origin countries and milk concentration. The project demonstrates pixel-perfect implementation, mobile-first responsive design, and modern frontend development practices.

### Key Features

- ✅ **Pixel-perfect design** implementation matching Figma mockups
- ✅ **Mobile-first responsive** layout (320px → 768px → 1440px+)
- ✅ **BEM methodology** for maintainable CSS architecture
- ✅ **Custom form controls** (checkboxes, radio buttons, range slider)
- ✅ **Vanilla JavaScript** slider implementation (no libraries)
- ✅ **SVG sprite** system for optimized icons
- ✅ **Retina-ready images** with WebP format support
- ✅ **Accessibility** features (keyboard navigation, ARIA labels)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1439px
- **Desktop**: 1440px+

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **SCSS** - CSS preprocessor with BEM methodology
- **Vanilla JavaScript** (ES6+) - No frameworks
- **Gulp 4** - Build tool and task runner

### Libraries & Tools
- **NoUISlider.js** - Range slider for price filtering
- **PostCSS** with Lightning CSS - CSS processing and minification
- **BrowserSync** - Development server with live reload

### Development Tools
- **ESLint** - JavaScript linting
- **Stylelint** - SCSS/CSS linting
- **HTML Validator** - Markup validation
- **BEM Linter** - BEM methodology validation
- **BackstopJS** - Visual regression testing

## 📁 Project Structure

```
drink2go-shop/
├── source/                 # Source files
│   ├── styles/            # SCSS stylesheets
│   │   ├── common/       # Variables, fonts, global styles
│   │   ├── ui/           # Reusable UI components
│   │   └── blocks/       # BEM blocks (page sections)
│   ├── scripts/          # JavaScript modules
│   ├── images/           # Optimized images (WebP + PNG)
│   ├── icons/            # SVG icons (compiled to sprite)
│   ├── fonts/            # Web fonts (Montserrat)
│   └── index.html        # Main page
├── build/                # Production build (generated)
├── raw/                  # Raw assets (not committed)
└── gulpfile.js           # Gulp configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.18+ or v20.9+ (LTS version)
- **npm** (comes with Node.js)
- **Git**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OlgaGulyakevich/drink2go-shop.git
cd drink2go-shop
```

2. Install dependencies:
```bash
npm ci
```

3. Start development server:
```bash
npm start
```

## 📜 Available Scripts

### Development
- `npm start` - Start development server with live reload
- `npm run build` - Build production version
- `npm run preview` - Build and preview production version

### Code Quality
- `npm run lint` - Run all linters
- `npm run lint:html` - Lint HTML markup
- `npm run lint:styles` - Lint SCSS files
- `npm run lint:scripts` - Lint JavaScript files
- `npm run lint:bem` - Validate BEM methodology

### Optimization
- `npm run optimize` - Optimize all images
- `npm run optimize:raster` - Optimize raster images
- `npm run optimize:vector` - Optimize vector graphics

### Testing
- `npm run test-pp` - Run pixel-perfect visual regression tests

## 🎨 Design Implementation

### Design System

The project follows a comprehensive design system extracted from Figma:

- **Color Palette**: Primary purple (#7859cf), secondary colors, text colors
- **Typography**: Montserrat font family (Regular, Medium, SemiBold, Bold, ExtraBold)
- **Spacing Scale**: Consistent spacing system (4px base unit)
- **Component Library**: Buttons, inputs, cards, badges, navigation

### Pixel-Perfect Approach

- Exact measurements from Figma mockups
- Precise color matching (hex values)
- Typography matching (font sizes, line heights, letter spacing)
- Spacing accuracy (±2px tolerance)
- Visual regression testing with BackstopJS

## 🏗️ Architecture Highlights

### BEM Methodology

All CSS follows BEM (Block Element Modifier) naming convention:

```scss
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### Mobile-First CSS

All styles start with mobile (320px) and progressively enhance:

```scss
// Mobile styles (base)
.component {
  padding: 20px;
}

// Tablet (768px+)
@media (min-width: 768px) {
  .component {
    padding: 30px;
  }
}

// Desktop (1440px+)
@media (min-width: 1440px) {
  .component {
    padding: 40px;
  }
}
```

### JavaScript Modules

Modular JavaScript architecture:

- `menu.js` - Mobile menu toggle functionality
- `slider.js` - Custom slider implementation (no libraries)
- `filters.js` - Form handling and NoUISlider integration
- `utils.js` - Utility functions

## 📦 Key Components

### Header
- Responsive logo (3 versions: mobile/tablet/desktop)
- Navigation menu with mobile hamburger
- User and cart icons via SVG sprite

### Hero Slider
- Custom JavaScript slider (no libraries)
- Navigation buttons with disabled states
- Pagination dots for desktop
- Responsive images with retina support

### Catalog
- Custom checkbox and radio button styles
- NoUISlider price range filter
- Product cards grid layout
- Pagination component

### Footer
- Multi-column layout
- Social media icons (SVG sprite)
- Contact information
- HTML Academy logo link

## 🎯 Project Achievements

- ✅ **100% pixel-perfect** implementation verified by automated tests
- ✅ **Mobile-first** responsive design across 3 breakpoints
- ✅ **Zero JavaScript frameworks** - pure vanilla JS
- ✅ **BEM methodology** - maintainable and scalable CSS
- ✅ **Accessibility** - keyboard navigation, ARIA labels, semantic HTML
- ✅ **Performance** - Optimized images (WebP), minimal bundle size (8KB JS, 40KB CSS)
- ✅ **Code quality** - All linters passing, clean codebase

## 📊 Performance Metrics

- **JavaScript Bundle**: ~8KB (minified)
- **CSS Bundle**: ~40KB (minified)
- **Total Build Size**: ~13MB (mostly images)
- **Image Optimization**: WebP format with PNG fallback
- **SVG Icons**: Compiled to single sprite file

## 🧪 Testing

The project includes comprehensive visual regression testing:

- Pixel-perfect comparison with Figma mockups
- Cross-browser compatibility testing
- Responsive design validation
- Interactive element testing

Run tests:
```bash
npm run preview  # Start server first
npm run test-pp # In another terminal
```

## 📝 Code Standards

- **HTML**: Semantic markup, W3C validated
- **SCSS**: BEM methodology, mobile-first, organized structure
- **JavaScript**: ES6+ features, modular architecture, no console.logs in production
- **Accessibility**: WCAG AA basics, keyboard navigation, ARIA labels

## 🎓 Learning Outcomes

This project demonstrates:

- **Responsive Web Design** - Mobile-first approach, flexible layouts
- **CSS Architecture** - BEM methodology, SCSS organization
- **JavaScript** - DOM manipulation, event handling, form validation
- **Build Tools** - Gulp automation, asset optimization
- **Code Quality** - Linting, validation, testing
- **Pixel-Perfect Design** - Attention to detail, design system implementation

## 📄 License

This project was created as part of HTML Academy graduation requirements.

## 🌐 Live Demo

**👉 [View Live Website](https://olgagulyakevich.github.io/drink2go-graduation/)**

The project is deployed on GitHub Pages and fully functional. You can test all features including:
- Responsive design across all breakpoints
- Interactive slider navigation
- Form filters with custom controls
- Mobile menu functionality

## 👤 Author

**Olga Gulyakevich**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/olga-gulyakevich-ab166674/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat&logo=github&logoColor=white)](https://github.com/OlgaGulyakevich)

---

**Project Duration**: 7 days (November 4-10, 2025)
**Status**: ✅ Completed and tested
**Type**: Graduation project for HTML Academy
**Live Demo**: [olgagulyakevich.github.io/drink2go-graduation](https://olgagulyakevich.github.io/drink2go-graduation/)
