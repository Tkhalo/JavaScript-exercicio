const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças.")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 100;

if (peso >= 100) {
    console.log("O peso da peça é adequado.")
} else {
    console.log("O peso da peça é insuficiente.")
}

let nomePeca = "Disco de freio"; 

if (nomePeca.length > 3) {
    console.log("Nome adequado!")
} else if(nomePeca.length == 0) {
    console.log("O nome não pode ser vazio.")
} else {
    console.log("O nome deve possuir mais de 3 caracteres.")
}

switch (nomePeca.length) { //variável que eu quero monitorar
    case 0:    //caso o valor da peça seja igual a ...
        console.log("O nome não pode ser vazio.")
        break;a

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres")
        break;

    default:
        console.log("Nome adequado!")
        break;
}
// = -> Atribuição de valor, recebe
// == -> Sinal de igual em uma equação, verifica a igualdade, comparação, operador relacional
// === -> Verifica se o valor é igual, porém verifica o TIPO de dado também. Se tipo e valor são iguais.

