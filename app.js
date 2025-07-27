let listaDeAmigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let addAmigo = document.querySelector('#amigo').value;
    // Validar a entrada
    if (addAmigo !== '') {
        // Atualizar o array de amigos
        listaDeAmigos.push(addAmigo);
    } else {
        // Exibir alerta se estiver vazio
        alert('Por favor, insira um nome.');
    }
    limparCampo();
    exibirAmigos(); // Atualiar a lista exibida
}
// Limpar o campo de entrada
function limparCampo() {
    let campo = document.querySelector('#amigo');
    campo.value = '';
}

// Função para gerar amigo aleatório.
function gerarAmigoAleatorio() {
    if (listaDeAmigos.length === 0) {
        alert('A lista está vazia!');
        return null;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoEscolhido = listaDeAmigos[indiceAleatorio];
    return amigoEscolhido;
}

// Função para exibir os amigos
function exibirAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpa a lista antes de adicionar os novos elementos

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];
        let item = document.createElement('li');
        item.textContent = amigo;
        listaHTML.appendChild(item);
    }
}

// Função para sortear amigo.
function sortearAmigo() {
    // Vallidar que há amigos disponíveis
    if (listaDeAmigos.length === 0) {
        alert('A lista está vazia!');
        return;
    }

// Gerar um índice aleatório com Math.random() e Math..floor()
let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

// Obter o nome sorteado com base no índice
let nomeSorteado = listaDeAmigos[indiceAleatorio];

// Mostrar o resultado na lista de resultados com innerHTML
let resultado = document.getElementById('resultado');
resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}