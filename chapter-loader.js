/*
 * Vyn~chatAI Texh v1.0.4
 * Load manifest chapters in order, then initialize the application once.
 */
(function () {
  "use strict";
  var manifest = Array.isArray(window.VYN_CHAPTER_MANIFEST)
    ? window.VYN_CHAPTER_MANIFEST : [];

  function loadScript(path) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = path;
      script.onload = resolve;
      script.onerror = function () { reject(new Error("Tidak dapat memuat: " + path)); };
      document.head.appendChild(script);
    });
  }

  async function boot() {
    var failed = [];
    for (var i = 0; i < manifest.length; i++) {
      var path = manifest[i];
      if (typeof path !== "string" ||
          !/^chapters\/volume-1\/chapter-\d{2}\.js$/.test(path)) {
        console.error("Manifest path tidak valid:", path);
        failed.push(String(path));
        continue;
      }
      try {
        await loadScript(path);
      } catch (error) {
        console.error(error);
        failed.push(path);
      }
    }

    if (failed.length) {
      console.warn("Beberapa chapter tidak termuat:", failed);
    }

    try {
      await loadScript("app.js");
    } catch (error) {
      console.error("Gagal memulai aplikasi:", error);
      var view = document.getElementById("view");
      if (view) {
        var message = document.createElement("p");
        message.className = "story-note";
        message.textContent = "Aplikasi gagal dimuat. Periksa app.js dan koneksi file website.";
        view.appendChild(message);
      }
    }
  }

  boot();
})();
