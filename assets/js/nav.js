document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.remove("preload");

  // Toggle "active" class on nav when label is clicked
  document.querySelectorAll("nav label").forEach(function (label) {
    label.addEventListener("click", function () {
      document.querySelector("nav").classList.toggle("active");
    });
  });

  // Toggle "active" class for nav links with submenus
  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      let sibling = this.nextElementSibling;
      // Proceed only if the next element is a UL
      if (sibling && sibling.tagName.toLowerCase() === "ul") {
        e.preventDefault();
        if (sibling.classList.contains("active")) {
          sibling.classList.remove("active");
        } else {
          document
            .querySelectorAll("nav ul.active")
            .forEach(function (activeUl) {
              activeUl.classList.remove("active");
            });
          sibling.classList.add("active");
        }
      }
    });
  });

  // Sticky nav function
  function stickyNav() {
    let header = document.querySelector("header");
    let nav = document.querySelector("nav");
    if (window.scrollY > header.offsetHeight) {
      header.style.marginBottom = nav.offsetHeight + "px";
      nav.classList.add("fixed");
    } else {
      header.style.marginBottom = 0;
      nav.classList.remove("fixed");
    }
  }

  // Bind scroll event and call stickyNav on load
  window.addEventListener("scroll", stickyNav);
  stickyNav();
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all panels on the page
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    const titleRow = panel.querySelector(".panel-title-row");
    const toggle = panel.querySelector(".panel-toggle");
    const content = panel.querySelector(".panel-content");

    // Add click event to the title row
    titleRow.addEventListener("click", function () {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", !isExpanded);
      content.style.display = isExpanded ? "none" : "block";
    });

    // Making sure the toggle button works independently
    toggle.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent double triggering via title row
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", !isExpanded);
      content.style.display = isExpanded ? "none" : "block";
    });

    // Make sure subheader doesn't trigger collapse
    const subheader = panel.querySelector(".panel-subheader");
    if (subheader) {
      subheader.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent event from bubbling up to panel-title-row
      });
    }
  });
});
