//Array para armazenar os nomes
let amigos = [];

function adicionarAmigo(){
    //Pega o valor do input
    let nome = document.getElementById("nome").value;
    
    //Verifica se o nome não está vazio
    if(nome.trim() === ""){
        alert("Digite um nome válido!");
        return; // Sai da função se o nome for vazio
    }
    
    //Adiciona o nome ao array
    amigos.push(nome);

    //Limpa o input
    document.getElementById("nome").value = "";

    //Atualiza a lista de amigos
    atualizarLista();
}