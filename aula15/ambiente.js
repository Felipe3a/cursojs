// Cria um array chamado 'num' com os valores iniciais
num = [1, 2, 3, 8, 9]

// Altera o valor da posição 0 do array para 300
num[0] = 300

// Adiciona o valor 100 ao final do array
num.push(100)

// Acessa o tamanho atual do array, mas não faz nada com esse valor aqui
num.length

// Laço for tradicional que percorre o array do início até o fim
for (var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
}

// Mostra todo o array no console em formato de string
console.log(`esse e o meu vetor ${num}`)

// Mostra apenas o valor da posição 0 (que foi alterada para 300)
console.log(num[0])

// Título explicativo no console para a próxima forma de laço
console.log('Abaixo veja com for in')

// Laço for-in que percorre os índices do array (forma mais simplificada)
for (let pos in num) {
    console.log(`  A posição ${pos}, tem o valor ${num[pos]}`)
}


// Cria um novo array desordenado
let numeros = [5, 3, 8, 1,10, 9, 2]

// Ordena o array em ordem crescente
numeros.sort((a, b) => a - b)

// Mostra o array ordenado
console.log("Array ordenado:", numeros)
