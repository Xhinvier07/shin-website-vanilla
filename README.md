# Jansen Moral - Personal Portfolio Website (HTML/CSS/JS Version)

<div align="center">
  <img src="public/shinlogo.png" alt="Jansen Moral Logo" width="200" height="200">
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Responsive](https://img.shields.io/badge/Responsive-Design-FF6B6B?style=flat)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
</div>

## 🚀 About

A modern, interactive personal portfolio website built with pure HTML, CSS, and JavaScript. This is the raw web technologies version of my React portfolio, featuring the same stunning design and functionality without any frameworks.

## ✨ Features

### 🎨 **Modern Design**
- **Custom Color Palette**: Blue and dark theme with primary (#154D71), secondary (#1C6EA4), and accent (#33A1E0) colors
- **Typography**: Custom Anteb, Inter, and Manrope fonts for premium typography
- **Responsive Design**: Fully responsive across all devices
- **Grain Texture**: Subtle background texture using grain.jpg overlay
- **Starfield Background**: Animated starfield on homepage with zoom effects

### 🎭 **Interactive Animations**
- **CSS Animations**: Smooth, professional animations throughout the site
- **Gradient Text Effects**: Animated gradient text with shimmer effects
- **Scroll Reveal**: Elements animate on scroll using Intersection Observer
- **Hover Effects**: Sophisticated button and card interactions
- **Cryptic Text Animation**: Matrix-style character scrambling for developer name
- **3D Card Effects**: Interactive hover effects on project cards

### 🖼️ **Page Structure**
- **Home**: Starfield background with cryptic "Xhinvier" animation
- **About Me**: Professional summary with interactive elements
- **Education**: Timeline layout with institution details
- **Experience**: Company cards with logos and grain texture
- **Skills**: Tech stack with dot indicators and hover effects
- **Achievements**: Infinite carousel with draggable functionality
- **Certifications**: Company logos with filterable categories
- **Advocacy**: SDG-focused content with impact areas
- **Portfolio**: Project gallery with category filters
- **Contact**: Bento grid layout with form and GitHub contributions

### 🎯 **Interactive Elements**
- **Custom Cursors**: Unique cursor designs
- **Dropdown Menus**: Animated navigation dropdowns
- **Particle Effects**: Burst animations on interactions
- **Carousel Controls**: Draggable and hover-pause functionality
- **Form Validation**: Contact form with loading states
- **Quote Cards**: 3D flip animations with random quotes

## 🛠️ **Tech Stack**

### **Core Technologies**
- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with animations and responsive design
- **JavaScript (ES6+)** - Modern JavaScript with DOM manipulation
- **CSS Grid & Flexbox** - Modern layout systems

### **Styling & Animation**
- **Custom CSS** - Advanced animations and effects
- **CSS Variables** - Dynamic theming system
- **Keyframe Animations** - Smooth transitions and effects
- **Intersection Observer API** - Scroll-triggered animations

### **Fonts & Typography**
- **Anteb** - Custom display font for headings
- **Inter** - Modern sans-serif for body text
- **Manrope** - Additional font option
- **Google Fonts** - Web font integration

### **Assets & Media**
- **SVG Icons** - Scalable vector graphics
- **Optimized Images** - Web-optimized image formats
- **Custom Cursors** - Interactive cursor designs

## 📁 **Project Structure**

```
website-html/
├── index.html                 # Homepage with starfield
├── pages/                     # All page files
│   ├── about.html            # About Me summary
│   ├── education.html        # Education timeline
│   ├── experience.html       # Work experience
│   ├── skills.html           # Technical skills
│   ├── achievements.html     # Awards & competitions
│   ├── certifications.html   # Professional certifications
│   ├── advocacy.html         # SDG advocacy areas
│   ├── portfolio.html        # Project gallery
│   └── contact.html          # Contact form & bento grid
├── styles/                    # CSS stylesheets
│   ├── main.css              # Global styles & variables
│   ├── animations.css        # Keyframe animations
│   ├── home.css              # Homepage specific styles
│   ├── about.css             # About page styles
│   ├── education.css         # Education page styles
│   ├── experience.css        # Experience page styles
│   ├── skills.css            # Skills page styles
│   ├── achievements.css      # Achievements page styles
│   ├── certifications.css    # Certifications page styles
│   ├── advocacy.css          # Advocacy page styles
│   ├── portfolio.css         # Portfolio page styles
│   └── contact.css           # Contact page styles
├── js/                        # JavaScript files
│   ├── navbar.js             # Navigation functionality
│   ├── main.js               # Global utilities
│   ├── home.js               # Homepage interactions
│   ├── about.js              # About page animations
│   ├── education.js          # Education page effects
│   ├── experience.js         # Experience page interactions
│   ├── skills.js             # Skills page functionality
│   ├── achievements.js       # Achievements carousel & timeline
│   ├── certifications.js     # Certifications filtering
│   ├── advocacy.js           # Advocacy page effects
│   ├── portfolio.js          # Portfolio filtering & interactions
│   └── contact.js            # Contact form & bento grid
├── public/                    # Static assets
│   ├── shinlogo.png          # Main logo
│   ├── profile.JPG           # Profile image
│   ├── grain.jpg             # Background texture
│   ├── font/                 # Custom fonts (Anteb)
│   ├── cursor/               # Custom cursor files
│   ├── tech/                 # Technology icons
│   ├── projects/             # Project images
│   ├── cert/                 # Certificate images
│   ├── competitions/         # Competition images
│   ├── sdg/                  # UN SDG icons
│   └── [company logos]       # Oracle, IBM, Cisco, etc.
├── README.md                  # This file
├── documentation.md           # Detailed documentation
└── [other markdown files]     # Project specifications
```

## 🚀 **Getting Started**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### **Installation**

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/shin-website-html.git
   cd shin-website-html
   ```

2. **Open in browser**
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Navigate to the website**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

### **File Structure**
All HTML files except `index.html` are in the `pages/` folder. Each page has its own CSS and JavaScript files for modular organization.

## 🎨 **Customization**

### **Color Palette**
The website uses CSS custom properties defined in `styles/main.css`:

```css
:root {
  --primary: #154D71;      /* Dark blue */
  --secondary: #1C6EA4;    /* Medium blue */  
  --accent: #33A1E0;       /* Light blue */
  --highlight: #FFF9AF;    /* Yellow accent */
  --bg-primary: #000000;   /* Black background */
  --bg-surface: #1A2332;   /* Dark surface */
  --text-primary: #FFFFFF; /* White text */
  --text-secondary: #B0BEC5; /* Gray text */
}
```

### **Fonts**
- **Anteb**: Custom display font for headings and branding
- **Inter**: Modern sans-serif for body text and UI elements
- **Manrope**: Additional font option for variety

### **Animations**
All animations are defined in `styles/animations.css` and can be customized:
- `fade-in-up`: Scroll reveal animations
- `gradient-shimmer`: Text gradient effects
- `float`: Floating element animations
- `pulse`: Pulsing glow effects

## 📱 **Responsive Design**

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🌟 **Key Features**

### **Homepage**
- Animated starfield background with zoom effects
- Cryptic "Xhinvier" text with character scrambling
- Professional hero section with gradient animations
- Floating tech icons with smooth animations

### **Navigation**
- Fixed navbar with scroll effects
- Animated dropdown menus
- Particle effects on hover
- Mobile-responsive hamburger menu

### **Interactive Elements**
- Draggable carousels with pause-on-hover
- Filterable content with smooth transitions
- 3D card hover effects
- Particle burst animations
- Form validation with loading states

## 🔧 **Development**

### **File Organization**
- **HTML**: Semantic structure in `pages/` folder
- **CSS**: Modular stylesheets for each page
- **JavaScript**: Component-based functionality
- **Assets**: Organized by type in `public/` subfolders

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### **Performance**
- Optimized images and assets
- Efficient CSS animations
- Lazy loading for images
- Minimal JavaScript footprint

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/shin-website-html/issues).

## 📞 **Contact**

**Jansen Moral** - Software Engineer

- **LinkedIn**: [linkedin.com/in/xhinvier07](https://www.linkedin.com/in/xhinvier07/)
- **GitHub**: [github.com/Xhinvier07](https://github.com/Xhinvier07)
- **Email**: [jansenmoral@gmail.com](mailto:jansenmoral@gmail.com)

---

<div align="center">
  <p>Built with ❤️ by <strong>Jansen Moral</strong></p>
  <p>© 2025 All rights reserved</p>
</div>