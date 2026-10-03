# Mohammadmostafa Rostamkhani — Personal Website

Static academic website for [mohammadmostafarostamkhani.github.io](https://mohammadmostafarostamkhani.github.io/).

## Files

- `index.html` — biography, education, research, publications, teaching, experience, honors, and contact.
- `assets/css/style.css` — typography, layout, responsive styles, and print styles.
- `assets/js/cv-download.js` — optional helper that saves the CV directly; ordinary PDF links remain available without JavaScript.
- `assets/cv/Mohammadmostafa_Rostamkhani_CV.pdf` — current downloadable academic CV.
- `assets/images/mohammadmostafa-rostamkhani.png` — supplied portrait, displayed beside the introduction on desktop and above it on mobile.
- `assets/favicon.svg` — favicon.
- `.nojekyll` — publishes the files without Jekyll processing.
- `ICON_CREDITS.md` — source and attribution details for the profile icons embedded in `index.html`.

Open `index.html` in a browser to preview. No installation or build command is required. Core content and navigation work without JavaScript.

Publish from **Settings → Pages → Deploy from a branch → main → /(root)**. Keep `index.html` at the repository root.

Edit text in `index.html`. Replace the PDF at its existing path to update all CV links. Update the footer date after content changes.

To update your portrait, replace `assets/images/mohammadmostafa-rostamkhani.png` with the new PNG. If its dimensions differ, update the portrait's `width` and `height` attributes in `index.html` to match the new image. Its displayed size is controlled by `.hero-portrait` in the stylesheet.

The portrait uses rounded corners. The academic and social icon row uses inline SVG, so it works offline without icon fonts or third-party scripts. Edit each `.social-link` destination in `index.html`; keep its `aria-label` and `data-label` accurate. Adjust `--social` in the stylesheet to change the icon color.

The complete publishing and maintenance guide is supplied separately as `GITHUB_PAGES_GUIDE.md`.
