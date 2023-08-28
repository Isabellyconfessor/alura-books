const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro' : 'livro indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="${disponibilidade}">
            <img class="livro__img" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__autor">${livro.autor}</p>
            <p class="livro__preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div> `
    })
}
