// Seleciona os elementos
const modal = document.getElementById("modal");
const modalImagem = document.getElementById("modal-imagem");
const modalVideo = document.getElementById("modal-video");
const fecharModal = document.querySelector(".fechar");
const setaEsquerda = document.querySelector(".seta.esquerda");
const setaDireita = document.querySelector(".seta.direita");
const midias = document.querySelectorAll(".midia");

let midiaAtualIndex = 0;

// Abre o modal e exibe a mídia clicada
midias.forEach((midia, index) => {
    midia.addEventListener("click", () => {
        midiaAtualIndex = index;
        abrirModal(midia);
    });
});

// Fecha o modal
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.src = ""; // Pausa o vídeo ao fechar
});

// Navega para a mídia anterior
setaEsquerda.addEventListener("click", () => {
    midiaAtualIndex = (midiaAtualIndex - 1 + midias.length) % midias.length;
    abrirModal(midias[midiaAtualIndex]);
});

// Navega para a próxima mídia
setaDireita.addEventListener("click", () => {
    midiaAtualIndex = (midiaAtualIndex + 1) % midias.length;
    abrirModal(midias[midiaAtualIndex]);
});

// Função para abrir o modal com a mídia selecionada
function abrirModal(midia) {
    const tipo = midia.getAttribute("data-type");
    const src = midia.getAttribute("data-src");

    if (tipo === "image") {
        modalImagem.src = src;
        modalImagem.style.display = "block";
        modalVideo.style.display = "none";
    } else if (tipo === "video") {
        modalVideo.src = src;
        modalVideo.style.display = "block";
        modalImagem.style.display = "none";
    }

    modal.style.display = "flex";
}