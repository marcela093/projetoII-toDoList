const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const contentTarefa = document.getElementById("content__tarefas");

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
    });

    }else { 
        let listaTarefa = document.createElement("li");
        lista.appendChild(listaTarefa);
        listaTarefa.textContent = tarefa;
        listaTarefa.setAttribute("class", "linha");
        erro.textContent = ""; 
        let confere = document.createElement("p");
        listaTarefa.appendChild(confere);
        confere.textContent = "x";
        listaTarefa.addEventListener("click", function(evento){
        listaTarefa.classList.add("excluir");
        })    

        confere.addEventListener('click', function(evento){
            if(evento){
                listaTarefa.classList.add('excluir-botao');
            }
        });

        formulario.reset();  

        lista.setAttribute("draggable", true);
        listaTarefa.setAttribute("draggable", true);
        contentTarefa.setAttribute("draggable", true);
        console.log(contentTarefa)
        let dragging;

        lista.addEventListener("dragstart", function(ev) {
            console.log("dragstart");
            dragging = ev.target.closest(".linha");
        });

        listaTarefa.addEventListener("dragover", function(ev) {
            console.log("dragover");
            ev.preventDefault();
            const node = ev.target.closest(".linha");
            this.parentNode.insertBefore(dragging, node);
        });

        listaTarefa.addEventListener("dragend", function(ev) {
            dragging = null;
            console.log("dragging");
        });
       
    } 
});

const divBotao = document.getElementById('botoes');
const botaoExcluirTudo = document.createElement('button');
divBotao.appendChild(botaoExcluirTudo);
botaoExcluirTudo.textContent = 'Excluir Tarefas';
botaoExcluirTudo.classList.add('botao-excluir-tudo', 'botoes');

botaoExcluirTudo.addEventListener('click', function(evento){
    lista.classList.add('tarefas-excluidas');
});


const botaoFeito = document.createElement("button");
divBotao.appendChild(botaoFeito);
botaoFeito.textContent = "Todas feitas";
botaoFeito.classList.add("botao-excluir-tudo");
botaoFeito.addEventListener("click", function(evento){
    lista.classList.add("excluir");
});

