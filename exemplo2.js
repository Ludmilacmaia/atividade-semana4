//Imprima na tela a partir de 20
//  depois de 10 em 10 até o 100, 
//  mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE"

function contagem(i){

while (i<100){
    i+=10
    
    if(i===60 ||i===90){
        console.log('continue')
        continue

    }console.log(i)

}}console.log (contagem(10))