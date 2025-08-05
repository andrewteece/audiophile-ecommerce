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

The **mobile version of the homepage is functionally and visually complete.**

We have:
- ✅ Project scaffolded with `create-next-app` using `src/` directory
- ✅ Tailwind CSS v4 configured and tokenized with custom HSL themes
- ✅ ShadCN UI installed and integrated
- ✅ All homepage sections fully implemented for mobile:
  - Hero
  - Category Grid
  - ZX9 Feature
  - ZX7 Feature
  - YX1 Feature
  - Best Gear
  - Footer
- ✅ Shared `Container` component for layout consistency
- ✅ Fully responsive image system with `ResponsiveImage` abstraction
- ✅ Accessibility audit completed with semantic markup and alt text best practices

---

## ✨ Feature Goals

- ✅ Layout shell with responsive header/footer
- ✅ Mobile-first homepage layout with all sections
- ✅ Accessibility: alt text, roles, semantic elements
- 🛒 Cart functionality with add/edit/remove
- 🧾 Checkout form with validation
- 💵 Dynamic totals (VAT + shipping logic)
- 💾 Cart persistence with `localStorage`
- 🌐 CMS integration (planned)
- 🧪 Testing setup with Jest + Playwright

---

## 📅 Development Milestones

| Phase                         | Status      |
|-------------------------------|-------------|
| Project Init + Config         | ✅ Complete |
| Layout Shell + Global Styling | ✅ Complete |
| Mobile Homepage Components    | ✅ Complete |
| Tablet/Desktop Responsiveness | 🔜 Next |
| Category & Product Pages      | ⏳ Planned |
| Cart + Checkout Flow          | ⏳ Planned |
| CMS Integration               | 🔜 Optional |
| Testing & QA                  | 🔜 Final Phase |
| Blog Documentation            | 📝 Ongoing |

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

| Type            | Tool |
|-----------------|------|
| Unit Testing    | Jest + React Testing Library |
| End-to-End      | Playwright |
| Linting         | ESLint |
| Type Checking   | TypeScript |
| Accessibility   | Manual audit + Playwright a11y tooling |

---

## 📬 Feedback & Contact

Questions or suggestions?  
Connect via [LinkedIn](https://www.linkedin.com/in/andrew-teece/) or visit [andrewteece.com](https://andrewteece.com).

---

## 💡 Next Step

We'll now begin adapting the site for **tablet and desktop breakpoints**, followed by implementation of **category and product detail pages**. Component architecture and layout systems are in place to scale efficiently.

Stay tuned for the next update!