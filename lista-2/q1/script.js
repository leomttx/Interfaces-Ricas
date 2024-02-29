var vet=[3,5,7,3,8,9,1];

var dobro = n => console.log(n*n);

console.log("Usando forEach:")
vet.forEach((s) => dobro(s));

console.log("Usando o for:")
for (var i = 0; i < vet.length; i++) {
    dobro(vet[i]);
}

console.log("Usando map:")
vet.map((e) => dobro(e));
console.log(vet);