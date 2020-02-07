let btnCarregarNoticia = document.querySelector('#carregarNoticia')
let noticias = document.querySelector('#noticias')


const API_KEY = "e9f61c9c802b454bbeb0d5df43647a1a";

let config = {
    method: "GET"
}

function mostrarNoticia(listaNoticias) {
    listaNoticias.forEach((noticia) => {
        let noticiaNova = `<div class="col-md-4 mt-3 ">
        <div class="card" style="width: 18rem;">
            <div class="card-body text-justify">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="Imagem da Noticia">
              <h3 class="card-title text-center">${noticia.title}</h3>
              <p class="card-text">${noticia.description}</p>
              <a href="${noticia.url}" class="btn btn-primary">Ver Noticia</a>
            </div>
          </div>
    </div>`

        noticias.insertAdjacentHTML("beforeend", noticiaNova)
    })
}

btnCarregarNoticia.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {

            mostrarNoticia(json.articles)
        })
}