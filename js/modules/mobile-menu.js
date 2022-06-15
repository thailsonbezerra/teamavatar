export default function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu.addEventListener("click", () => {
    const header = document.querySelector(".header");

    header.classList.toggle("ativo");

    if (header.classList.contains("ativo")) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });
}
