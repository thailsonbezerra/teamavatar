const botaoPergaminho = document.querySelector(".dirigente-descricao .btn");
const modal = document.querySelector(".modal-container");
const botaoFecharModal = document.querySelector(".btn-fechar");

function abrirModal() {
  modal.style.display = "flex";
  modal.addEventListener("click", fecharModal);
}

function fecharModal(event) {
  const classeElementoClicado = event.path[0].classList.value;
  if (
    classeElementoClicado === "modal-container" ||
    classeElementoClicado === "btn-fechar"
  ) {
    modal.style.display = "none";
  }
}

botaoPergaminho.addEventListener("click", abrirModal);
