// Bloqueia botão direito do mouse e atalhos de download
document.addEventListener("contextmenu", event => {
    const target = event.target;

    // Bloqueia salvar imagens e frames de vídeos
    if (target.tagName === "IMG" || target.tagName === "VIDEO") {
        event.preventDefault();
        alert("Salvar esta mídia foi desativado.");
    }
});

document.addEventListener("keydown", event => {
    // Atalhos bloqueados
    if (
        (event.ctrlKey && event.key === "s") || // Ctrl + S
        (event.ctrlKey && event.key === "p") || // Ctrl + P
        (event.ctrlKey && event.shiftKey && event.key === "S") || // Ctrl + Shift + S
        (event.metaKey && event.key === "s") || // Cmd + S (Mac)
        (event.metaKey && event.key === "p")    // Cmd + P (Mac)
    ) {
        event.preventDefault();
        alert("Print e download desativados nesta página.");
    }
});
