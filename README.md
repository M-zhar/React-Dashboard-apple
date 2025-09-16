Project Overview

A responsive, animated, real-time analytics dashboard for Apple Search Ads (ASA) performance tracking built with modern React tooling. The application displays live KPIs, interactive charts, sortable/filterable tables, date and dimension filters, and smooth UI animations.

Core Goals

Real-time metrics (impressions, taps, installs, CPA, ROAS, spend)

Interactive charts (time series, breakdowns, funnels)

Data table with server-side pagination & sorting (React Table)

Global filters (date range, campaign, country, device)

Smooth animations with Framer Motion

Mobile-first, responsive layout using Tailwind CSS

State management with Redux Toolkit

Tech Stack

Frontend: React 18+ (functional components & hooks)

State: Redux Toolkit (slices, RTK Query optional)

Styling: Tailwind CSS

Animations: Framer Motion

Charts: Chart.js (via react-chartjs-2) or Recharts (examples for both)

Tables: React Table (v8+) for powerful data grid

Realtime: WebSockets (Socket.IO) or Server-Sent Events for live updates

Bundler: Vite (recommended) or Create React App

Features

Overview KPIs: Cards showing Live Impressions, Taps, Installs, CVR, CPA, ROAS, and Spend

Time Series: Interactive chart with zoom, hover, and dataset toggles

Breakdown Charts: Pie/Donut or stacked bar for campaigns, ad groups, countries

Conversion Funnel: Visual funnel chart showing steps from impression → tap → install → revenue

Data Table: Paginated and sortable list of raw events or aggregated campaign rows

Filtering: Date picker, search, multi-select campaign & country filters

Export: CSV/Excel download of current table view

Animations: Smooth card entrance, filter transitions, chart fades

Responsive: Grid rearrangement for mobile, tablet, desktop

Quickstart (Development)
Prerequisites

Node.js 18+ / npm 8+ or Yarn

Git