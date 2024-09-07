function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";
    let campoPesquisa =document.getElementById("campo-pesquisa").value;

    let title = '';
    let timeline = '';
    let sinopse = '';
    let tags = '';
    campoPesquisa = campoPesquisa.toLowerCase()
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

    if (!resultado){
        resultado = `<div class="item-resultado">
                        <h2>Ooops... Não foi encontrado um resultado para "${document.getElementById("campo-pesquisa").value}"!!</h2>
                    </div>`
                        
    }
    
    section.innerHTML = resultado
}

