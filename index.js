//Calculadora de partidas Rankeadas


// Este código calcula o rank de um jogador baseado no número de vitórias e derrotas.
function CalcularRank(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas;
    let nivel;
    
if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}


return { saldoVitorias, nivel };

}

const resultado = CalcularRank(55, 35);
    
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`);