// packages
const browsersync = require("browser-sync").create();

// BrowserSync
function init(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    files: ["./dist/scss/**/*.css", "./dist/js/**/*.js", "./dist/**/*.html", "./dist/**/*.php", "./**/*.html"],
    port: 3000
  });
  done();
}

// BrowserSync Reload
function reload(done) {
  browsersync.reload();
  done();
}

// exports
module.exports = {
  init: init,
  reload: reload
};