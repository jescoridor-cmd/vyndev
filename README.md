# Vyn~chatAI Texh — Version 1.0.4

Static, offline-first website. Chapter prose is now stored in independent JavaScript files, so new chapters can be added by uploading a chapter file and registering its path in one configuration file. No database or backend is required.

## Files
- `index.html` — app shell and script loading.
- `styles.css` — responsive layout and reader themes.
- `app.js` — navigation, validated reader, chat demo, profile, settings, and local persistence.
- `story-data.js` — novel metadata, character details, summaries, and outline titles.
- `chapter-manifest.js` — list of chapter files to load.
- `chapter-loader.js` — loads the files listed in the manifest.
- `chapters/volume-1/chapter-NN.js` — independent chapter prose files.
- `CHAPTER-FILE-GUIDE.md` — instructions and file format for adding chapters.
- `STORY_BIBLE.md` — character, timeline, continuity, and chapter planning.
- `CHANGELOG.md` — release notes.

## V1.0.4 story status
- Volume 1 plan: 22 chapters.
- Chapter target: 30 pages × 4 paragraphs per page.
- Paragraph target: 15–23 words.
- Chapter 1 is published as `chapters/volume-1/chapter-01.js` with 30 pages and 120 paragraphs.
- Chapters 2–22 remain outlines until their own chapter files are created and registered.
- Total target for Volume 1: 660 pages / 2,640 paragraphs. The novel is not yet complete.

## Add a chapter file
1. Create `chapters/volume-1/chapter-02.js` using the structure in `CHAPTER-FILE-GUIDE.md`.
2. Include exactly 30 page objects. Each page must have exactly 4 paragraphs; each paragraph must contain 15–23 words.
3. Upload the new file to the matching folder on your hosting.
4. Add its path to the array in `chapter-manifest.js`, for example: `"chapters/volume-1/chapter-02.js"`.
5. Ensure the module registers itself as `window.VYN_CHAPTERS[2]` and has `id: 2`.
6. Refresh the website. The chapter appears as Published only if it passes validation.

You do not need to edit `app.js`, `index.html`, or the reader to add a chapter. A chapter file not listed in the manifest is not loaded. Keep the folder paths and file names unchanged.

## Retained website features
- Main menu, companion chat demo, profile, avatar upload, background upload, settings.
- LocalStorage profile/chat/settings persistence.
- Export/import of local app data.
- Chapter reader with previous/next page, previous/next published chapter, theme toggle, and saved page position.
- Mobile-responsive layout.

## Important notes
- This remains a static site; there is no backend, database, or in-site chapter upload UI. Chapter files are uploaded to the hosting file manager/FTP and registered in `chapter-manifest.js`.
- Chapter validation runs when the website loads. Invalid or incomplete chapter files stay unpublished.
- The Companion Chat remains an offline scripted demo, not a live LLM.
- Existing LocalStorage profile, avatar, background, chat, and reader page progress are preserved during the V1.0.4 update.
- For reliable local testing, serve the folder through a local web server. Static hosting works normally over HTTP/HTTPS.

## Run locally
1. Extract the ZIP.
2. Serve the `vynchat_v1` folder with a local web server, or upload its contents to static hosting.
3. Open `index.html` through the local server URL or your hosted domain.
4. Keep the folders and all JavaScript files in their original relative locations.
