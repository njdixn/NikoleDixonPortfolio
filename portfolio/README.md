# Nikole Dixon — Technical Portfolio SPA

A modern, responsive React Single Page Application (SPA) serving as the personal technical portfolio for **Nikole Dixon** — Software Developer & Creative Technologist. 

The site unites over a decade of aerospace operations leadership at The Boeing Company, high-honors software development coursework at Bellevue College (GPA 3.96), and a lifelong visual art practice (filet crochet painting).

This is a 100% static, front-end-only site with zero runtime databases, backend servers, or authentication. All content is config-driven by local TypeScript data modules.

---

## 🛠️ Technology Stack

- **Framework**: React 19 (Vite + TypeScript)
- **Routing**: React Router (client-side routing with GitHub Pages SPA redirect support)
- **Styling**: Tailwind CSS + Lucide Icons + custom fine art palette (`#195342` forest emerald, `#1C0920` deep plum, `#a3d4c5` mint)
- **Typography**: Cormorant Garamond (Serif), DM Mono (Code/Labels), Inter (Body)
- **Form UX**: `react-hook-form` + `zod` client-side validation generating formatted `mailto:` links
- **Deployment**: GitHub Pages (`gh-pages`) targeting `njdixn/NikoleDixonPortfolio`

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── 404.html              # GitHub Pages SPA deep link redirect handler
│   ├── favicon.svg           # Favicon asset
│   └── resume.pdf            # Static downloadable resume PDF
├── src/
│   ├── assets/               # Images and visual assets (hero.png)
│   ├── components/
│   │   ├── icons/            # SVG icons (GithubIcon, LinkedinIcon)
│   │   ├── ChainCarousel.tsx # Signature interactive circular chain-link carousel
│   │   ├── ContactForm.tsx   # React Hook Form + Zod validated contact component
│   │   ├── FadeIn.tsx        # Intersection observer animated entry wrapper
│   │   ├── Footer.tsx        # Global footer with links, copyright & quote
│   │   ├── LanguageBreakdown.tsx # Multi-stack technical distribution widget
│   │   ├── Navbar.tsx        # Responsive frosted glass navigation with mobile drawer
│   │   └── ProjectCard.tsx   # Modern project card with tags and live/source links
│   ├── data/                 # 100% Static Typed Configuration
│   │   ├── types.ts          # TypeScript interfaces
│   │   ├── projects.ts       # Real projects with tags, descriptions, links
│   │   ├── skills.ts         # Technical, leadership, platforms, reporting
│   │   ├── courses.ts        # Coursework with grades & Bellevue College GPA
│   │   ├── about.ts          # Bio, creative philosophy, art story, Zelda passion
│   │   ├── resume.ts         # Full Boeing experience & academic history
│   │   └── contact.ts        # Contact channels, email, phone, social links
│   ├── pages/
│   │   ├── Home.tsx          # Hero, language breakdown, philosophy, featured projects
│   │   ├── About.tsx         # Story, filet crochet art practice, catalyst moment
│   │   ├── Resume.tsx        # Inline HTML resume, GPA stat badge, coursework table, PDF download
│   │   ├── Skills.tsx        # Category cards with badges & proficiency context
│   │   ├── Projects.tsx      # Filterable grid + chain carousel view switcher
│   │   └── Contact.tsx       # Direct channels & validated email form
│   ├── App.tsx               # Client router with basename and scroll-to-top
│   ├── index.css             # Tailwind directives & custom CSS variables
│   ├── main.tsx              # React entrypoint
│   └── vite-env.d.ts         # Vite client type definitions
├── package.json              # Scripts & dependencies
├── tailwind.config.js        # Theme palette and font extensions
├── tsconfig.json             # TypeScript compiler configuration
└── vite.config.ts            # Vite base URL & alias configuration
```

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   cd portfolio
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Type check**:
   ```bash
   npm run typecheck
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🚀 GitHub Pages Deployment

The project is pre-configured with a base path of `/NikoleDixonPortfolio/` for production builds.

To deploy the build to the `gh-pages` branch:

```bash
cd portfolio
npm run deploy
```

Or target the remote repository explicitly:

```bash
npm run deploy:repo
```
