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

     let todosLidos = document.createElement("button");
     todosLidos.addEventListener("click", function(evento){
     lista.appendChild(todosLidos);
     todosLidos.classList.add("todos-lidos");
    })

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
// Fase 3
// Marcar todos os itens como feito
// Limpar lista, excluir todos os itens da lista

// const button = document.createElement("button");
//     meuLivro.appendChild(button);
//     button.textContent = "Marcar como lido";
//     button.classList.add("botao-lido");
    
