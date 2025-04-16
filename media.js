function calcularMedia(listaNumeros) {
    if (!Array.isArray(listaNumeros)) {
        throw new Error("Erro: o parâmetro deve ser uma lista (array).");
    }
    if (listaNumeros.length === 0) {
        throw new Error("Erro: a lista está vazia.");
    }
    if (!listaNumeros.every(item => typeof item === "number")) {
        throw new Error("Erro: todos os elementos da lista devem ser números.");
    }

    const soma = listaNumeros.reduce((acc, val) => acc + val, 0);
    return soma / listaNumeros.length;
}

// Testes
try {
    console.log(calcularMedia([10, 20, 30])); // 20
    console.log(calcularMedia([10, '20', 30])); // Erro
} catch (e) {
    console.error(e.message);
}

try {
    console.log(calcularMedia([])); // Erro
} catch (e) {
    console.error(e.message);
}

try {
    console.log(calcularMedia([-5, 0, 5])); // 0
    console.log(calcularMedia([1.5, 2.5, 3.5])); // 2.5
} catch (e) {
    console.error(e.message);
}