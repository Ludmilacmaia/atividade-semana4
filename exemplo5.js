//Crie uma função que irá receber um número e retornar o fatorial dele. 

function fatoraçao(){
let fatorial = 5
let resultado = fatorial
for (let i = 1; i < fatorial; i++) {
    resultado =resultado*i
}
console.log(resultado)
}
console.log(fatoraçao())