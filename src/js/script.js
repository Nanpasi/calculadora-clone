// Pegando o ID da tela da calculadora
const tela = document.getElementById("tela");

function adicionarNaTela(input) {
    tela.value += input;
}

function calcular() {
    try {
        /*"eval() (evaluate) é uma função global que avalia ou executa uma string contendo código JavaScript, retornando o valor da última expressão ou declaração avaliada"*/
        /*Fazendo o conteúdo exibido na tela ser o resultado da expressão digitada pelo usuário, através do método eval()*/
        tela.value = eval(tela.value);
    }
    catch (error) {
        tela.value = "ERRO";
    }
}

function limparTela() {
    tela.value = "";
}