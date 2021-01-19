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
  consentBannerEl.innerHTML = "" +
    "<div class='container'>" +
      "<div class='copy'>" +
        "<p>" +
          "<strong>Privacy Notice</strong><br />Like every other site on the Internet, we use cookies so that we can measure who visits our page and what they are interested in. We don't know your name or anything else about you. It's okay." +
        "</p>" +
      "</div>" +
      "<div class='control'>" +
        "<button class='btn btn-big btn-grey'>I Understand</button>"+
      "</div>" +
    "</div>";
  consentBannerEl.querySelector(".btn").addEventListener("click", function() {
    // user accepted
    document.body.removeChild(consentBannerEl);
  });

  document.body.insertBefore(consentBannerEl, document.body.children[0]);

});