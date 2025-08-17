//Calculadora de partidas Rankeadas


// Este código calcula o rank de um jogador baseado no número de vitórias e derrotas.
function CalcularRank(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas;
    let nivel;
    
if (saldoVitorias < 10) {
    nivel = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}


return { saldoVitorias, nivel };

}

const resultado = CalcularRank(55, 35);  
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`);
