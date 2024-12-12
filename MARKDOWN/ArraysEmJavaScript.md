# Arrays em JavaScript

## O que é um Array?
Um array em JavaScript é uma estrutura de dados que permite armazenar uma coleção de valores, sejam eles números, strings, objetos ou até mesmo outros arrays. Esses valores são ordenados e acessados por meio de um índice numérico que inicia em 0.

## Criando um Array
Existem duas formas principais de criar um array:

**Literais de array:**

>let frutas = ['maçã', 'banana', 'laranja'];

**Construtor de array:**
>let numeros = new Array(5); // Cria um array com 5 elementos indefinidos

---
### Acessando Elementos
Para acessar um elemento específico de um array, utilizamos o índice entre colchetes:
>let primeiraFruta = frutas[0]; // Acessa o primeiro elemento

### Métodos de Alteração de Arrays
JavaScript oferece diversos métodos para modificar os elementos de um array:

**push():** Adiciona um ou mais elementos ao final do array.
>frutas.push('uva', 'pera');

**unshift():** Adiciona um ou mais elementos ao início do array.
>frutas.unshift('abacate');

**pop():** Remove e retorna o último elemento do array.
>let ultimaFruta = frutas.pop();

**shift():** Remove e retorna o primeiro elemento do array.
>let primeiraFruta = frutas.shift();

**splice():** Remove ou substitui elementos em uma posição específica.
>frutas.splice(1, 2, 'melão'); // Remove 2 elementos a partir do índice 1 e insere 'melão'
---
## Arrays Multidimensionais

Um array multidimensional é um array que contém outros arrays. Por exemplo, um array bidimensional (ou matriz) pode ser usado para representar uma tabela:
let matriz = 
[
  [1, 2, 3],
  
  [4, 5, 6],
  
  [7, 8, 9]
  
];



