document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const homeButton = document.getElementById("homeButton");
  const navButtons = document.querySelectorAll(".header__nav__ul__li__btn-link");

  menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("visible");
      menuToggle.setAttribute("aria-expanded", isOpen);
  });

  homeButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  navButtons.forEach(button => {
      button.addEventListener("click", (event) => {
          const sectionId = event.target.getAttribute("data-section");
          const section = document.getElementById(sectionId);
          if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          navMenu.classList.remove("visible");
          menuToggle.setAttribute("aria-expanded", "false");
      });
  });
});