document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("is-open");
  
        const isOpen = mobileMenu.classList.contains("is-open");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  
    document.querySelectorAll(".scroll-top, a[href='#top']").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    });
  });