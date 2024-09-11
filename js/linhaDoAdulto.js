function linhaDoAdulto(){
    // Obtém o valor digitado no campo de pesquisa
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let timeline = '';
    campoPesquisa = "adulto";
    campoPesquisa = campoPesquisa.toLowerCase()

    // Itera sobre os dados e verifica se a pesquisa corresponde a algum item
    for (let data of database){
        timeline = data.timeline.toLowerCase();
        if (timeline.includes(campoPesquisa)){
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
    
    // Atualiza a seção de resultados com os elementos HTML gerados
    section.innerHTML = resultado

    campoPesquisa = ""
}