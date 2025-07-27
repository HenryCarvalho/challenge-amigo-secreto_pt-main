let listaDeAmigos = [];
let sortearAmigo = gerarSorteio();

function adicionarAmigo(tag, texto) {
    let campoAmigo = document.querySelector(tag);
    campoAmigo.innerHTML = texto;
}

function verificarAmigo() {
    let addAmigo = document.querySelector('input').value;

    if (addAmigo != '') {
        document.getElementById('button-add').removeAttribute('disabled');
    } else {
        alert('Por favor insira um nome válido!')
        document.removeAttribute('disabled');
    }
    limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}