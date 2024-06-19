import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector(" [data-formulario]");

 async function criarVideo(evento) {   // aqui, estamos selecionando o elemento inteiro, e como ele é um campo de digitação, o que queremos é o que o usuário vai digitar, queremos o valor daquele campo.
    evento.preventDeFault();
    
    const imagem = document.querySelector("[data-imagem]").value; // como ele é um campo de digitação, o que queremos é o que o usuário vai digitar, queremos o valor daquele campo
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // e como não temos um contador a gente precisava definir um número.
    try {
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
    alert(e);
    }
}
    await conectaApi.criaVideo(titulo, descricao, url, imagem)
    
    
}

formulario.addEventListener("submit", evento => criarVideo(evento)); // addEventListener, um ouvinte de ouvinte, é um fofoqueiro. Ele vê quando enviamos o formulário, que é quando enviamos o submit daquele formulário e quando isso acontece ele conta a fofoca, ele manda ali o evento, o que aconteceu para a função criarVideo.