# 📈 Folio - Premium Next.js Fintech Dashboard

Folio is a production-ready, highly animated financial dashboard UI kit built for modern web developers. Featuring a flawless CSS-first dark mode, fluid Framer Motion animations, and complex Tremor data visualizations, it is the perfect starting point for SaaS platforms, crypto trackers, and personal finance apps.

![Folio Preview](https://via.placeholder.com/1200x630?text=Folio+Dashboard+Preview) _(Note: Add a screenshot of your dashboard here!)_

## ✨ Key Features

- **Dashboard Overview:** Quick stat cards, portfolio growth area charts, and dynamic transaction tables.
- **Portfolio Analytics:** Asset allocation donuts and risk-adjusted health score bars.
- **Authentication UI:** Minimalist, centered Login and Sign-up screens using Next.js Route Groups.
- **Flawless Dark Mode:** Native implementation using `next-themes` and Tailwind v4.
- **Smooth Animations:** Staggered spring animations on page load and mobile menu toggles.
- **Developer Experience:** Fully typed with TypeScript, strict ESLint rules, and isolated Shadcn components.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **UI Primitives:** [Shadcn UI](https://ui.shadcn.com/)
- **Charts:** [Tremor](https://www.tremor.so/) (Built on Recharts)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone [https://github.com/killmong/folio.git](https://github.com/killmong/folio.git)
cd folio
```
Gemini said
Folio is a fantastic, clean name for a financial dashboard. It sounds highly professional, memorable, and immediately tells the buyer what the product is meant to do.

Here is your finalized, launch-ready README.md updated specifically for Folio. Notice how the bottom section is perfectly optimized to funnel buyers directly to your freelance services.

The Final GitHub README
Overwrite your README.md with this exact code:

Markdown
# 📈 Folio - Premium Next.js Fintech Dashboard

Folio is a production-ready, highly animated financial dashboard UI kit built for modern web developers. Featuring a flawless CSS-first dark mode, fluid Framer Motion animations, and complex Tremor data visualizations, it is the perfect starting point for SaaS platforms, crypto trackers, and personal finance apps.

![Folio Preview](https://via.placeholder.com/1200x630?text=Folio+Dashboard+Preview) *(Note: Add a screenshot of your dashboard here!)*

## ✨ Key Features
- **Dashboard Overview:** Quick stat cards, portfolio growth area charts, and dynamic transaction tables.
- **Portfolio Analytics:** Asset allocation donuts and risk-adjusted health score bars.
- **Authentication UI:** Minimalist, centered Login and Sign-up screens using Next.js Route Groups.
- **Flawless Dark Mode:** Native implementation using `next-themes` and Tailwind v4.
- **Smooth Animations:** Staggered spring animations on page load and mobile menu toggles.
- **Developer Experience:** Fully typed with TypeScript, strict ESLint rules, and isolated Shadcn components.

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 
- **UI Primitives:** [Shadcn UI](https://ui.shadcn.com/)
- **Charts:** [Tremor](https://www.tremor.so/) (Built on Recharts)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone [https://github.com/killmong/folio.git](https://github.com/killmong/folio.git)
cd folio
2. Install dependencies
(Note: Tremor currently requires the legacy-peer-deps flag to bypass React 19 warnings).

Bash
npm install --legacy-peer-deps
3. Start the development server
Bash
npm run dev
Open http://localhost:3000 to view the dashboard.

📂 Project Architecture
Folio uses Next.js Route Groups to seamlessly separate the authentication flow from the main application without breaking the URL structure.

Plaintext
src/app/
├── (auth)/                  # No Sidebar Layout
│   ├── login/
│   └── signup/
├── (dashboard)/             # Main Dashboard Layout (Includes Sidebar)
│   ├── news/
│   ├── portfolio/
│   ├── settings/
│   ├── transactions/
│   └── page.tsx             # The primary dashboard view
├── globals.css              # Global Tailwind v4 Theme Variables
└── layout.tsx               # Root layout (Theme Provider)
🎨 One-Click Theming
You do not need to edit complex configuration files to rebrand Folio.

Open src/app/globals.css.

Locate the --primary variable in the :root (Light) and .dark blocks.

Update the HSL values to your brand's primary color. All charts, buttons, and active states will update instantly.

🤝 Custom Development & Integration
Need this dashboard connected to a live database, authentication provider, or payment gateway?

As a Full Stack Developer specializing in the MERN stack and Next.js, I build robust, production-ready web applications. If you need a custom backend integrated with this UI, hire me on Upwork (Note: link your actual Upwork profile here) to bring your project to life.

