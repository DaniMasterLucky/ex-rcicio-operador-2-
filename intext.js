/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */ 

/* Esse será o resultado

False
False
True */ 




// Atividade 2  interpretação 


 /*let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!")) 

const soma = primeiroNumero + segundoNumero

console.log(soma) 

O erro foi na parte antes do prompt, pois ele não colocou NUMBER,
para identificar que é um número, e o resultado será a soma dos números que o}
usuário colocar.  */ 


//atividade 1 escrita de código

/*const idade = Number (prompt("Qual sua idade?"))
const idadeMelhorAmigo = Number (prompt("Qual a idade do seu melhor amigo?"))
const resultado = idade > idadeMelhorAmigo
const resultado2 = idade - idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log ("a diferença entre a idade de vocês é de: ", resultado2) */ 

//atividade 2 escrita de código 

/*let numeropar = Number (prompt("Coloque um número par."))
 const resultado = numeropar % 2

console.log("Seu resto é:",resultado)*/

/*Eu notei um padrão, que sempre que um número impar é colocado, aparece 1
e quando coloca um número par, aparece um 0. */ 


/*Atividade 3 prática 

const idade = Number (prompt("Qual sua idade?"))

resultadododias = idade * 365
resultadodosmeses = idade * 12
resultadodehoras = idade * 8760

console.log("Sua idade em dias é:",resultadododias)
console.log("Sua idade em meses é", resultadodosmeses)
console.log("sua idade em horas é", resultadodehoras) */ 

let numeroum = Number (prompt("insira um numero"))
let numerodois = Number (prompt("insira um segundo numero"))

resultadoum = numeroum > numerodois 
resultadodois = numeroum === numerodois
resultadotres = numeroum % numerodois == 0 
resultadoquatro = numerodois % numeroum == 0 

console.log ("O primeiro numero é maior que segundo:", resultadoum)
console.log ("O primeiro numero é igual ao segundo?", resultadodois)
console.log ("O primeiro numero é divisível pelo segundo?", resultadotres)
console.log ("O segundo número é divisível pelo primeiro?", resultadoquatro)




 



