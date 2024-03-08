const objetos = {
    nome: 'Luan',
    idade: 23,
    esta_trabalhando: false,
    personalidade: {
        primeira:'Passivo',
        segunda:'agressivo'
    },
    hobbies: ['criticar o capitalismo', 'comer', 'lacrar']
}

console.log(objetos)    


// CONVERSÃO DE JS PARA JSON

const dadosJson = JSON.stringify(objetos); // Formato de envio para uma API

console.log(dadosJson) // É um texto com o padrão JSON

// CONVERTER O JSON PARA OBJETO(JS)

const objetosJson = JSON.parse(dadosJson);
console.log(objetosJson);