export default function initModal() {
  const botaoPergaminho = document.querySelector(".dirigente-descricao .btn");
  const modal = document.querySelector(".modal-container");

  function abrirModal(event) {
    if (event.type === "touchstart") event.preventDefault();
    modal.style.display = "flex";
    modal.addEventListener("click", fecharModal);
    modal.addEventListener("touchstart", fecharModal);
  }

  function fecharModal(event) {
    const classeElementoClicado = event.srcElement.classList.value;
    if (
      classeElementoClicado === "modal-container" ||
      classeElementoClicado === "btn-modal-fechar"
    ) {
      modal.style.display = "none";
    }
  }

  botaoPergaminho.addEventListener("click", abrirModal);
  botaoPergaminho.addEventListener("touchstart", abrirModal);
}
