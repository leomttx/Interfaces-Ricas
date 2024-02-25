const vetor = [];
var soma = 0;
var multplicacao = 1;
for(let i = 1; i<=5; i++){
    vetor.push(parseInt(prompt(`Digite o valor ${i}:`)))
    soma = soma + vetor[i - 1];
    multplicacao = multplicacao * vetor[i - 1];
}

console.log("Vetor: ", vetor);
console.log("Soma: ", soma);
console.log("Multiplicação: ", multplicacao);
