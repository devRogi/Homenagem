// Controle de mídias
let midiasCarregadas = 0;
const maxMidiasPorLote = 500; // Número de mídias carregadas por vez
const maxMidias = 100; // Total de mídias disponíveis
const extensoes = [".jpg", ".jpeg", ".png", ".mp4"];

// Troca de galeria (limpa e carrega)
function trocarGaleria(gato) {
    const galeria = document.getElementById("galeria");
    const loader = document.getElementById("loader");
    if (!galeria || !loader) return;

    // Mostra loader e limpa galeria
    loader.style.display = "block";
    galeria.innerHTML = '';
    midiasCarregadas = 0;

    setTimeout(() => {
        mostrarGaleria(gato);
        loader.style.display = "none"; // Oculta loader após carregamento
    }, 500); // Simula tempo de carregamento
}

// Carrega mídias na galeria
function mostrarGaleria(gato) {
    const galeria = document.getElementById("galeria");
    if (!galeria) return;

    for (let i = midiasCarregadas + 1; i <= midiasCarregadas + maxMidiasPorLote && i <= maxMidias; i++) {
        extensoes.forEach(ext => {
            const caminho = `imagens/gatos/${gato}/${gato}${i}${ext}`;
            const midia = ext === ".mp4" ? document.createElement("video") : document.createElement("img");

            midia.src = caminho;
            midia.alt = `Mídia ${i} do gato ${gato}`;
            midia.classList.add("galeria-midia");

            if (ext === ".mp4") {
                midia.muted = true;
                midia.controls = true;
            }

            midia.onerror = () => midia.remove(); // Remove mídias inválidas
            galeria.appendChild(midia);
        });
    }
    midiasCarregadas += maxMidiasPorLote;
}

// Função para voltar à página anterior
function voltar() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    animarRolagem();
});
