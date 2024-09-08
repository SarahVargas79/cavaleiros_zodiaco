function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string vazia 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado. Você precisa digitar o nome do cavaleiro ou elementos específicos do personagem.<p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML correspondente
    /* 
    Para cada dado dentro da lista de dados | for - Para cada
    of - Dentro dessa lista especifica de dados
    += - Soma, agregamento dos dado do HTML 
    */
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        /*
        se 'o que for pes. tiver' include campoPesquisa
        então, faça..., tudo que estiver dentro desse if vai ser executado, bloco de códigos,  
        */
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento de resultado com as informações do dado atual
            resultados += `
            <div class="item-resultado">
            <h2><a href="#">${dado.titulo}</a></h2>
            <p class="habilidade destaque">${dado.habilidade}</p>
            <p class="atributo">Força: ${dado.atributos.forca}</p>
            <p class="atributo">Agilidade: ${dado.atributos.agilidade}</p>
            <p class="atributo">Ataque à distância: ${dado.atributos.ataque_distancia}</p>
            <p class="atributo">Resistência: ${dado.atributos.resistencia}</p>
            <p class="atributo">Inteligência: ${dado.atributos.inteligencia}</p>
            <p class="atributo">Tática: ${dado.atributos.tatica}</p>
            <p class="atributo">Letalidade: ${dado.atributos.letalidade}</p> 
            <p class="atributo">Cosmo: ${dado.atributos.cosmo}</p>
            <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado foi encontrado!<p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
}



