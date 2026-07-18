(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateLabel(btn) {
    var isDark = currentTheme() === "dark";
    btn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    updateLabel(btn);
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateLabel(btn);
      window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
      if (window.mermaid) {
        window.mermaid.initialize({ startOnLoad: false, theme: next === "dark" ? "dark" : "default" });
        document.querySelectorAll(".mermaid").forEach(function (el) {
          if (el.dataset.raw) el.innerHTML = el.dataset.raw;
        });
        window.mermaid.run();
      }
    });
  });
})();
