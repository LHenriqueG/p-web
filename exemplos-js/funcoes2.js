//Percorrendo o array usando o método tradicional

const notas = [10.0, 8.0, 6.0, 5.3, 9.0, 8.5]
/*
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].toFixed(2))
}*/

//Percorrendo o array usando programação funcional

//let imprimirElemento = n => console.log(n)

notas.forEach(n => console.log(n))

//Funções MAP

/*
Itera um array/coleção e retorna um novo array/coleção com os elementos transformados
*/

const numeros = [1, 2, 3, 4, 5]

let numerosEmDobro = numeros.map(n => n * 2)
console.log(numerosEmDobro)

numerosEmDobro.forEach(n => console.log(n))

//Funções Reduce

//Filter

/*
Itera um array/coleção e retorna um novo array/coleção com um subconjunto do array original
*/

console.log(numeros.filter(n => n % 2 == 0))
numeros.filter(n => n % 2 == 0).forEach(n => console.log(n))
