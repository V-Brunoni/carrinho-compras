let valorTotal = 0;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorProduto;

    if (quantidade == 0) {
        alert('A quantidade do produto está zerada. Necessário informar uma quantidade maior que zero!');
        return;
    }

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;    
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = ''; //Iniciando o carrinho de compras vazio
    document.getElementById('valor-total').textContent = 'R$ 0';    //Iniciando o total com valor zerado  
}    