// Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução

//a)
// function contagem(){
//     for(i=1; i<=50; i++)
//     console.log(i)
// }
// console.log(contagem())

// b)
// function contagem(){
//     for (let i=1 ; i<=50; i++){
//     console.log(`contando ${i}`)
//     if (i===25){
//         break}
        
//     }
// }console.log(contagem())

//c)
function contagem(){
        for (let i=1 ; i<=50; i++){
        console.log(`contando ${i}`)
        if (i===10) {
            console.log('usei o continue')
            continue}
}}console.log(contagem())




