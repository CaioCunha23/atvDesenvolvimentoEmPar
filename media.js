function calcularMedia(listaNumeros) {
    if (!Array.isArray(listaNumeros) || listaNumeros.length === 0) {
        return "Erro: a lista está vazia.";
    }

    for (let item of listaNumeros) {
        if (typeof item !== "number") {
            return "Erro: todos os elementos da lista devem ser números.";
        }
    }

    const soma = listaNumeros.reduce((acc, val) => acc + val, 0);
    const media = soma / listaNumeros.length;
    return media;
}

// Testes
console.log(calcularMedia([10, 20, 30]));
console.log(calcularMedia([10, '20', 30]));
console.log(calcularMedia([]));
console.log(calcularMedia([-5, 0, 5]));
console.log(calcularMedia([1.5, 2.5, 3.5]));