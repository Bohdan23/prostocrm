// modals
if (document.querySelectorAll(".modal-overlay").length > 0) {
  document.addEventListener("DOMContentLoaded", function () {
    let modalButtons = document.querySelectorAll(".js-open-modal"),
      overlay = document.querySelector(".modal-overlay"),
      closeButtons = document.querySelectorAll(".vue-modal-btn-close");
    modalButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        let modalId = this.getAttribute("data-modal"),
          modalElem = document.querySelector(
            '.vue-modal[data-modal="' + modalId + '"]'
          );
        modalElem.classList.add("active");
        overlay.classList.add("active");
        document.querySelectorAll("body")[0].classList.add("open");

        let div = document.createElement("div");
        div.style.overflowY = "scroll";
        div.style.width = "50px";
        div.style.height = "50px";
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.parentNode.removeChild(div);

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = scrollWidth + "px";
      });
    });
    closeButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        let parentModal = this.closest(".vue-modal");
        parentModal.classList.remove("active");
        overlay.classList.remove("active");
        document.querySelectorAll("body")[0].classList.remove("open");

        document.body.style.overflow = "";
        document.body.style.padding = "";
      });
    });
    document.body.addEventListener(
      "keyup",
      function (e) {
        const key = e.keyCode;
        if (key == 27) {
          document
            .querySelector(".vue-modal.active")
            .classList.remove("active");
          document.querySelector(".modal-overlay").classList.remove("active");
          document.querySelectorAll("body")[0].classList.remove("open");

          document.body.style.overflow = "";
          document.body.style.padding = "";
        }
      },
      false
    );
    overlay.addEventListener("click", function () {
      document.querySelector(".vue-modal.active").classList.remove("active");
      this.classList.remove("active");
    });
  });
}

// header dropdown
if (document.querySelectorAll(".dropdown-wrapper").length > 0) {
  document.querySelector(".dropdown-trigger").onclick = function (e) {
    this.closest(".dropdown-wrapper").classList.toggle("is-opened");
  };
}

// sidebar
if (document.querySelectorAll(".js-minimize-sidebar").length > 0) {
  document.querySelector(".js-minimize-sidebar").onclick = function(e) {
    document.querySelector(".js-sidebar").classList.toggle("is-minimized");
  };
}