# Christian Mardini, Portfolio

https://mardini8.github.io/portfolio/

A React + Vite portfolio with animated components inspired by ReactBits, and a built-in PDF viewer for the CV.

## Tech

- **React 18** + **Vite 6** (fast dev server, optimized builds)
- **Framer Motion** for animations (same library that powers most ReactBits components)
- Custom animated components in `src/components/`:
  - `SplitText` — animates each word in headlines
  - `BlurText` — fades and unblurs on scroll
  - `AnimatedList` — staggered fade-in for lists and cards
  - `Magnet` — buttons subtly follow the cursor on hover
  - `CVModal` — overlay with the CV PDF embedded

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output lands in `dist/`.

## Deploy to GitHub Pages

**Step 1.** Open `vite.config.js` and set `base` to match your repo name.

- If your repo is named `portfolio`, leave `base: '/portfolio/'`.
- If your repo is named `Mardini8.github.io` (a user site), change it to `base: '/'`.

**Step 2.** Create the repo on GitHub and push your code.

**Step 3.** Deploy with one command:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch.

**Step 4.** On GitHub, go to **Settings, Pages, Source, Deploy from a branch, gh-pages, root, Save**.

Your site will be live at:
- `https://mardini8.github.io/portfolio/` if repo is `portfolio`
- `https://mardini8.github.io/` if repo is `Mardini8.github.io`

## Folder layout

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── SplitText.jsx
│   │   ├── BlurText.jsx
│   │   ├── AnimatedList.jsx
│   │   ├── Magnet.jsx
│   │   └── CVModal.jsx
│   └── assets/
│       └── Christian_Mardini_Resume.pdf
```

## Updating content

Almost everything is in `src/App.jsx`:

- `projects` array, projects section
- `timeline` array, experience and education
- `skills` array, skills section
- Hero text and contact info, in the JSX itself

To swap the CV, replace the PDF in `src/assets/`.

To change colors, edit the `:root` variables in `src/styles.css`.
