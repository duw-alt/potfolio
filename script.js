document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons(); // Initialize Lucide icons

  // Close mobile menu when clicking a link
  const mobileMenuLinks = document.querySelectorAll("#mobileMenu .nav-link");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const offcanvas = bootstrap.Offcanvas.getInstance("#mobileMenu");
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });
});
