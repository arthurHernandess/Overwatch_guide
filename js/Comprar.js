var botaoComprar = document.querySelector("#btnComprar");
var telaCurso = document.querySelector("#pnlComprar");
var telaBloqueio = document.querySelector(".bloquear");

botaoComprar.addEventListener('click', exibirTelaComprar)

function exibirTelaComprar(event)
{
    event.preventDefault();

    telaBloqueio.classList.remove("esconder");
    telaCurso.classList.remove("esconder");
    console.log(telaCurso);
}