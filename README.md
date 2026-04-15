# austinfv.dev

My personal portfolio website — built with React, TypeScript, Tailwind CSS, and shadcn/ui.

**[Live site →](https://austinfv.dev)**

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Features

- Light / dark mode with system preference detection
- Fully responsive (mobile, tablet, desktop)
- Accessible — semantic HTML, focus-visible states, ARIA labels
- Interactive tabbed experience section
- Smooth scroll navigation

## Running Locally

```bash
# Clone the repo
git clone https://github.com/Austin-FV/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/     # React components (Header, Hero, About, Experience, Projects, etc.)
│   └── ui/         # shadcn/ui primitives (Button, Card, Badge, Sheet, Separator)
├── data/           # Content data files (profile, experience, projects, technologies)
├── lib/            # Utility functions
└── types/          # TypeScript type definitions
```

All portfolio content lives in `src/data/` — edit those files to update the site without touching component code.

## Build

```bash
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## License

MIT
