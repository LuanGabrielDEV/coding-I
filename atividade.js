var prompt = require ("prompt-sync")(); 

//01 - Nome e Idade
let nome1 = "Luan Gabriel";
let idade = 18;
let nomeIdade = (`Olá, seu nome é ${nome1} e tenho ${idade} anos`);
console.log(nomeIdade)


//02 - Nome e Cidade
let nome = "Luan Gabriel";
let cidade = "Recife";
let cidadeNome = (`Olá ${nome} da cidade de ${cidade}`);
console.log(cidadeNome)


//03 - Operações Aritmétricas
let num1 = 5;
let num2 = 5;

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(div)


//04 - Cálculo de Área do Triângulo
let base = 10;
let altura = 20;
let cal = base * altura /2;

let resultado = (`A área do triângulo é: ${cal}cm`)

console.log(resultado)


//05 - Cálculo de Média
let num1 = 7;
let num2 = 9;
let num3 = 5;

let calmed = (num1 + num2 + num3) /3;

let result = (`A nota final do aluno é: ${calmed}`)

console.log(result)


//06 Desconto
function calcularDesconto(valorOriginal, percentualDesconto) {
  // Calcula o valor do desconto
  const valorDesconto = valorOriginal * (percentualDesconto / 100);

  // Calcula o valor final
  const valorFinal = valorOriginal - valorDesconto;

  return valorFinal;
}

// Exemplo de uso:
const valorProduto = 200;
const desconto = 26; // % de desconto

const valorComDesconto = calcularDesconto(valorProduto, desconto);

console.log(`O produto de valor ${valorProduto} com desconto fica ${valorComDesconto}`);



//07 Imposto de renda

 let salaBruto = prompt("QUal seu salário?")
   
  if ( salaBruto <= 2259) {
    var parcela = 0
    console.log (`Você é isento, não precisa pagar tributos.`)
  }
  else if (salaBruto > 2259 && salaBruto <= 2826) {
    var parcela = 169
    var al = 0.075
    var imp = (salaBruto * al) - parcela 
    console.log (`Seu imposto de renda é: R$${imp}. Seu salário líquido é R$${salaBruto - imp}`)
  }
  else if (salaBruto > 2826 && salaBruto <= 3751) {
    var parcela = 381
    var al = 0.15
    var imp = (salaBruto * al) - parcela 
    console.log (`Seu imposto de renda é: R$${imp}. Seu salário líquido é R$${salaBruto - imp}`)
  }
  else if (salaBruto > 3751 && salaBruto <= 4664) {
    var parcela = 662
    var al = 0.225
    var imp = (salaBruto * al) - parcela 
    console.log (`Seu imposto de renda é: R$${imp}. Seu salário líquido é R$${salaBruto - imp}`)
  }
  else if (salaBruto > 4664) {
    var parcela =  896
    var al = 0.275
    var imp = (salaBruto * al) - parcela 
    console.log (`Seu imposto de renda é: R$${imp}. Seu salário líquido é R$${salaBruto - imp}`)
  }
  


//08 Conversor de moedas de Reais ->
  var moeda1 = 100

  let calDolar = moeda1 / 5.48
  let calEuro = moeda1 / 6
  let calLibra = moeda1 / 6

  //Dolar para Reais0
   let dolarReal = moeda1 * 5.49

   let valorFormatadoD = calDolar.toFixed(2)
   console.log(`O valor de R$${moeda1} irá valer $${valorFormatadoD}.`)
   


   //09 Converter Celcius para Fahrenheit
   var cel = 30

   const Fraction = require('fraction.js');
   let fracao1 = new Fraction(9, 5)
   var converf = (cel * fracao1) + 32
   console.log(`Essa é a temperatura em Fahrenheit é ${converf}`)
   */

   //10 Calculadora de IMC
   var peso = 89
   var a = 1.80

   let calImc= peso / (a * a)
   let valorFormatado = calImc.toFixed(1)
   console.log(`O seu IMC é: ${valorFormatado}`)
  


   //Comandos de GIt para subir codigos
   //ls - mostra toda a area que esta sendo trabalhada e a pasta

   //git status   - status do projeto\

   //git add . - Adiciona toda modificacao que ocorreu em um so arquivo

   //git add ... comentario

   //git restore --stage node_modules - restaurar o processo de ggcoomit

   //git commit -m "Atividades em JavaScript"

   //git push