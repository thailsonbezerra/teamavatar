export default function initLinkMenu() {
  const linksMenu = document.querySelectorAll(".header-menu li a");

  linksMenu.forEach(
    (link) => link.href === document.URL && link.classList.add("ativo")
  );
}
