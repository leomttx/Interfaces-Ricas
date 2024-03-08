// SINTAXE  

// function primeiraFuncao() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Esperou isso aqui!");
//             resolve();
//         }, 1000);
//     })
// }

// async function segundaFuncao() {
//     console.log("Iniciou");

//     await primeiraFuncao();

//     console.log("Terminou");
// }

// segundaFuncao();


// EXEMPLO PRÁTICO 

function getUser(id) {

    // - Fetch é um recurso do js para fazer requisições assícronas.
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(dados => dados.json())
    .catch((err) => console.log(err))
}

async function mostrarNome(id) {
    try{
        const usuario = await getUser(id)

        console.log(`O nome do usuário é: ${usuario.data.first_name}`)
    } catch (err) {
        console.log(`Erro: ${erros}`)
    }
}
    
mostrarNome(3)