// Data inicial do relacionamento
const dataInicio = new Date('2024-06-04');

// Calcula o tempo juntos
function calcularTempoJuntos() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const segundosTotais = Math.floor(diff / 1000);
    const anos = Math.floor(segundosTotais / (60 * 60 * 24 * 365));
    const dias = Math.floor((segundosTotais % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
    const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;

    return `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o contador
function iniciarContador() {
    const elementoTempo = document.getElementById("tempo-juntos");
    if (!elementoTempo) return;

    const atualizarTempo = () => {
        elementoTempo.textContent = calcularTempoJuntos();
    };

    atualizarTempo();
    setInterval(atualizarTempo, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarContador();
});

// Função para voltar à página anterior
function voltar() {
    window.history.back();
}
