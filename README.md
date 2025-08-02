# 🎧 Audiophile E-commerce Website (In Progress)

Welcome to the **Audiophile E-commerce Website**, a full-featured, multi-page e-commerce platform for premium audio gear.

This is a professional project being built from the ground up with modern tooling including **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Zustand**, and **ShadCN UI**.

This README outlines our goals, stack, implementation strategy, and ongoing progress. The project is being built publicly and documented in a blog series at [andrewteece.com](https://andrewteece.com).

---

## 🧭 Project Overview

The goal is to create a polished, scalable e-commerce web app with:

- Dynamic product listings and detail pages
- Cart and checkout functionality
- Responsive design and accessibility
- Modern architecture and clean component structure

It will serve both as a **real-world portfolio piece** and a demonstration of full front-end system design.

---

## 🔧 Tech Stack

| Category           | Tool |
|--------------------|------|
| Framework          | [Next.js 15](https://nextjs.org/) (App Router) |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com) |
| Components         | [ShadCN/UI](https://ui.shadcn.com) |
| State Management   | [Zustand](https://github.com/pmndrs/zustand) |
| Type Safety        | TypeScript |
| Animations         | Framer Motion |
| Icons              | Lucide |
| Testing            | Jest + React Testing Library, Playwright |
| Deployment         | Vercel (planned) |

---

## 📦 Current Status

This project is currently in the **setup & planning phase**.

We have:
- ✅ Initialized the project with `create-next-app`
- ✅ Installed Tailwind CSS v4
- ✅ Integrated ShadCN UI components
- ✅ Created initial folder structure:
  - `components/`, `features/`, `store/`, `lib/`, `types/`, `data/`, `styles/`

---

## 🗂️ Planned Folder Structure

src/
├── app/ # App Router pages/layout
├── components/ # UI + reusable components
├── features/ # Feature-level modules (cart, checkout, etc.)
├── store/ # Zustand state
├── lib/ # Utility functions
├── types/ # TypeScript interfaces
├── data/ # Static or CMS-driven product data
├── styles/ # Tailwind and global styles

## ✨ Feature Goals

- ✅ Layout shell with responsive header/footer
- 🛒 Cart functionality with add/edit/remove
- 🧾 Checkout form with validation
- 💵 Dynamic totals (VAT + shipping logic)
- 📱 Mobile-first responsive design
- 💾 Cart persistence with `localStorage`
- 🔐 Accessible navigation and modals
- 🌐 CMS integration (planned)
- 🧪 Testing setup with Jest + Playwright

---

## 📅 Development Milestones

| Phase                  | Status  |
|------------------------|---------|
| Project Init + Config  | ✅ Done |
| Layout Shell Setup     | ⏳ Starting Next |
| Product Pages & Cart   | ⏳ Planned |
| Checkout Flow          | ⏳ Planned |
| CMS Integration        | 🔜 Optional |
| Testing & QA           | 🔜 Final Phase |
| Blog Documentation     | 📝 Ongoing |

---

## 🧠 Learning & Documentation Goals

This project will be featured in a **build-in-public** blog series at [andrewteece.com/blog](https://andrewteece.com/blog), covering:

- Architecture decisions
- Component breakdowns
- Performance considerations
- UI/UX design decisions
- Accessibility implementation
- Lessons learned

---

## 🧪 Testing Stack

| Type        | Tool |
|-------------|------|
| Unit/Component | **Jest** + **React Testing Library** |
| E2E Testing    | **Playwright** |
| Linting & Types| ESLint, TypeScript |
| Accessibility  | Optional: axe-core / Playwright a11y tools |

---

## 📬 Feedback & Contact

Questions or suggestions?  
Connect via [LinkedIn](https://www.linkedin.com/in/andrew-teece/) or visit [andrewteece.com](https://andrewteece.com).

---

## 💡 Next Step

We’ll begin building the **layout shell** with navigation, footer, and responsive container components using ShadCN and Tailwind’s new v4 utilities. This foundation will support all feature development moving forward.

Stay tuned!
