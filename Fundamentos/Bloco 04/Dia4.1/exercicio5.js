const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

let validacao = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (validacao) {
    if (ladoA + ladoB + ladoC === 180) {
        console.log("true")
    } else {
        console.log("false")
    }
} else {
    console.log("erro: os dados não são válidos.")
}