document.querySelectorAll('.btn').forEach(botao => {
    botao.addEventListener('click', () => {
        const conteudo = botao.previousElementSibling; 

        if (conteudo.style.display === "none" || conteudo.style.display === "") {
            conteudo.style.display = "block";
            botao.textContent = "Ver menos";
        } else {
            conteudo.style.display = "none";
            botao.textContent = "Ver mais";
        }
    });
});
