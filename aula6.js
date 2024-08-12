// Aula 06 - Estrutura de repetição "while"

// for:

// Usado quando se sabe de antemão quantas vezes o loop deve ser executado ou para iterar sobre arrays e objetos.
// Exemplo: Iterar sobre um array para aplicar uma operação a cada elemento.

// while:

// Usado quando a condição de término depende de eventos ou condições que não são previsíveis de antemão.
// Exemplo: Ler entradas do usuário até que uma condição específica seja satisfeita.
// // ex

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// 2. Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.

// for

// Quando você sabe antecipadamente quantas vezes precisa iterar. Por exemplo, você quer executar um bloco de código um número fixo de vezes ou iterar sobre uma sequência com um intervalo definido.

// while

// Quando o número de iterações não é conhecido de antemão e depende de uma condição que pode mudar dinamicamente.

// 3. Implemente o código do slide de número 9.

// let i = 0;
// while (i < 10) {
//   console.log("Testando uma frase");
//   i++;
// }

// 4. Implemente o código do slide de número 16.

// let i = 465484133;
// while (i > 10) {
//   console.log(i);
//   i /= 35;
// }

// 5. Implemente o código do slide de número 26.

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// 6. Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// 7. Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// 8. Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.

// let i = 1;
// let soma = 0;
// while (i <= 100) {
//   soma += i;
//   i++;
// }
// console.log("A soma dos números de 1 a 100 é:", soma);

// 9. Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.

// let i = 1;
// let produto = 1;
// while (i <= 5) {
//   produto *= i;
//   i++;
// }
// console.log("Oproduto dos numero de 1 a 5 e:", produto);

// 10. Crie um programa que exiba a tabuada do 9 utilizando o while.

// let i = 1;
// const numero = 9;

// while (i <= 10) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
//   i++;
// }

// 11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
// menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.

// let maior = null;
// let menor = null;

// while (true) {
//     let input = prompt("Digite um numero (0 parar sair)");
//     let numero = parseInt(input);

//     if (numero === 0) {
//         break;
//     }

//     if (maior === null || numero > maior) {
//         maior = numero;
//     }
//     if (menor == null || numero < menor) {
//         menor = numero;
//     }
// }

// if (maior !== null && menor !== null) {
//     console.log(`Maior numero digitado ${maior}`);
//     console.log(`Menor numero digitado ${menor}`);
// } else {
//     console.log("Nenhum numero valido foi digitado.");
// }

// 12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
// números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
// o while.

// let sum = 0;
// let count = 0;
// let number;

// while (true) {
//     number = parseInt(prompt("Digite um número inteiro (-1 para sair):"), 10);

//     if (number === -1) {
//         break;
//     }

//     sum += number;
//     count++;
// }

// if (count > 0) {
//     let average = sum / count;
//     console.log("A média dos números digitados é: " + average);
// } else {
//     console.log("Nenhum número foi digitado.");
// }


// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
// utilizando o while.
// 14. Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.
// 15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o
// while.
// 16. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
// ou igual a 7) utilizando o while.

// 17. Elabore um programa que leia uma sequência de números inteiros do usuário e determine quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

// function contarParesAntesDoPrimeiroImpar() {
//     let contPares = 0;
//     let numero;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro:"), 10);

//         // Verifica se o número digitado é 0
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número é ímpar
//         if (numero % 2 !== 0) {
//             break;
//         }

//         // Se o número for par, incrementa o contador
//         contPares++;
//     }

//     console.log(`Quantidade de números pares antes do primeiro ímpar: ${contPares}`);
// }

// contarParesAntesDoPrimeiroImpar();


// 18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando

// function contarParesEImpares() {
//     let contPares = 0;
//     let contImpares = 0;
//     let numero;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);
//         if (numero === 0) {
//             break;
//         }
//         if (numero % 2 === 0) {
//             contPares++;
//         } else {
//             contImpares++;
//         }
//     }
//     console.log(`Quantidade de números pares: ${contPares}`);
//     console.log(`Quantidade de números ímpares: ${contImpares}`);
// }

// contarParesEImpares();

// 19. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
// programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

// function contarDivisiveis() {
//     let contDivisiveisPor2 = 0;
//     let contDivisiveisPor3 = 0;
//     let contDivisiveisPor5 = 0;
//     let numero;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);
//         if (numero === 0) {
//             break;
//         }
//         if (numero % 2 === 0) {
//             contDivisiveisPor2++;
//         }
//         if (numero % 3 === 0) {
//             contDivisiveisPor3++;
//         }
//         if (numero % 5 === 0) {
//             contDivisiveisPor5++;
//         }
//     }

//     console.log(`Quantidade de números divisíveis por 2: ${contDivisiveisPor2}`);
//     console.log(`Quantidade de números divisíveis por 3: ${contDivisiveisPor3}`);
//     console.log(`Quantidade de números divisíveis por 5: ${contDivisiveisPor5}`);
// }

// contarDivisiveis();

// 20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.

// function calcularMediaDivisiveisPor3() {
//     let somaDivisiveisPor3 = 0;
//     let contDivisiveisPor3 = 0;
//     let numero;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);

//         // Verifica se o número digitado é 0
//         if (numero === 0) {
//             break;
//         }

//         // Verifica se o número é divisível por 3
//         if (numero % 3 === 0) {
//             somaDivisiveisPor3 += numero;
//             contDivisiveisPor3++;
//         }
//     }

//     if (contDivisiveisPor3 > 0) {
//         let media = somaDivisiveisPor3 / contDivisiveisPor3;
//         console.log(`A média dos números divisíveis por 3 é: ${media}`);
//     } else {
//         console.log("Nenhum número divisível por 3 foi digitado.");
//     }
// }

// calcularMediaDivisiveisPor3();


// 21. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.

// function contarNumerosMaisDeTresDigitos() {
//     let contador = 0;
//     let numero;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);
//         if (numero === 0) {
//             break;
//         }
//         if (Math.abs(numero) > 999) {
//             contador++;
//         }
//     }

//     console.log(`Quantidade de números com mais de três dígitos: ${contador}`);
// }

// contarNumerosMaisDeTresDigitos();

// 22. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.

// function calcularMediaEntre50e100() {
//     let soma = 0;
//     let contador = 0;
//     let numero;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);
//         if (numero === 0) {
//             break;
//         }
//         if (numero >= 50 && numero <= 100) {
//             soma += numero;
//             contador++;
//         }
//     }
//     if (contador > 0) {
//         let media = soma / contador;
//         console.log(`A média dos números entre 50 e 100 é: ${media}`);
//     } else {
//         console.log("Nenhum número entre 50 e 100 foi digitado.");
//     }
// }

// calcularMediaEntre50e100();


// 23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
// valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.

// function encontrarMenorImparPositivo() {
//     let menorImparPositivo = Infinity; 

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);

//         if (numero === 0) {
//             break;
//         }
//         if (numero > 0 && numero % 2 !== 0) {
//             if (numero < menorImparPositivo) {
//                 menorImparPositivo = numero;
//             }
//         }
//     }
//     if (menorImparPositivo === Infinity) {
//         console.log("Nenhum número positivo e ímpar foi digitado.");
//     } else {
//         console.log(`O menor valor positivo e ímpar digitado é: ${menorImparPositivo}`);
//     }
// }

// encontrarMenorImparPositivo();

// 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

// function contarParesEImparesEntreExtremos() {
//     let primeiroNumero = null;
//     let ultimoNumero = null;
//     let contadorPares = 0;
//     let contadorImpares = 0;
//     let numero;
//     let primeiro = true;

//     while (true) {
//         numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);
//         if (numero === 0) {
//             break;
//         }
//         if (primeiro) {
//             primeiroNumero = numero;
//             ultimoNumero = numero;
//             primeiro = false;
//         } else {
//             ultimoNumero = numero;
//         }
//     }

//     if (primeiroNumero !== null && ultimoNumero !== null) {
//         if (primeiroNumero <= ultimoNumero) {
//             for (let i = primeiroNumero; i <= ultimoNumero; i++) {
//                 if (i % 2 === 0) {
//                     contadorPares++;
//                 } else {
//                     contadorImpares++;
//                 }
//             }
//         }
        
//         console.log(`Quantidade de números pares entre ${primeiroNumero} e ${ultimoNumero}: ${contadorPares}`);
//         console.log(`Quantidade de números ímpares entre ${primeiroNumero} e ${ultimoNumero}: ${contadorImpares}`);
//     } else {
//         console.log("Nenhum número válido foi digitado.");
//     }
// }

// contarParesEImparesEntreExtremos();
