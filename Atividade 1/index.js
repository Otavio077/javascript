"use strict";
/*
Crie um código com Node.js e Typescript que vai solicitar ao usuário um
nome, 4 notas de 0 a 10 e no final vai devolver no console um objeto com o
nome do aluno, suas 4 notas e a média final calculada.

Você deve utilizar uma Interface para definir os detalhes do objeto aluno e
criar uma função calcularMedia() que recebe um array com 4 notas e faz o
cálculo da média. Os valores serão digitados pelo usuário e podem ser
capturados usando a biblioteca prompt-sync
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let nomeAluno = prompt("Nome: ");
let nota = [];
for (let i = 0; i < 4; i++) {
    let x = prompt(`${i + 1} - Digite a nota: `);
    nota.push(Number(x));
}
function calcularMedia(x) {
    let media = (x[0] + x[1] + x[2] + x[3]) / 4;
    return media;
}
const aluno = {
    nome: nomeAluno,
    nota1: nota[0],
    nota2: nota[1],
    nota3: nota[2],
    nota4: nota[3],
    mediaFinal: calcularMedia(nota)
};
console.log(aluno);
