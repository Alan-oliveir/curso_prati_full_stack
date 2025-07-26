// Menu Hamburger JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarNav = document.getElementById("navbar-nav");

  // Função para toggle do menu
  function toggleMenu() {
    hamburger.classList.toggle("active");
    navbarNav.classList.toggle("active");

    // Atualizar aria-expanded para acessibilidade
    const isExpanded = navbarNav.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
  }

  // Event listener para o botão hamburger
  hamburger.addEventListener("click", toggleMenu);

  // Fechar menu ao clicar em um link (UX melhorada)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navbarNav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navbarNav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnHamburger &&
      navbarNav.classList.contains("active")
    ) {
      hamburger.classList.remove("active");
      navbarNav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Fechar menu com tecla ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navbarNav.classList.contains("active")) {
      hamburger.classList.remove("active");
      navbarNav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Redimensionamento da janela - esconder menu se voltar para desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      hamburger.classList.remove("active");
      navbarNav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Inicializar aria-expanded
  hamburger.setAttribute("aria-expanded", "false");
});
