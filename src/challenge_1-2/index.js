function pares(x, y) {
    for (let index = x; index <= y; index++) {
        if (!(index % 2)) {
            console.log(index)
        }
    }
}

pares(32, 321)