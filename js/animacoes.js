// Cria um coração animado
function criarCorao() {
    const corao = document.createElement("span");
    corao.classList.add("corao");
    corao.textContent = "🩵";

    const tamanho = Math.random() * 30 + 10;
    corao.style.left = Math.random() * window.innerWidth + "px";
    corao.style.fontSize = tamanho + "px";

    document.body.appendChild(corao);

    setTimeout(() => corao.remove(), 5000);
}

// Adiciona corações periodicamente
const intervaloCoracao = setInterval(criarCorao, 300);

// Para animações se a aba for alterada
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        clearInterval(intervaloCoracao);
    } else {
        setInterval(criarCorao, 300);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    animarRolagem();
});
