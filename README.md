# Vyn~chatAI Texh — Version 1.0.3

Static, offline-first website prototype. Open `index.html` in a modern browser or deploy the folder to a static host.

## Files
- `index.html` — app shell and script loading.
- `styles.css` — responsive layout and reader themes.
- `app.js` — navigation, reader, chat demo, profile, settings, and local persistence.
- `story-data.js` — Volume 1 chapter metadata and published novel pages.
- `STORY_BIBLE.md` — character, timeline, continuity, and chapter planning.
- `CHANGELOG.md` — release notes.

## V1.0.3 story status
- Volume 1 plan: 22 chapters.
- Chapter target: 30 pages × 4 paragraphs per page.
- Paragraph target: 15–23 words.
- Chapter 1 is published with 30 pages and 120 paragraphs.
- Chapters 2–22 currently have outlines only. They are clearly marked as outlines in the library and are not presented as completed prose.
- Total target for Volume 1: 660 pages / 2,640 paragraphs. The novel is **not yet complete**.

## Website features retained
- Main menu, companion chat demo, profile, avatar upload, background upload, settings.
- LocalStorage profile/chat/settings persistence.
- Export/import of local app data.
- Chapter reader with previous/next page, theme toggle, and saved page position.
- Mobile-responsive layout.

## Important
- Chat AI remains an offline scripted demo, not a live language model.
- Story progress is separate from profile/chat data. On first launch of v1.0.3, the old Furina reader page progress is reset because the novel has changed. Existing profile, avatar, background, and chat data remain in LocalStorage.
- This is a static site and does not require a server or database.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Keep `story-data.js`, `app.js`, `styles.css`, and `index.html` in the same folder.

## Deploy
Upload the contents of the extracted `vynchat_v1` folder to your static hosting provider. Do not rename or omit `story-data.js`.
