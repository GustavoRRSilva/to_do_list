var botaoEnviar = document.querySelector(".principal__enviar");
var form = document.querySelector(".principal__form")
var lista = document.querySelector(".principal__lista")
botaoEnviar.addEventListener("click",(event)=>{
        event.preventDefault();
        CriaObjetosLista(form);
        botaoDeletar(lista)
        botaoFeito(lista)
        form.reset();
})

function CriaObjetosLista (form){
    var valor = form.querySelector(".principal__tarefa").value
    var lista = document.querySelector(".principal__lista")
    var li = document.createElement("li")
    li.classList.add("principal__tarefas")
    lista.appendChild(li)
    criarElementosLi("textoLista","p","principal__texto",valor,li)
    criarElementosLi("botaoexcluir","button","principal__excluir","Excluir",li)
    criarElementosLi("botaofeito","button","principal__feito","Feito",li)
}
function botaoDeletar(lista){
    var botoesexcluir = lista.querySelectorAll(".principal__excluir");
    botoesexcluir.forEach(element => {
        element.addEventListener("click",()=>{
            var parenteexcluir = element.parentNode;
            parenteexcluir.remove();
        })
    });
}
function botaoFeito(lista){
    var botoesfeito = lista.querySelectorAll(".principal__feito");
    botoesfeito.forEach(element => {
        element.addEventListener("click",()=>{
            var parentefeito = element.parentNode;
            var nome = parentefeito.querySelector(".principal__texto")
            nome.classList.add("nome__riscado")
        })
    });
}

function criarElementosLi(nomeVar,tagVar,classe,texto,pai){
var nomeVar = document.createElement(tagVar)
nomeVar.classList.add(classe)
nomeVar.textContent = texto;
pai.appendChild(nomeVar);
}

