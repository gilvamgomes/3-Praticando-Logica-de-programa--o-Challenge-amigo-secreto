let amigos = [];

function adicionarAmigo(){
    // Captura o valor do campo de entrada
    let nome = document.getElementById("amigo").value;

    // Valida a entrada
    if(nome.trim() === ""){
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualiza o array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos na tela
    atualizarLista();
}

function atualizarLista() {
    // Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array e adicionar cada amigo como <li>
    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}