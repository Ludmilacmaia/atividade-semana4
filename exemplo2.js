//Imprima na tela a partir de 20
//  depois de 10 em 10 até o 100, 
//  mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE"

let i=10
while (i<100){
    i+=10
    console.log(i)
    if(i===50 ||i===80){
        console.log('continue')
        continue
    }

}