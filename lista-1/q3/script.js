function lerNumero() {
    let numero = prompt("Adcione um némero:");
    let dobro = numero * 2;
    let metadade = numero / 2;
    document.getElementById("demo").innerHTML = "o dobro de " + numero + " é " + dobro+ " !"
    console.log(metadade);
}   