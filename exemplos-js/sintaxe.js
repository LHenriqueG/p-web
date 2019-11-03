//tipo da variavel typeof
//usar let ou const
//toFixed adicionar casas decimais
//replace substituir algo por alguma coisa

//variáveis
/*
var x = 10
console.log(x) // imprimir x
console.log(typeof x) //tipo de x

//var e let-> permite que ela fique restrita dentro do escopo em que ela foi declarada
//var permite redeclaração

{
    let y = 20
    console.log(y)
}

console.log(x)

const universidade = 'UEPB'
console.log(universidade.charAt(2)) //retornar um determinado caractere de uma posição especificada
console.log(universidade.indexOf('P'))
console.log(universidade.substr(1)) //a partir do indice 1
console.log('Universidade'.concat(universidade).concat("!")) //concatenação
console.log('Universidade' + universidade + "!") //
console.log(universidade.replace('P', 'B')) //substitui
console.log("Ana, Maria, Pedro".split(",")) //transforma uma string em um array por um caractere especificado

//templates strings

let nome = 'Luís'
let sobreNome = 'Henrique'
console.log(nome + ' ' + sobreNome)
console.log(typeof nome) // string

let nomeCompleto = `${nome} ${sobreNome}`
console.log(nomeCompleto)

const valor = 1000 //valor de uma constante não pode ser alterado
console.log(valor)

//expressões

console.log(`1 + 1 = ${1 + 1}`)

//string com algum caractere é considerado verdadeiro, caso contrário é falso

let nomeBooleano = ''

if (nomeBooleano) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

{ } //objeto vazio

/*
comentários
de
várias
linhas
*/

// Arrays
/*
let meuArray = []

meuArray.push('Luís')
meuArray.push(20)
meuArray.push(true)

console.log(meuArray)

// Objetos -> um conjunto de chave-valor

let aluno = {
    nome: 'Luís',
    idade: 23
}

console.log(aluno)
console.log(typeof aluno)

//criar objeto vazio

let objetoVazio = {}
console.log(typeof objetoVazio)

//adicionando propriedades em objetos

aluno.matricula = '123'

console.log(aluno)

objetoVazio.nome = 'Nome fulera'

objetoVazio.data = '11/12/1995'

console.log(objetoVazio)

delete objetoVazio.nome
delete objetoVazio.data

console.log(objetoVazio)

let cliente = {
    nome: 'Fulano',
    cpf: 321,
    endereco: {
        logradouro: 'rua x',
        numero: 222,
        bairro: 'centro',
        cidade: {
            nome: 'Pombal',
            estado: 'PB'
        }
    }
}

console.log(cliente)

//Object.freeze(cliente) o objeto é congelado, ou seja, os seus valores não poderão ser modificados



// 1 - Criar array de 10 alunos onde cada aluno possui nome e nota.
// 2 - Percorrer array de alunos e separar os alunos por aprovados, recuperação e reprovados
// 3 - Imprimir de forma agrupada os alunos nas trÊs situações

const alunos = [
    { nome: 'Luís', nota: 10 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Maria', nota: 3 },
    { nome: 'Angélica', nota: 5 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Jorge', nota: 7 },
    { nome: 'Andréia', nota: 4 },
    { nome: 'Enrico', nota: 8 },
    { nome: 'Joana', nota: 7 },
    { nome: 'Marcos', nota: 6 }
]

console.log(alunos)

let reprovados = []
let aprovados = []
let recuperacao = []

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
        aprovados.push(alunos[i])
    } else if (alunos[i].nota >= 5 && alunos[i].nota < 7) {
        recuperacao.push(alunos[i])
    } else {
        reprovados.push(alunos[i])
    }
}

console.log('Aprovados ', aprovados)
console.log('Recuperação ', recuperacao)
console.log('Reprovados ', reprovados)

*/

console.log(Math.max(10, 20))   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20

// Funções

// Literal

function func1() {
    console.log('Olá!')
}


//func1()

// Função Anônima (Atribuir função a uma variável)

let minhaFuncao = function () {
    console.log('Função Anônima!')
}

let outraFuncao = function () {
    return 'Outra função!'
}
//console.log(minhaFuncao)

//console.log(minhaFuncao())
console.log(minhaFuncao())

// Função como parametros

function soma(x, y, func) {
    let total = x + y
    func()
    return total
}

let funcaoP = function () { console.log('Função Parametro!') };

console.log(soma(10, 10, funcaoP))

function realizarCalculo(x, y, callback) {
    console.log("Resultado: " + (x + y))
    callback();
}

realizarCalculo(100, 200, function () { console.log('Processo realizado!') })

const funcoes = [
    function somar(x, y) { return x + y },
    function substrair(x, y) { return x - y },
    function multiplicar(x, y) { return x * y },
    function dividir(x, y) { return x / y }
]

for (let i = 0; i < funcoes.length; i++) {
    console.log(funcoes[i](10, 10))
}

// Função dentro de objetos

const animal = {
    nome: 'Cachorro',
    idade: 3,
    falar: function () {
        console.log('Au! au!')
    }
}

animal.falar()

animal.dormir = function () {
    console.log('Zzzzzzz....')
}

animal.dormir()