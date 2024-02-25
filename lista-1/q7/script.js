const vetor = []
const vetorPar = []
const vetorInpar = []
for (let i = 1; i<=5; i++){
    vetor.push(parseInt(prompt("Digite 5 números:")))
    if (i % 2 == 0){
        vetorPar.push(i);
    } else{
        vetorInpar.push(i);
    }
}

console.log(vetor);
console.log("Vetor impar", vetorInpar);
console.log("Vetor par", vetorPar);