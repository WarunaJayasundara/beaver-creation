# Where to upload your images and logo

- **If you upload a file** to the folder → the site shows **your image**.
- **If you don’t upload** → the site shows a **dummy/placeholder image** instead.

Put your image files in the folders below. The site will load them from here.

---

## Logo (navigation bar)

| Upload here | File name | Used in |
|-------------|-----------|---------|
| `public/images/logo/` | **logo.png** (or logo.svg) | Header / Nav on every page |

- Recommended: **PNG or SVG**, about **36×36 px** to **80×80 px** (will be shown at 36px height).
- If you don't add a file here, the built-in Beaver SVG logo is used.

---

## Hero (main banner on homepage)

| Upload here | File name | Used in |
|-------------|-----------|---------|
| `public/images/hero/` | **hero-bg.jpg** | Full-screen background on the top of the homepage |

- Recommended: **Landscape**, at least **1600×900 px**, JPG or PNG.

---

## About section

| Upload here | File name | Used in |
|-------------|-----------|---------|
| `public/images/about/` | **about-team.jpg** | "Who We Are" section on homepage |

- Recommended: **4:3 ratio**, at least **800×600 px**, JPG or PNG.

---

## Portfolio / projects (homepage + portfolio page)

| Upload here | File name | Used in |
|-------------|-----------|---------|
| `public/images/portfolio/` | **project-1.jpg** | Project 1 – e.g. Cyber Realm (featured) |
| `public/images/portfolio/` | **project-2.jpg** | Project 2 |
| `public/images/portfolio/` | **project-3.jpg** | Project 3 |
| `public/images/portfolio/` | **project-4.jpg** | Project 4 |
| `public/images/portfolio/` | **project-5.jpg** | Project 5 |
| `public/images/portfolio/` | **project-6.jpg** | Project 6 |

- Recommended: **4:3 ratio**, at least **800×600 px** each, JPG or PNG.
- **project-1** is the large featured image on the homepage.

---

## Services (division page backgrounds, optional)

| Upload here | File name | Used in |
|-------------|-----------|---------|
| `public/images/services/` | **creative-media-bg.jpg** | Creative Media division page |
| `public/images/services/` | **digital-platforms-bg.jpg** | Digital Platforms division page |
| `public/images/services/` | **smart-engineering-bg.jpg** | Smart Engineering division page |
| `public/images/services/` | **rnd-bg.jpg** | R&D & Innovation division page |

- Recommended: **Landscape**, at least **1600×900 px**, JPG or PNG.
- If you don't add these, the site uses placeholder backgrounds.

---

## Folder structure (quick reference)

```
public/
  images/
    README.md          ← this file
    logo/
      logo.png         ← your logo
    hero/
      hero-bg.jpg      ← hero background
    about/
      about-team.jpg   ← about section image
    portfolio/
      project-1.jpg
      project-2.jpg
      ...
      project-6.jpg
    services/
      creative-media-bg.jpg
      digital-platforms-bg.jpg
      smart-engineering-bg.jpg
      rnd-bg.jpg
```

After adding or changing files, refresh the browser (or restart `npm run dev` if needed).
