# Vyn~ Developer Portfolio

A static multi-page portfolio website for GitHub Pages.


## Pages
- `index.html` — homepage, profile, projects overview, services
- `projects.html` — project portfolio
- `skills.html` — skills and workflow
- `contact.html` — Discord, email, contact form (mailto)

## Features
- Responsive mobile/tablet/desktop
- Dark theme + light theme toggle
- Loading screen
- Scroll reveal
- Local WIB clock on homepage
- Language toggle (basic content translation)
- Music toggle UI (placeholder, no audio file wired)
- CSS avatar illustration
- Contact form opens default email app
- No backend or personal data storage

## Deploy to GitHub Pages
1. Create a GitHub repository, e.g. `vyn-portfolio`.
2. Upload all files/folders in this project to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the generated URL.


## Customize
- Change content in the HTML files.
- Change accent color in `assets/style.css` at `--accent`.
- Replace `assets/avatar.svg` with a custom avatar illustration if desired.
- Music toggle is UI-only until an audio file and playback logic are added.
