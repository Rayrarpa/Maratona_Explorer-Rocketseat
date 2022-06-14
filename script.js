const elementoResposta = document.querySelector("#resposta");
const pergunta = document.querySelector("#perguntaInput");
const btnPerguntar = document.querySelector("#btnPerguntar");
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
];


function perguntar() {
    if (pergunta.value == "") {
        alert("Digite algo antes de prosseguir");
        return
    }

    btnPerguntar.setAttribute("disabled", true);

    const divPer = "<div>" + pergunta.value + "</div>";

    const totalRepostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRepostas);

    elementoResposta.innerHTML = divPer + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;
    //
    setTimeout(() => {
        elementoResposta.style.opacity = 0;
        btnPerguntar.removeAttribute("disabled")
    }, 3000);
}