# AIC (Abu Dhabi Infrastructure Chain) - Official Website

<div align="center">
  <img alt="AIC Logo" src="https://aic-assets.aicchain.io/Logo_Black.png" width="200" />
</div>

<br/>

> The official landing page and portal for **AIC (Abu Dhabi Infrastructure Chain)** – The world's first L1 public chain designed specifically for high-frequency RWA trading and AI compute trading.

## 🌟 Overview

This repository contains the source code for the official website of AIC. It serves as the primary gateway for users, developers, and investors to learn about the AIC ecosystem, covering the dual-engine narrative of Energy RWA and Sovereign AI Compute.

### ✨ Key Features

- **🌐 Full Multilingual Support:** Seamlessly switch between English (EN), Chinese (ZH), and Arabic (AR) with full RTL (Right-to-Left) layout support for Arabic.
- **🌗 Advanced Theming:** Native Dark/Light mode integration that adapts to user system preferences and allows manual toggling.
- **⚡ High Performance:** Built on modern frontend stack (React + Vite) ensuring lightning-fast load times.
- **📱 Fully Responsive:** Carefully crafted mobile and desktop layouts ensuring a perfect experience across all devices.
- **🎨 Modern UI/UX:** Features dynamic data streams, glassmorphism design, scroll animations, and optimized SVG/Lucide icons.

## 🛠 Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AICChain-labs/AIC-Official-Website.git
   cd AIC-Official-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000` (or another port if 3000 is taken).

### Production Build

To build the application for production, run:

```bash
npm run build
```

This will generate optimized static files in the `dist` directory, ready to be deployed to any static hosting service (Vercel, Netlify, Cloudflare Pages, etc.).

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components & Layouts (Header, Footer, Hero, etc.)
├── context/             # React Contexts for global state (Theme, Language)
├── data/                # Static data & Multilingual translations (translations.ts)
├── styles/              # Global CSS and Tailwind configurations
├── App.tsx              # Main application root and routing
└── index.tsx            # Application entry point
```

## 🔗 AIC Ecosystem Links

Explore the AIC Ecosystem:
- **Main Website:** [https://aicchain.io](https://aicchain.io)
- **AIC Swap:** [https://swap.aicchain.io](https://swap.aicchain.io)
- **Cross-Chain Bridge:** [https://bridge.aicchain.io](https://bridge.aicchain.io)
- **Blockchain Scan:** [https://scan.aicchain.io](https://scan.aicchain.io)
- **Developer Hub:** [https://dev.aicchain.io](https://dev.aicchain.io)
- **Testnet Faucet:** [https://dev.aicchain.io/#/faucet](https://dev.aicchain.io/#/faucet)


---
*© 2026 AIC Foundation (Abu Dhabi). All rights reserved.*
