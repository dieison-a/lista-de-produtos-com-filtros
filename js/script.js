function criarCard(produto) {
    const listaProduto = document.querySelector(".listaProdutos")

    const itemLista = document.createElement("li")

    const nomeProduto = nomearProduto(produto)
    const secaoProduto = setorizarProduto(produto)
    const precoProduto = precificarProduto(produto)

    itemLista.append(nomeProduto, secaoProduto, precoProduto)
    listaProduto.append(itemLista)
}

function nomearProduto(produto) {
    const nomeProduto = document.createElement("h3")
    nomeProduto.innerText = produto.nome

    return nomeProduto
}

function setorizarProduto(produto) {
    const secaoProduto = document.createElement("span")
    secaoProduto.innerText = produto.secao

    return secaoProduto
}

function precificarProduto(produto) {
    const precoProduto = document.createElement("p")
    precoProduto.innerText = produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    return precoProduto
}

function montarItem(array) {
    const listaProdutos = document.querySelector(".listaProdutos")
    listaProdutos.innerHTML = ""

    let valorTotal = document.querySelector(".valorTotal")
    let soma = 0

    for (let i = 0; i < array.length; i++) {
        soma += array[i].preco
        criarCard(array[i]);
    }
    return valorTotal.innerText = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
montarItem(produtos);

function pesquisaProdutos() {
    const campoPesquisa = document.querySelector(".campoPesquisa")

    let pesquisa = campoPesquisa.value.trim().toLowerCase()

    let filtroPesquisa = produtos.filter((produto) => produto.secao.toLowerCase().includes(pesquisa) || produto.nome.toLowerCase().includes(pesquisa))
    return filtroPesquisa
}

function pesquisar() {
    const formularioPesquisa = document.querySelector(".pesquisaProdutos")

    formularioPesquisa.addEventListener("submit", (event) => {
        event.preventDefault()
        let filtrando = pesquisaProdutos()
        montarItem(filtrando)
    })
}
pesquisar()

function filtrarPeloMenu(filtro) {
    let filtroMenu = produtos.filter(produto => produto.secao.toLowerCase() === filtro)
    return filtroMenu
}

function selecaoMenu(arrayProdutos) {
    const itemTodos = document.querySelector("#todos")
    const itemHortifruti = document.querySelector("#hortifruti")
    const itemPadaria = document.querySelector("#padaria")
    const itemLaticinios = document.querySelector("#laticinios")

    itemTodos.addEventListener("click", () => {
        montarItem(arrayProdutos)
    })
    itemHortifruti.addEventListener("click", () => {
        let selecao = filtrarPeloMenu("hortifruti")
        montarItem(selecao)
    })
    itemPadaria.addEventListener("click", () => {
        let selecao = filtrarPeloMenu("padaria")
        montarItem(selecao)
    })
    itemLaticinios.addEventListener("click", () => {
        let selecao = filtrarPeloMenu("laticínios")
        montarItem(selecao)
    })
}
selecaoMenu(produtos)