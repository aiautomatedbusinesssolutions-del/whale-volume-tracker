# Whale Watcher: Real-Time Stock Volume Tracker

A dark-themed stock volume analysis dashboard that detects whale activity (large institutional trades) using real-time data from the Alpha Vantage API. Built with Next.js, Tailwind CSS, and TypeScript.

**[Live Demo](https://whale-watcher.netlify.app)**

## Overview

Whale Watcher analyzes trading volume patterns to generate buy/sell signals using a traffic light system:

- **Green (Emerald)** — Strong buy signal with 70-100% confidence
- **Yellow (Amber)** — Caution, mixed signals at 30-70% confidence
- **Red (Rose)** — Weak/sell signal at 0-30% confidence

When volume surges to 3x+ above average with positive price action, the app flags it as whale activity (95% confidence) with a bouncing whale emoji.

### Features

- Real-time stock data via Alpha Vantage API
- Circular confidence gauge with color-coded signals
- Whale detection for institutional-level volume surges
- Historical pattern analysis across 30-day, 90-day, and 1-year timeframes
- Pattern alerts: High Volume Surge, Divergence Warning, Low Volume Breakout, Volume Declining
- Persistent watchlist (localStorage)
- Educational tooltips explaining volume, divergence, fake breakouts, and more
- Google Analytics integration

## Getting Started

### Prerequisites

- Node.js 18+
- An [Alpha Vantage API key](https://www.alphavantage.co/support/#api-key) (free tier available)

### Installation

```bash
git clone https://github.com/aiautomatedbusinesssolutions-del/whale-volume-tracker.git
cd whale-volume-tracker
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_ALPHAVANTAGE_API_KEY=your_alpha_vantage_api_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (dark mode, slate/emerald/amber/rose palette)
- **Icons**: Lucide React
- **API**: Alpha Vantage (GLOBAL_QUOTE + TIME_SERIES_DAILY)
- **Analytics**: Google Analytics via @next/third-parties
- **Deployment**: Netlify
