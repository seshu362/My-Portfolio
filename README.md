# G Seshu — Full Stack Developer & 3D Interactive Web Creator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-seshu--portfolio.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://seshu-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A cutting-edge, high-performance personal portfolio showcasing enterprise client solutions, full-stack systems, and interactive 3D web experiences. Designed with a luxury dark aesthetic, custom glassmorphism, fluid physics-based spring cursors, and responsive device viewports.

🌐 **Live URL**: [https://seshu-portfolio.vercel.app/](https://seshu-portfolio.vercel.app/)

---

## ✨ Features & Highlights

- 🌌 **3D Ambient Mesh Gradient**: Smooth, cursor-reactive ambient background canvas with high-performance GPU rendering.
- 🎯 **Spring Magnetic Cursor**: Custom physics-based interactive trailing cursor with fluid hover state dynamics.
- 💻 **Interactive Device Mockups**: Realistic 3D MacBook / desktop laptop frames displaying live project preview interfaces.
- 🏢 **Enterprise Client Showcase**: Features 20+ production and enterprise projects (Viyash Scientific, Femme Circle, ClapKartel, Studio Kara, B5 Corporation, Legala Group, and more).
- 📬 **Live Contact System**: Fully integrated with **Web3Forms** for instant client message delivery directly to `gseshu4028@gmail.com`.
- ⚡ **Modern Typography**: Styled with Google Kanit & Inter typography for crisp readability across mobile and 4K displays.
- 🎨 **Bespoke Portfolio Favicons**: Custom-crafted SVG, high-res multi-layer `.ico`, and PWA touch icons.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend Core** | React 19, JavaScript (ESNext), HTML5 Semantic Layout |
| **Styling & Design** | Tailwind CSS 3.4, PostCSS, Glassmorphism, CSS Gradients |
| **Animations** | Framer Motion 12, Spring Physics, Intersection Observer |
| **Icons & Media** | Lucide React, Font Awesome, Custom Vector SVGs |
| **Backend & Form** | Web3Forms API (Direct Email Dispatch) |
| **Hosting & CI/CD** | Vercel (Auto-deploy on GitHub push) |

---

## 📁 Project Structure

```bash
portfolio/
├── public/
│   ├── favicon.svg             # Modern vector scalable SVG favicon
│   ├── favicon.ico             # Multi-resolution ICO (16x16 up to 64x64)
│   ├── logo192.png / logo512.png # PWA and Android home-screen icons
│   ├── apple-touch-icon.png    # iOS touch icon
│   ├── manifest.json           # Web App manifest configuration
│   ├── Resume_Updated.pdf      # Downloadable resume
│   └── index.html              # Main HTML entry with SEO & OpenGraph meta
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ContactButton.js   # Custom gradient action button
│   │   │   ├── CustomCursor.js    # Spring-trailing magnetic cursor
│   │   │   ├── FadeIn.js          # Intersection viewport transitions
│   │   │   └── LaptopFrame.js     # 3D Laptop mockup viewer
│   │   ├── Header/                # Sticky blur-backdrop navigation bar
│   │   ├── HeroSection.js         # Hero intro & giant typography banner
│   │   ├── MarqueeSection.js      # Animated technology & skill marquee
│   │   ├── About.js               # Background, bio, and engineering philosophy
│   │   ├── ExperienceSection.js   # Professional career timeline & milestones
│   │   ├── Skills/                # Skill categories & tech proficiencies
│   │   ├── ServicesSection.js     # Full-stack, frontend, and 3D web offerings
│   │   ├── ProjectsSection.js     # Filterable enterprise client projects
│   │   ├── Education.js           # Academic background & credentials
│   │   ├── ContactSection.js      # Web3Forms powered live messaging form
│   │   ├── Footer.js              # 3D dark footer with verified links
│   │   └── UI/
│   │       └── GradientBackground.js # Ambient mesh interactive backdrop
│   ├── App.js                     # Master application container
│   ├── index.css                  # Tailwind directives & global styling
│   └── index.js                   # React 19 root bootstrap
├── package.json
└── tailwind.config.js
```

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/seshu362/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm start
```
The app will run locally at [http://localhost:3000](http://localhost:3000).

### 4. Build for production
```bash
npm run build
```
Creates an optimized production build in the `build/` directory.

---

## 📬 Contact & Connect

- **Portfolio**: [https://seshu-portfolio.vercel.app/](https://seshu-portfolio.vercel.app/)
- **Email**: [gseshu4028@gmail.com](mailto:gseshu4028@gmail.com)
- **LinkedIn**: [linkedin.com/in/seshu63](https://www.linkedin.com/in/seshu63)
- **GitHub**: [github.com/seshu362](https://github.com/seshu362)
- **Location**: Hyderabad, Telangana, India

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
