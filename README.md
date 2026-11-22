# Vyn Novel Space v2.0.0

Static modular web app. Upload the whole folder to GitHub Pages (or serve it from any static host). Open `index.html` locally in a modern browser.

## Structure
- `index.html`: app shell
- `css/styles.css`: main styles
- `css/image-manager.css`: image manager styling
- `js/app.js`: existing application logic and database
- `js/image-manager.js`: v2 image upload, previews, Image Manager

## Important
The app uses browser IndexedDB. Your novels stay in the browser profile. Use **Settings → Backup Library** regularly; restoring JSON is supported. The app does not upload your images to a server.

## GitHub Pages
Upload the contents of this folder to your repository root. Ensure `index.html` is at the root.
