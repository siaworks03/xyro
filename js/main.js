/* ==========================================================
   xyro — smoke · spice · crunch
   Image fallback (replaces the React <ResilientImage> component).
   If an image fails to load, show a small branded placeholder
   instead of a broken-image icon.
   ========================================================== */
(function () {
  "use strict";

  // Same "image off" icon used in the original (Lucide: ImageOff)
  var IMAGE_OFF_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<line x1="2" y1="2" x2="22" y2="22"></line>' +
    '<path d="M10.41 10.41a2 2 0 1 1-2.82-2.82"></path>' +
    '<line x1="13.5" y1="13.5" x2="6" y2="21"></line>' +
    '<line x1="18" y1="12" x2="21" y2="15"></line>' +
    '<path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"></path>' +
    '<path d="M21 15V5a2 2 0 0 0-2-2H9"></path></svg>';

  function showFallback(img) {
    if (img.dataset.failed) return;
    img.dataset.failed = "true";

    var label = img.getAttribute("data-fallback") || "";

    // Decorative image with no label (e.g. the mobile background mascot): just hide it.
    if (!label) {
      img.style.display = "none";
      return;
    }

    var box = document.createElement("div");
    box.className = "img-fallback " + img.className;
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", img.alt);
    box.innerHTML = IMAGE_OFF_SVG + "<span></span>";
    box.querySelector("span").textContent = label;

    // Keep the same footprint as the broken image
    if (img.parentElement && img.parentElement.classList.contains("brand-logo")) {
      box.style.width = "100%";
      box.style.height = "100%";
    }

    img.replaceWith(box);
  }

  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function () {
      showFallback(img);
    });

    // The image may have already failed before this script ran
    if (img.complete && img.naturalWidth === 0) {
      showFallback(img);
    }
  });
})();
