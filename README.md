# 🚀 Centralized Code LLC - Website

> Modern, multilingual corporate website built with React for IT services and digital marketing company.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![i18n](https://img.shields.io/badge/i18n-Multilingual-green.svg)](https://react.i18next.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🌟 Features

### 🌍 **Multilingual Support**
- **English** (default) and **Spanish**
- Automatic language detection
- Persistent language preference
- Animated language selector

### 🎨 **Modern Design**
- Responsive design for all devices
- Professional UI/UX with animations
- Framer Motion animations
- Modern CSS with custom properties

### 📱 **Sections**
- **Hero Section**: Eye-catching landing with CTA
- **IT Services**: Cloud, Cybersecurity, Development, Support
- **Digital Marketing**: Social Media, Advertising, SEO, Content
- **Statistics**: Animated counters
- **About Us**: Company information
- **Contact Form**: Advanced form with validation

### ⚡ **Technology Stack**
- **React 18** - Latest version with hooks
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form management
- **React i18next** - Internationalization
- **CSS3** - Modern styling with variables
- **Font Awesome** - Professional icons

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/centralized-code-website.git

# Navigate to directory
cd centralized-code-website

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

```bash
npm start          # Development server (http://localhost:3000)
npm run build      # Production build
npm test           # Run tests
npm run eject      # Eject configuration (irreversible)
```

## 🌐 Deployment Options

### **1. Netlify (Recommended)**
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload 'build' folder to Netlify or connect Git repo
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### **2. Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### **3. GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/centralized-code-website",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar/          # Navigation with language selector
│   ├── Hero/            # Landing section
│   ├── Services/        # IT & Marketing services
│   ├── Stats/           # Animated statistics
│   ├── About/           # Company information
│   ├── Contact/         # Contact form
│   ├── Footer/          # Footer section
│   └── LanguageSelector/ # Language switcher
├── i18n/                # Internationalization
│   ├── i18n.js          # i18n configuration
│   └── locales/         # Translation files
│       ├── en.json      # English translations
│       └── es.json      # Spanish translations
├── App.js               # Main app component
├── App.css              # Global app styles
├── index.js             # Entry point
└── index.css            # Global styles
```

## 🌍 Internationalization

The website supports multiple languages:

- **English** (`en`) - Default
- **Spanish** (`es`) - Español

### Adding New Languages

1. Create new translation file in `src/i18n/locales/`
2. Add language to `src/i18n/i18n.js` resources
3. Update language selector in `src/components/LanguageSelector/`

## 📝 Customization

### Company Information
Update contact details in:
- `src/components/Contact/Contact.js` (contact info)
- `public/index.html` (meta tags)

### Services
Modify services in:
- `src/i18n/locales/en.json`
- `src/i18n/locales/es.json`

### Styling
- Global styles: `src/index.css`
- Component styles: Individual `.css` files

## 📞 Contact Information

- **Email**: centralizedcode@gmail.com
- **Phone**: 7865697502
- **Location**: Miami, Florida, USA

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Hook Form](https://react-hook-form.com/) - Form management
- [React i18next](https://react.i18next.com/) - Internationalization
- [Font Awesome](https://fontawesome.com/) - Icons

---

**Made with ❤️ by Centralized Code LLC**

[![Website](https://img.shields.io/website?url=https://centralizedcode.com)](https://centralizedcode.com)
[![GitHub](https://img.shields.io/github/stars/yourusername/centralized-code-website?style=social)](https://github.com/yourusername/centralized-code-website) 