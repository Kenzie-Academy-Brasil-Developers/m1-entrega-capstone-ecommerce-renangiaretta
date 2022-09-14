let arrCarrinho = [];
let produtosVitrine = document.querySelector('.ul_produto')
let produtosCarrinho = document.querySelector('.ul_carrinho')

function createCard(objeto){
    let id = objeto.id
    let name = document.createElement('h2'); 
    let price = document.createElement('strong');
    let img = document.createElement('img');
    let description = document.createElement('p');
    let tag = document.createElement('span');
    let mainInfo = document.createElement('main');
    let li = document.createElement('li');
    let button = document.createElement('div')
    let addCart = document.createElement('button');

    name.classList = 'nome'
    price.textContent = `R$ ${objeto.value}`
    img.src = objeto.img
    description.textContent = objeto.description
    description.className = 'descricao'
    tag.textContent = objeto.tag
    mainInfo.className = 'info'
    li.className = 'card'
    button.className = 'button'
    name.textContent = objeto.nameItem
    addCart.className = 'adcionar_carrinho'
    addCart.id = id
    addCart.textContent = objeto.addCart
    mainInfo.appendChild(tag)
    mainInfo.appendChild(name);
    mainInfo.appendChild(description);
    mainInfo.appendChild(price);
    li.appendChild(img)
    li.appendChild(mainInfo)
    button.appendChild(addCart)
    li.appendChild(button)
    return li
}   

function insertProducts(objeto,ul){
    for(let i = 0; i < objeto.length; i++){
        let produto = objeto[i]
        let card = createCard(produto)
        ul.appendChild(card)
    }
}
insertProducts(data,produtosVitrine)

produtosVitrine.addEventListener('click',adiciona)
function adiciona(event){
    let comprar = event.target
    if(comprar.tagName == 'BUTTON'){
        let id = comprar.id
        let verificaProd = data.find(function(produto){
            if(produto.id == id){
                produtosCarrinho.innerHTML = ''
                arrCarrinho.push(produto)
                console.log(arrCarrinho)
                addCarrinho(arrCarrinho)
            }
        }) 
    }
}
function addCarrinho(produto){
    insertProductsCarrinho(produto,produtosCarrinho)
}

function insertProductsCarrinho(arrCarrinho,ul){
    ul.innerHTML = ''
    let carrinhoVazio = document.querySelector('.carrinho_vazio')
    carrinhoVazio.innerHTML = ''
    for(let i = 0; i < arrCarrinho.length; i++){
        let produto = arrCarrinho[i]
        let card = createCardCarrinho(produto)
        ul.appendChild(card)
    }
}

function createCardCarrinho(objeto){
    let id = objeto.id
    let liCarrinho = document.createElement('li')
    let divCarrinho = document.createElement('div')
    let imgCarrinho = document.createElement('img')
    let nomeCarrinho = document.createElement('h2')
    let precoCarrinho = document.createElement('span')
    let remove = document.createElement('button')
    liCarrinho.className= 'li_Carrinho'
    nomeCarrinho.textContent= objeto.nameItem
    precoCarrinho.textContent = `R$ ${objeto.value}`
    imgCarrinho.src = objeto.img
    remove.textContent = 'Remover do Carrinho'
    remove.className = 'removeCart'
    remove.id = id
    remove.addEventListener('click', function(event){
        let novoCarrinho = []
        for(i=0; i<arrCarrinho.length; i++){
            if(+arrCarrinho[i].id !== +event.target.id){
                novoCarrinho.push(arrCarrinho[i]) 
            }
        }
        arrCarrinho = [...novoCarrinho]
        insertProductsCarrinho(arrCarrinho, produtosCarrinho)
    })
    divCarrinho.appendChild(nomeCarrinho)
    divCarrinho.appendChild(precoCarrinho)
    divCarrinho.appendChild(remove)
    liCarrinho.appendChild(imgCarrinho)
    liCarrinho.appendChild(divCarrinho)
    return liCarrinho
}
