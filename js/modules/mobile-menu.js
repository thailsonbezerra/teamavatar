export default function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu.addEventListener("click", () => {
    const header = document.querySelector(".header");

    header.classList.toggle("ativo");

    if (header.classList.contains("ativo")) {
      // document.body.style.overflow = "hidden";
      document.body.classList.add("esconder");
    } else {
      //document.body.style.overflow = "auto";
      //console.log(document.body.style);
      document.body.classList.remove("esconder");
    }
  });
}
