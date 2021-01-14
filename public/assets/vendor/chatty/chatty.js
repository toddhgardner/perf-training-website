(function() {

  var container = null;
  var toggleButton = null;

  function loadChatWidget() {
    container = document.createElement("div");
    container.innerHTML = "" +
      "<div class='chatty-control'><button type='button' id='chatty-toggle'>X</button></div>"+
      "<iframe src='/assets/vendor/chatty/index.html'></iframe>"
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
    toggleButton.style.backgroundColor = "";
    toggleButton.style.fontWeight = "bold";
    toggleButton.style.border = "1px solid #CCC";
    toggleButton.style.borderRadius = "72px";
    toggleButton.style.fontSize = "40px";
    toggleButton.style.lineHeight = "50px";
    toggleButton.style.width = "72px";

    var chattyFrame = container.querySelector("iframe");
    chattyFrame.style.margin = "0 0 -10px 0";
    chattyFrame.style.border = "none";
    chattyFrame.style.height = "600px";
    chattyFrame.style.width = "100%";

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
      setTimeout(open, 100);
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
