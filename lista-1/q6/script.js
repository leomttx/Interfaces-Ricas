function media(vetor) {
    let tamanho = 4; 
    soma = 0;
    for (let i = 0;  i < tamanho ; i++) {
       soma = soma + vetor[i];
    }
    return soma / tamanho;
}

const vetr = [];
for (let i = 0; i < 4; i++) {
    vetr.push(parseInt(prompt("Digite a nota: "+(i + 1))))
}

console.log("A média das 4 notas é "+ media(vetr));

