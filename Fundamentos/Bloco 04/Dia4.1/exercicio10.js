const custo = 10;
const venda = 20;
let imposto = custo * 0.2;

let lucro = (venda - custo - imposto) * 1000;

if(custo < 0 || venda < 0) {
    console.log('erro: algum valor é menor que zero.')
} else {
    console.log(lucro)
}