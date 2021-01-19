(function() {

  if (!window._chatty) { return; }

  var config = Object.assign({ open: true }, window._chatty);

  var container = null;
  var toggleButton = null;

  function loadChatWidget() {
    container = document.createElement("div");
    container.innerHTML = "" +
      "<div class='chatty-control'><button type='button' id='chatty-toggle'>Hi</button></div>"+
      "<iframe src='http://localhost:3001/assets/vendor/chatty/index.html'></iframe>"
    container.style.position = "fixed";
    container.style.bottom = "-600px";
    container.style.right = "10px";
    container.style.maxWidth = "360px";
    container.style.width = "100%";
    container.style.transition = "all 200ms ease-in-out";

    var controlBar = container.querySelector(".chatty-control");
    controlBar.style.textAlign = "right";
    controlBar.style.height = "92px";

    toggleButton = container.querySelector("#chatty-toggle");
    toggleButton.style.padding = "10px";
    toggleButton.style.margin = "10px";
    toggleButton.style.backgroundColor = "#47b4a1";
    toggleButton.style.color = "white";
    toggleButton.style.fontWeight = "bold";
    toggleButton.style.border = "2px solid #2a6a5f";
    toggleButton.style.borderRadius = "72px";
    toggleButton.style.fontSize = "40px";
    toggleButton.style.lineHeight = "50px";
    toggleButton.style.width = "72px";

    var chattyFrame = container.querySelector("iframe");
    chattyFrame.style.margin = "0 0 -10px 0";
    chattyFrame.style.border = "none";
    chattyFrame.style.height = "600px";
    chattyFrame.style.width = "100%";
    chattyFrame.style.borderRadius = "6px";

    toggleButton.addEventListener("click", function() {
      if (toggleButton.textContent === "X") {
        close();
      }
      else {
        open();
      }
    });

    document.body.appendChild(container);

    chattyFrame.addEventListener("load", function() {
      if (config.open) {
        setTimeout(open, 100);
      }
    })
  }

  function open() {
    if (!container) { return; }
    container.style.bottom = "0";
    toggleButton.textContent = "X";
  }

  function close() {
    if (!container) { return; }
    container.style.bottom = "-600px";
    toggleButton.textContent = "Hi";
  }

  window.addEventListener("DOMContentLoaded", loadChatWidget);

})();
