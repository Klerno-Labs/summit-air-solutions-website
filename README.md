# Summit Air Solutions - Project Build

This project is a high-performance, responsive, single-page application (SPA) designed for Summit Air Solutions, an HVAC service provider in Austin, TX. It serves as the primary marketing lead-generation tool, emphasizing trust, speed, and clarity.

## Tech Stack

*   **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Styling**: Tailwind CSS (via CDN for standalone deployment)
*   **Icons**: Lucide Icons
*   **Fonts**: Manrope (Headings), Inter (Body) via Google Fonts
*   **Performance**: Lazy loading (native), optimized asset delivery via Unsplash Source API.

## Getting Started

This project is designed to be portable. You do not need a complex build step to run it locally.

### Installation
1.  Clone or download this repository.
2.  Open `index.html` in any modern web browser.

### Development
1.  Since this uses the Tailwind CDN, changes to classes are reflected immediately upon refresh.
2.  For production, you may want to switch the Tailwind CDN link to a local build or a script tag pointing to a compiled CSS file for better performance (See Deployment Guide).

## Project Structure

```
.
├── index.html          # The complete application (HTML, CSS, JS)
├── README.md           # This file
├── CHANGELOG.md        # Version history
├── DEPLOYMENT_GUIDE.md # Instructions for hosting
├── CLIENT_HANDOFF.md   # Guide for the client
└── .env.example        # Environment variable template
```

## Image Customization

Images are currently sourced dynamically from Unsplash to ensure high quality without local dependencies.