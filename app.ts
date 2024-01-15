//Como declarar variaveis 
var a = "a" // Escopo global, muito dificil de utilização no mercado
let b = "b" // Variavel pode ser alterado em algum momento no codigo
const c = "c" // Abreviação de constante, é imutavel

//Tipos primitivos (string, number, boolean)
//Tipo - Any é qualquer tipo (number, string, etc...)
let d: string = 'd'
let e: number = 2
let f: boolean = true

let g: string | number = 2
g = 'Bruna'

//Objetos e Interfaces
const pessoa = {
    nome: 'Bruna',
    idade: 25
}
//Declarar opcional com o "?"
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa2: Pessoa = {
    nome: "Bruna",
    idade: 25
}

const outraPessoa: Pessoa = {
    nome: "Luis",
    idade: 24,
    profissao: 'Jogador de LOL'
}

const arrayPessoa: Pessoa[] = [
    pessoa2, outraPessoa, pessoa
]
const arrayPessoa2: Array<Pessoa> = [
    pessoa2, outraPessoa, pessoa
]

const arrayNumber: Number[] = [
    1,2,3,4,5
]

const arrayString: Array<string> = [
    'Um', 'Dois', 'Três'
]

//Decisões e repetições 
