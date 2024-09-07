function pesquisar(){
    // Obtém o valor digitado no campo de pesquisa
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";
    let campoPesquisa =document.getElementById("campo-pesquisa").value;

    let title = '';
    let timeline = '';
    let sinopse = '';
    let tags = '';
    campoPesquisa = campoPesquisa.toLowerCase()

    // Itera sobre os dados e verifica se a pesquisa corresponde a algum item
    for (let data of database){
        title = data.title.toLowerCase();
        timeline = data.timeline.toLowerCase();
        sinopse = data.sinopse.toLowerCase();
        tags = data.tags.toLowerCase();
        if (title.includes(campoPesquisa)||timeline.includes(campoPesquisa)||sinopse.includes(campoPesquisa)||tags.includes(campoPesquisa)){
            resultado += `
                <div class="item-resultado">
                    <img class="capa" src="./img/${data.capa}">
                    <div class="texto">
                        <h3>${data.title}</h3>
                        <p>${data.lancamento}</p>
                        <p>${data.cronologia}</p>
                        <p>${data.timeline}</p>
                        <p>${data.sinopse}</p>
                        <a href="${data.link}">Mais</a>
                    </div>
                </div>
                `
        }   
    }

    // Se não encontrar resultados, exibe uma mensagem
    if (!resultado){
        resultado = `<div class="item-resultado">
                        <h2>Ooops... Não foi encontrado um resultado para "${document.getElementById("campo-pesquisa").value}"!!</h2>
                    </div>`
                        
    }
    
    // Atualiza a seção de resultados com os elementos HTML gerados
    section.innerHTML = resultado
}

