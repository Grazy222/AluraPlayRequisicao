import { conectaApi } from "./conectaApi";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento) {
    evento.precentDeFault();
    const dadosDePesquisa = doscument.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideos(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao,elemento.url,elemento.imagem)));
    if (busca.length == 0) {
      lista.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com esse termo</h2>`  
    }

}
 const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
 botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento))