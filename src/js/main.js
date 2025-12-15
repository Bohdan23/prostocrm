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

//sidebar add company
if (document.querySelectorAll(".js-sidebar-add-company").length > 0) {
  document.querySelector(".js-sidebar-add-company").onclick = function(e) {
    document.querySelector(".js-sidebar").classList.toggle("is-adding");
  };
}

//dropdowns
if (document.querySelectorAll(".dropdown-trigger").length > 0) {
  document.querySelectorAll('.dropdown-trigger').forEach(item => {
    item.onclick = function(e) {
      this.closest(".dropdown").classList.toggle("is-opened");
    };
  });
}

//bottom menu SIDEBAR trigger
if (document.querySelectorAll(".js-sidebar-trigger").length > 0) {
  document.querySelector(".js-sidebar-trigger").onclick = function(e) {
    document.querySelector(".js-sidebar").classList.toggle("is-active");
  };
}

// RELATIONSHIPS panel
// bottom menu RELATIONSHIPS panel
if (document.querySelectorAll(".js-relationships-trigger").length > 0) {
  document.querySelector(".js-relationships-trigger").onclick = function(e) {
    document.querySelector(".js-relationships-open").classList.toggle("is-hidden");
    document.querySelector(".js-relationships-wrapper").classList.toggle("is-active");
  };
}
// table RELATIONSHIPS panel
if (document.querySelectorAll(".js-relationships-open").length > 0) {
  document.querySelector(".js-relationships-open").onclick = function(e) {
    this.classList.add("is-hidden");
    document.querySelector(".js-relationships-wrapper").classList.toggle("is-active");
  };
}
// RELATIONSHIPS panel
if (document.querySelectorAll(".js-relationships-close").length > 0) {
  document.querySelector(".js-relationships-close").onclick = function(e) {
    document.querySelector(".js-relationships-open").classList.remove("is-hidden");
    document.querySelector(".js-relationships-wrapper").classList.remove("is-active");
  };
}

//table open details
if (document.querySelectorAll(".js-table-info-open").length > 0) {
  document.querySelector(".js-table-info-open").onclick = function(e) {
    document.querySelector(".js-table").classList.add("is-active");
    document.querySelector(".js-table-info").classList.add("is-active");
    this.classList.add('is-selected');
  };
  document.querySelector(".js-table-info-close").onclick = function(e) {
    document.querySelector(".js-table").classList.remove("is-active");
    document.querySelector(".js-table-info").classList.remove("is-active");
    document.querySelector(".js-table-info-open.is-selected").classList.remove("is-selected");
  };
}

//popover
// function setPopoverPosition(triggerElem, targetElem) {
  // const triggerButtonRect = triggerElem.getBoundingClientRect();
  // targetElem.style.left = (triggerButtonRect.left + 25) + 'px';
  // targetElem.style.top  = (triggerButtonRect.top  + 25) + 'px';
// }

// function refreshActivePopovers() {
//   document.querySelectorAll('.js-popover-item.is-active').forEach(item => {
//     const trigger = item.closest('.js-popover-trigger');
//     if (trigger) setPopoverPosition(trigger, item);
//   });
// }

// window.addEventListener('resize', refreshActivePopovers);
// window.addEventListener('scroll', refreshActivePopovers, { passive: true });

// if (window.visualViewport) {
//   visualViewport.addEventListener('resize', refreshActivePopovers);
//   visualViewport.addEventListener('scroll', refreshActivePopovers);
// }

// document.querySelectorAll('.js-popover-trigger').forEach(trigger => {
//   const popover = trigger.querySelector('.js-popover-item');
//   trigger.addEventListener('click', (e) => {
//     e.stopPropagation();
//     popover.classList.toggle('is-active');
//     if (popover.classList.contains('is-active')) {
//       setPopoverPosition(trigger, popover);
//     }
//   });
// });