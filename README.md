# 🎨 DevPortfolio - Responsive Landing Page

> **Build a Responsive Landing Page – Clean • Modern • Fast • Animated**

A professional, modern, and fully responsive portfolio landing page built with **React**, **Framer Motion**, and **CSS3**. Features smooth animations, optimized performance, and a clean design perfect for showcasing your work.

## ✨ Key Features

- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Smooth Animations** - Framer Motion animations for scroll and hover effects
- ✅ **Modern UI/UX** - Clean design with gradient accents and glassmorphism
- ✅ **Fast Performance** - Optimized for quick load times
- ✅ **Easy to Customize** - Well-structured code with clear naming conventions
- ✅ **SEO Ready** - Semantic HTML and proper meta tags
- ✅ **Accessibility** - WCAG compliant with proper ARIA labels
- ✅ **Dark Theme** - Beautiful dark theme with neon accents

## 🎯 Sections Included

1. **Hero Section** - Large headline, subtitle, CTA buttons, animated scroll indicator
2. **Navbar** - Fixed navigation with smooth scrolling
3. **About Section** - Profile intro, skills, professional image
4. **Services Section** - 6 service cards with icons
5. **Portfolio Section** - 6 featured projects with images
6. **Testimonials Section** - Client testimonials with ratings
7. **Contact Section** - Contact form and information
8. **Footer** - Quick links and social media

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173/
```

## 📦 Build for Production

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── *.css           # Component styles
├── hooks/
│   └── useInView.js    # Scroll animation hook
├── data/
│   └── portfolioData.js # Dynamic content
├── styles/
│   └── global.css      # Global styles
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎨 Technologies

- **React 19** - UI library
- **Framer Motion** - Animation library
- **Vite** - Build tool
- **CSS3** - Styling with gradients and animations

## 🎨 Customization

### Change Colors
Edit `/src/styles/global.css`:
```css
:root {
  --primary: #00d4ff;
  --accent: #ff006e;
  --background: #0f0f1e;
}
```

### Update Content
Edit `/src/data/portfolioData.js` to customize services, portfolio, testimonials, and skills.

### Add Images
Update image URLs in `portfolioData.js` or component props.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎬 Animation Features

- Fade-in on scroll
- Slide animations
- Scale effects
- Hover animations
- Floating elements
- Smooth scroll behavior

## ⚡ Performance

- Lazy loading with Intersection Observer
- Optimized with Framer Motion
- CSS variables for efficient theming
- Minimal bundle size
- Fast HMR with Vite

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Best Practices

- Component-based architecture
- Custom hooks for reusability
- Semantic HTML
- CSS organization (BEM-inspired)
- Mobile-first responsive design
- Accessibility considerations
- Clean code structure

## 🐛 Troubleshooting

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit pull requests.

---

**Made with ❤️ by Frontend Developer**
