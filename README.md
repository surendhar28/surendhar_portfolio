# 🚀 Surendhar E R - Portfolio

A modern, responsive portfolio website showcasing my work as a Frontend Developer, Generative AI Engineer, and UI/UX Designer.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://your-portfolio-url.vercel.app)** *(Update after deployment)*

---

## 📋 About

This portfolio showcases my professional journey, including:

- 💼 **Work Experience** - Frontend Developer & GenAI Engineer at NRITUpSkills, UI/UX Designer at Prayana Electric & NOVI TECH
- 🚀 **Projects** - Blockchain Supply Chain, AI-Powered Agriculture Chatbot, HeartCare Patient Management System, and more
- 🎓 **Education** - M.Tech (Integrated) in CSE at VIT-AP
- 🏆 **Certifications** - Generative AI (HCL GUVI, Oracle), UI/UX Design (Georgia Tech, NoviTech), Blockchain (University at Buffalo)
- 📸 **Gallery** - Personal photos and project showcases

---

## 🛠️ Built With

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 with custom animations
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Email Service:** EmailJS (for contact form)

---

## ✨ Features

- 🎨 Modern, animated UI with smooth transitions
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌙 Dark theme with cyan/blue accent colors
- 🖼️ Interactive project gallery with live demos and GitHub links
- 📄 Downloadable resume
- 🎯 Dedicated Experience page with detailed work history
- 📧 Working contact form
- 🔗 Social media integration (GitHub, LinkedIn, Email, Instagram, WhatsApp)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/surendhar28/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── certs/          # Certificate images
│   ├── gallery/        # Personal photos
│   ├── projects/       # Project screenshots
│   ├── photo.jpg       # Profile photo
│   └── resume.pdf      # Resume PDF
├── src/
│   ├── components/     # Reusable components
│   │   └── Navbar.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Gallery.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Blog.jsx
│   ├── CSS/            # Stylesheets
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.mjs
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

**Automatic deployments:** Every push to `main` branch triggers a new deployment.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## 🎨 Customization

### Update Personal Information

Edit the following files:
- `src/pages/Home.jsx` - Name, tagline, social links
- `src/pages/About.jsx` - Professional summary, education
- `src/pages/Experience.jsx` - Work experience
- `src/pages/Projects.jsx` - Projects and GitHub links
- `src/pages/Skills.jsx` - Technical skills
- `src/pages/Certificates.jsx` - Certifications

### Update Assets

Replace files in the `public` folder:
- `photo.jpg` - Profile photo
- `resume.pdf` - Your resume
- `certs/` - Certificate images
- `gallery/` - Personal photos

---

## 📊 Performance

- ⚡ Fast loading with Vite
- 🎯 Optimized bundle size
- 📱 Mobile-first responsive design
- 🚀 Lazy loading for images
- ✨ Smooth animations with Framer Motion

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Surendhar E R**

- 🌐 Portfolio: [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)
- 💼 LinkedIn: [surendhar-e-r-310919269](https://www.linkedin.com/in/surendhar-e-r-310919269)
- 🐙 GitHub: [@surendhar28](https://github.com/surendhar28)
- 📧 Email: surendharcareeer28@gmail.com

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)

---

## 🔄 Updates

- **v1.0.0** (Feb 2026) - Initial release with all sections
  - Home, About, Projects, Experience, Skills, Certificates, Gallery, Resume, Contact
  - Fully responsive design
  - Deployed on Vercel

---

⭐ **If you like this portfolio, please give it a star!**

Made with ❤️ by Surendhar E R
