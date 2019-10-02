

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    let inputUsuario = document.querySelector(".input-de-texto");
    let tarefa = inputUsuario.value;

    let erro = document.querySelector("#erro");
    if (inputUsuario.value.trim() == "") {
        let msgerro = document.createElement("p");
            erro.appendChild(msgerro);
            erro.textContent = "Digite a tarefa";
            erro.classList.add("erro");

    }else { 
        let listaTarefa = document.createElement("li");
        lista.appendChild(listaTarefa);
        listaTarefa.textContent = tarefa;
        erro.textContent = ""; 
        let confere = document.createElement("p");
        listaTarefa.appendChild(confere);
        confere.textContent = "x";
        listaTarefa.addEventListener("click", function(evento){
        listaTarefa.classList.add("excluir");
        })    
        formulario.reset();  
    }
})

const maeDosBotoes = document.getElementById("botoes");
const botaoFeito = document.createElement("button");
maeDosBotoes.appendChild(botaoFeito);
botaoFeito.textContent = "Todas feitas";
botaoFeito.classList.add("tarefa_feita");
botaoFeito.addEventListener("click", function(evento){
lista.classList.add("excluir");
})


    
