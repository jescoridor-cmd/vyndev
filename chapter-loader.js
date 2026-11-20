/*
 * Vyn~chatAI Texh v1.0.4
 * Synchronous chapter loader.
 * Chapter files execute before app.js.
 */
(function () {
  "use strict";

  var files = Array.isArray(window.VYN_CHAPTER_MANIFEST)
    ? window.VYN_CHAPTER_MANIFEST
    : [];

  files.forEach(function (path) {
    if (
      typeof path !== "string" ||
      !/^chapters\/volume-1\/chapter-\d{2}\.js$/.test(path)
    ) {
      console.error("Invalid chapter path:", path);
      return;
    }

    // index.html masih sedang diparsing di sini.
    // Script chapter akan dijalankan sebelum app.js.
    document.write(
      '<script src="' + path + '"><\/script>'
    );
  });

  console.info(
    "[Vyn] Chapter loader finished. Registered files:",
    files.length
  );
})();
