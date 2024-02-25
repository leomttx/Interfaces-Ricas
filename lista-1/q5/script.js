function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let resultado = 1;
    while(num>0){
        resultado = resultado*num;
        console.log(num);
        num--;
    }
    return resultado;
}

const lerNum = prompt("Digite um número:");

console.log(`O fatórial de ${lerNum} é igual a: `, fatorial(lerNum));

