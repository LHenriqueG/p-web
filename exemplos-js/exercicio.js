/*
1. Criar um array de 12 clientes onde cada um possui
codigo, nome, email, totalCompras e um booleano informando se é PF ou PJ.
- Os clientes que são PF devem receber os atributos CPF e RG
- Os clientes que são PJ devem receber CNPJ e razaoSocial
- Mostrar relatorios de clientes PF e clientes PJ
* Cada relatório deve mostrar:
- Dados de cada cliente
codigo, nome, email, se é PF ou PJ e os dados específicos de PF/PJ
- Mostrar os clientes PF antes dos clientes PJ
- Formatar valores monetários
- Quantidade total de clientes PF, PJ e Geral
- Valor total de compra de todos os clientes PF, PJ e Geral
- Média total de compra de todos os clientes PF, PJ e Geral
- Indicar cliente PF, PJ e Geral com maior valor de compra
- Indicar cliente PF, PJ e Geral com menor valor de compra
*/



//Criando o Array

const clientes = [{
    codigo: "000", nome: "Luis", email: "luis@gmail.com", totalCompras: 1000, pf: true, cpf: "1230", rg: "123"
},

{
    codigo: "111", nome: "Henrique", email: "henrique@gmail.com", totalCompras: 2000, pf: true, cpf: "4560", rg: "456"
},

{
    codigo: "222", nome: "Maria", email: "maria@gmail.com", totalCompras: 3000, pf: true, cpf: "7890", rg: "789"
},

{
    codigo: "333", nome: "Patricia", email: "patricia@gmail.com", totalCompras: 4000, pf: true, cpf: "0102", rg: "0201"
},

{
    codigo: "444", nome: "José", email: "jose@gmail.com", totalCompras: 50000, pf: true, cpf: "1515", rg: "5151"
},

{
    codigo: "555", nome: "Fábio", email: "fabio@gmail.com", totalCompras: 6000, pf: true, cpf: "1212", rg: "1212"
},

{
    codigo: "666", nome: "Ana", email: "ana@gmail.com", totalCompras: 70000, pf: true, cpf: "9925", rg: "2599"
},

{
    codigo: "777", nome: "Josélia", email: "joselia@gmail.com", totalCompras: 8000, pf: false, cnpj: "4141", rg: "4224"
},

{
    codigo: "888", nome: "Sabrina", email: "sabrina@gmail.com", totalCompras: 8500, pf: false, cnpj: "0304", razaoSocial: "3040"
},

{
    codigo: "999", nome: "Karla", email: "karla@gmail.com", totalCompras: 9000, pf: false, cnpj: "2526", razaoSocial: "5262"
},

{
    codigo: "1000", nome: "Matheus", email: "matheus@gmail.com", totalCompras: 100000, pf: false, cnpj: "7894", razaoSocial: "4785"
},

{
    codigo: "1100", nome: "Otávio", email: "otavio@gmail.com", totalCompras: 20000, pf: false, cnpj: "3468", razaoSocial: "7800"
}
]

//Mostrando relatórios dos clientes PF e PJ:

let clientesPF = []
let clientesPJ = []

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].pf == true) {
        clientesPF.push(clientes[i])
    } else {
        clientesPJ.push(clientes[i])
    }
}

console.log('Relatório de clientes PF: ', clientesPF)
console.log()
console.log('Relatório de clientes PJ: ', clientesPJ)

//Quantidade de clientes PF, PJ e Geral:

let qtdClientesPF = 0
let qtdClientesPJ = 0
let qtdGeral = 0

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].pf == true) {
        qtdClientesPF += 1
    } else {
        qtdClientesPJ += 1
    }
    qtdGeral += 1
}
console.log()
console.log('Quantidade de clientes PF: ', qtdClientesPF)
console.log('Quantidade de clientes PJ: ', qtdClientesPJ)
console.log('Quantidade de clientes Geral: ', qtdGeral)

//Valor total de compra de todos os clientes PF, PJ e Geral:

let valorTotalComprasPF = 0
let valorTotalComprasPJ = 0
let valorTotalComprasGeral = 0

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].pf == true) {
        valorTotalComprasPF += clientes[i].totalCompras
    } else {
        valorTotalComprasPJ += clientes[i].totalCompras
    }
    valorTotalComprasGeral += clientes[i].totalCompras
}

console.log('Valor total de compras clientes PF: R$', valorTotalComprasPF)
console.log('Valor total de compras clientes PJ: R$', valorTotalComprasPJ)
console.log('Valor total de compras clientes Geral: R$', valorTotalComprasGeral)

//Média total de compra de todos os clientes PF, PJ e Geral

let mediaPF = valorTotalComprasPF / qtdClientesPF
let mediaPJ = valorTotalComprasPJ / qtdClientesPJ
let mediaGeral = valorTotalComprasGeral / qtdGeral

console.log('Média total de compras clientes PF: R$', mediaPF)
console.log('Média total de compras clientes PJ: R$', mediaPJ)
console.log('Média total de compras clientes Geral: R$', mediaGeral)

//Indicar cliente PF, PJ e Geral com maior valor de compra

let compraClientePF = []
let compraClientePJ = []
let compraGeral = []

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].pf == true) {
        compraClientePF.push(clientes[i].totalCompras)
    } if (clientes[i].pf == false) {
        compraClientePJ.push(clientes[i].totalCompras)
    }
    compraGeral.push(clientes[i].totalCompras)
}

console.log('Lista com os valores de compras dos clientes PF: ', compraClientePF)
console.log('Lista com os valores de compras dos clientes PJ: ', compraClientePJ)
console.log('Lista com os valores de compras Geral:', compraGeral)

//Descobrindo o maior e menor valor de compras de clientePF:

let maiorPF = 0
let menorPF = 0

for (let i = 0; i < compraClientePF.length; i++) {
    if (i == 0) {
        maiorPF = menorPF = compraClientePF[i]
    } else {
        if (compraClientePF[i] > maiorPF) {
            maiorPF = compraClientePF[i]
        } if (compraClientePF < menorPF) {
            menorPF = compraClientePF[i]
        }
    }
}
console.log()
console.log('O maior valor de compra dentre os clientes PF é: R$', maiorPF)
console.log('O menor valor de compra dentre os clientes PF é: R$', menorPF)


//Descobrindo o maior e menor valor de compras de clientePJ:

let maiorPJ = 0
let menorPJ = 0

for (let i = 0; i < compraClientePJ.length; i++) {
    if (i == 0) {
        maiorPJ = menorPJ = compraClientePJ[i]
    } else {
        if (compraClientePJ[i] > maiorPJ) {
            maiorPJ = compraClientePJ[i]
        } if (compraClientePJ < menorPJ) {
            menorPJ = compraClientePJ[i]
        }
    }
}

console.log('O maior valor de compra dentre os clientes PJ é: R$', maiorPJ)
console.log('O menor valor de compra dentre os clientes PJ é: R$', menorPJ)


//Descobrindo o maior e menor valor de compras no Geral:

let maiorGeral = 0
let menorGeral = 0

for (let i = 0; i < compraGeral.length; i++) {
    if (i == 0) {
        maiorGeral = menorGeral = compraGeral[i]
    } else {
        if (compraGeral[i] > maiorGeral) {
            maiorGeral = compraGeral[i]
        } if (compraGeral[i] < menorGeral) {
            menorGeral = compraGeral[i]
        }
    }
}

console.log('O maior valor de compra no geral é: R$', maiorGeral)
console.log('O menor valor de compra no geral é: R$', menorGeral)


