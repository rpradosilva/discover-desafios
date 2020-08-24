var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

function printData(userData) {
    console.log(`O usuário mora em ${userData.cidade} / ${userData.uf}, no bairro ${userData.bairro}, na rua ${userData.rua} com nº ${userData.numero}.`)
}

printData(endereco)