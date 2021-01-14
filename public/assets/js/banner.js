/**
 * This renders a Cookie/GDPR consent banner into the page.
 */
(function (ready) {
  if (document.readyState === "complete") {
    ready();
  } else {
    document.addEventListener('readystatechange', function(event) {
      if (document.readyState === "complete") {
        ready();
      }
    });
  }
})(function main() { /* the document is now ready. */

  var consentBannerEl = document.createElement("div");
  consentBannerEl.classList.add("consent-banner");
  consentBannerEl.innerHTML = "<div class='container'><p>some stuff</p><button class='btn btn-big btn-blue'>I Accept</button></div>";
  consentBannerEl.querySelector(".btn").addEventListener("click", function() {
    // user accepted
    document.body.removeChild(consentBannerEl);
  });

  document.body.insertBefore(consentBannerEl, document.body.children[0]);

});