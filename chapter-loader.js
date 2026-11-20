/* Loads chapter modules listed in chapter-manifest.js before app.js starts. */
(function () {
  var files = Array.isArray(window.VYN_CHAPTER_MANIFEST) ? window.VYN_CHAPTER_MANIFEST : [];
  files.forEach(function (path) {
    if (typeof path !== 'string' || !/^chapters\/volume-1\/chapter-\d{2}\.js$/.test(path)) {
      console.error('Ignored invalid chapter path:', path);
      return;
    }
    document.write('<script src="' + path.replace(/[&<>"']/g, '') + '"><\/script>');
  });
})();
