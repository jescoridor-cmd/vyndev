/*
 * Vyn~chatAI Texh v1.0.4 — reliable chapter loader
 * Loads chapter files sequentially, then starts app.js.
 * Avoids document.write(), which is unsafe after document parsing.
 */
(function () {
  "use strict";

  var manifest = Array.isArray(window.VYN_CHAPTER_MANIFEST)
    ? window.VYN_CHAPTER_MANIFEST
    : [];

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = function () {
        reject(new Error("Gagal memuat file: " + src));
      };
      document.body.appendChild(script);
    });
  }

  function showLoadError(message) {
    var view = document.getElementById("view");
    if (!view) return;
    var notice = document.createElement("p");
    notice.className = "story-note";
    notice.textContent = message;
    view.prepend(notice);
  }

  async function start() {
    for (var i = 0; i < manifest.length; i += 1) {
      var path = manifest[i];

      if (
        typeof path !== "string" ||
        !/^chapters\/volume-1\/chapter-\d{2}\.js$/.test(path)
      ) {
        console.error("Ignored invalid chapter path:", path);
        continue;
      }

      try {
        await loadScript(path);
      } catch (error) {
        console.error(error);
        showLoadError(
          "Sebagian naskah gagal dimuat. Periksa file " + path +
          " dan pastikan nama folder serta file sesuai."
        );
      }
    }

    try {
      await loadScript("app.js");
    } catch (error) {
      console.error(error);
      showLoadError("Aplikasi gagal dimuat. Periksa file app.js.");
    }
  }

  start();
})();
