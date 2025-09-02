# ECG Recorder Website

Static, multilingual Jekyll site for the ECG Recorder iOS/iPadOS app.

## Quick start (GitHub Pages)

1. Push these files to the `gh-pages` branch of the repository that is published at  
   `https://poml88.github.io/ecg-recorder-ios/`.
2. Ensure GitHub Pages is enabled for the repository and is building from `gh-pages`.
3. That’s it — GitHub Pages comes with the whitelisted plugins used here (`jekyll-seo-tag`, `jekyll-sitemap`).

## Multilingual

- **English** is the default at `/`.
- **German** at `/de/`, **French** at `/fr/`, **Simplified Chinese** at `/zh-Hans/`.
- Auto-detection tries to redirect first-time visitors based on `navigator.language`.
- The globe button toggles a menu to switch languages. Your choice is stored in `localStorage`.

## SEO

- Uses `{% seo %}` from `jekyll-seo-tag` for titles, meta, Open Graph & Twitter tags.
- `hreflang` alternates are added in the layout for all four languages.
- `robots.txt` and `sitemap.xml` (via `jekyll-sitemap`) are included.

## Apple App tags

- The smart banner meta is set: `<meta name="apple-itunes-app" content="app-id=1541497051">`.
- Replace `assets/img/app-store-badge.svg` with Apple's official badge if you prefer.

## Content

- Update `index.md` files (one per language) to maintain content in Markdown.
- Legal pages: the **German** versions are binding. Other languages link to `/de/` pages.

