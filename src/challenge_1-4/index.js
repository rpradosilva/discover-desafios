var anosEstudo = 4

function experiencia(anos) {
    if (anos <= 1) {
        console.log("Iniciante")
    } else if (anos > 1 && anos <= 3) {
        console.log("Intermediário")
    } else if (anos > 3 && anos <= 6) {
        console.log("Avançado")
    } else {
        console.log("Jedi Master")
    }
}

experiencia(anosEstudo)