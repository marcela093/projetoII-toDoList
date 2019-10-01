// FASE 1
// Adicionar itens na lista
// criar uma let para guardar a mensagem digitada pelo usuário
let formulario = document.getElementById("formulario");
let lista = document.getElementById("lista")
// criar evento para capturar tarefa
lista.addEventListener("submit"), function(evento){
    // capturar input
    let inputUsuario = document.querySelector(".input-de-texto");
    let tarefa = inputUsuario.value;
    let li = document.createElement("li");
    lista.appendChild(li);
    li.textContent = tarefa;
    // Limpar campo de texto depois que insere o item na lista
    formulario.reset();
    // criar uma condição se não for digitado nenhuma tarefa
    if (inputUsuario.value.trim() == "") {
        let msgerro = document.createElement("p");
        let erro = document.querySelector("#erro");
            erro.appendChild(msgerro);
            erro.textContent = "Digite a tarefa";
    }
}






