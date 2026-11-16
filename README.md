# xyro — smoke · spice · crunch

Static connect page (plain HTML, CSS and JavaScript). No build step, no dependencies.

## Structure
```
index.html        page markup (edit link URLs here)
css/style.css     all styles
js/main.js        image fallback
assets/           logo.webp, mascot.webp
.nojekyll         tells GitHub Pages to serve files as-is
```

## Edit the links
Open `index.html` and search for `EDIT THE href`. Change the `href="..."` of each button.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000

## Deploy on GitHub Pages
1. Push these files to the **root** of a GitHub repository (`index.html` must be at the top level).
2. Repo → **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, then Save.
4. After a minute the site is live at `https://<username>.github.io/<repo-name>/`.
