const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
// let caixaTexto = document.querySelector("#campo");
const contentTarefa = document.getElementById("content__tarefas");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const inputUsuario = document.querySelector(".input-de-texto");
    const tarefa = inputUsuario.value;

    const erro = document.querySelector("#erro");
    if (inputUsuario.value.trim() == "") {
        let msgerro = document.createElement("p");
            erro.appendChild(msgerro);
            erro.textContent = "Digite a tarefa";
            erro.classList.add("erro");

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

        formulario.reset();  

        lista.setAttribute("draggable", true);
        listaTarefa.setAttribute("draggable", true);
        contentTarefa.setAttribute("draggable", true);

        lista.addEventListener("dragstart", function(ev) {
            console.log("dragstart");
            dragging = ev.target.closest(".linha");
        })

        lista.addEventListener("dragover", function(ev) {
            console.log("dragover");
            ev.preventDefault();
            const node = ev.target.closest(".linha");
            this.insertBefore(dragging, node);
        })

        lista.addEventListener("dragend", function(ev) {
            dragging = null;
        })    
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





    // definir o elemento que eu quero que seja arrastado
    // os elementos têm que estar em uma div para quer eu possa selecioná-los
    // dar uma classe para a div