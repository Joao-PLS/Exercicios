let peça = 'Rainha';


if (peça.toLowerCase() === 'peao') {
    console.log('Pode andar somente 1 casa para frente.')
} else if(peça.toLowerCase() === 'torre') {
    console.log('Pode andar um numero ilimitado de casas (desde que não tenha uma peça no caminho) para frente,para traz ou para os lados.')
} else if(peça.toLowerCase() === 'cavalo') {
    console.log('Pode andar duas casas em linha reta para qualquer direção e depois uma casa lateralmente(movimento em L)')
} else if(peça.toLowerCase() === 'bispo') {
    console.log('Pode andar um numero ilimitado (desde que não tenha uma peça no caminho) de casas na diagonal.')
} else if (peça.toLowerCase() === 'rei') {
    console.log('Pode andar 1 casa em qualquer direção.')
} else if (peça.toLowerCase() === 'rainha') {
    console.log("Pode andar um numero ilimitado de casas (desde que não tenha uma peça no caminho) para qualquer direção.")
}