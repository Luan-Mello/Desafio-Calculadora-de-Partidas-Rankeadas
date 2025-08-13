# 🏆 Calculadora de Partidas Rankeadas

## Descrição

Este projeto consiste em uma função JavaScript que calcula o saldo de vitórias e derrotas de um jogador em partidas ranqueadas, determinando seu nível com base na quantidade de vitórias.

## 🧪 Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Visual Studio Code** como editor de código

## 🔧 Conceitos Aplicados

- **Variáveis**: Utilizadas para armazenar dados como vitórias, derrotas, saldo e nível.
- **Operadores**: Usados para realizar operações aritméticas e comparações.
- **Estruturas de Decisão (Condicionais)**: `if...else if...else` para determinar o nível com base nas vitórias.
- **Funções**: A função `CalcularRank` recebe parâmetros e retorna um objeto com saldo e nível..

## 🎯 Objetivo

Criar uma função que recebe como parâmetros a quantidade de vitórias e derrotas de um jogador e retorna um objeto contendo:​

- **saldoVitorias**: Resultado da operação `vitórias - derrotas`.
- **nivel**: Classificação do jogador com base no número de vitórias.

A classificação segue os critérios abaixo:​

|     Vitórias  | Classificação       |
|---------------------|---------------|
| Menor ou igual a 10     | Ferro     |
| entre 11 e 20           | Bronze    |
| entre 21 e 50           | Prata     |
| entre 51 e 80           | Ouro      |
| entre 81 e 90           | Diamante  |
| entre 91 e 100          | Lendário  |
| maior ou igual a 101    | Imortal   |

