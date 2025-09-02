
# ECG Recorder iOS – GitHub Pages Site

This folder contains a minimal Jekyll site for the app’s landing page.

**Live URL:** https://poml88.github.io/ecg-recorder-ios/

## Notes

- English lives at the root (`/`). Other languages use subfolders: `/de/`, `/fr/`, `/zh-Hans/`.
- Language is auto-detected on first visit and can be changed via the 🌐 button in the header.
- SEO uses `jekyll-seo-tag`. Hreflang alternates and an Apple Smart App Banner (`app-id=1541497051`) are included.
- German **Impressum** and **Datenschutzerklärung** are linked in the footer and are the legally binding versions.
- Base URL is set to `/ecg-recorder-ios` in `_config.yml` to match the GitHub Pages project site path.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

> GitHub Pages builds with the `github-pages` gem. Only allowed plugins are used (`jekyll-seo-tag`, `jekyll-sitemap`).

