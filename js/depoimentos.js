// Carrega depoimentos do localStorage
function carregarDepoimentos() {
    const depoimentos = JSON.parse(localStorage.getItem("depoimentos")) || [];
    const lista = document.getElementById("lista-depoimentos");
    lista.innerHTML = "";

    depoimentos.forEach(depoimento => {
        const li = document.createElement("li");
        li.textContent = depoimento;
        lista.appendChild(li);
    });
}

// Adiciona um novo depoimento
function adicionarDepoimento(event) {
    event.preventDefault();
    const texto = document.getElementById("texto-depoimento").value.trim();
    const limiteCaracteres = 200;

    if (!texto) {
        alert("O depoimento não pode estar vazio!");
        return;
    }

    if (texto.length > limiteCaracteres) {
        alert(`O depoimento não pode exceder ${limiteCaracteres} caracteres.`);
        return;
    }

    const depoimentos = JSON.parse(localStorage.getItem("depoimentos")) || [];
    depoimentos.push(texto);
    localStorage.setItem("depoimentos", JSON.stringify(depoimentos));

    document.getElementById("texto-depoimento").value = "";
    carregarDepoimentos();
}

document.addEventListener("DOMContentLoaded", () => {
    carregarDepoimentos();
    const form = document.getElementById("form-depoimento");
    form.addEventListener("submit", adicionarDepoimento);
});

// Função para voltar à página anterior
function voltar() {
    window.history.back();
}