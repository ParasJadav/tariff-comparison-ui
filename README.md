# Tariff Comparison UI - Technical Documentation

## Overview

The **Tariff Comparison UI** is a front-end Angular application designed to interact with a backend service to compare tariffs from different providers. It provides a user-friendly interface to filter, search, and display available tariff plans.

Repository URL: [tariff-comparison-ui](https://github.com/ParasJadav/tariff-comparison-ui)

---

## Technologies Used

- **Angular** (v15+)
- **TypeScript**
- **RxJS**
- **Angular Material** (for UI components)
- **SCSS** (for styling)

---

## Project Structure

```
src/
│
├── app/
│   ├── components/          # UI Components (cards, tables, forms)
│   ├── services/            # Service layer for API calls
│   ├── models/              # Interfaces and data types
│   ├── pages/               # Container components for routing
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/                 # Static assets (images, JSON)
├── environments/           # Dev and prod environment settings
└── styles.scss             # Global styling
```

---

## Features

- **Tariff Listing**: Displays a list of available tariff plans.
- **Filtering**: Users can filter tariffs based on consumption, and type.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- Angular CLI (v15+)

### Installation

```bash
# Clone the repository
$ git clone https://github.com/ParasJadav/tariff-comparison-ui.git
$ cd tariff-comparison-ui

# Install dependencies
$ npm install

# Run the development server
$ ng serve
```

## Deployment

The app can be deployed to any static hosting provider like **Netlify**, **Vercel**, **Firebase Hosting**, or **GitHub Pages** after running the production build.

---

## Future Enhancements

- User authentication
- Integration with more data providers
- Unit and e2e testing

---
