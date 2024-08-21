let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';

//utilizado para evitar repetiçao dos codigos acima mais eu não entendi então em um projeto pessoal vou repetir os códigos/por mais q funcione euto boiando nisso
function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //codigo abaixo responsável por falar, texto = h1 e p, Brazilia tal tal tal voz em portugues e o {rate} é a velocidade da fala
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número de 1 a 1000');
}

exibirMensagemInicial();

function verificarChute(){
    //valor q esta na tag input
    let chute = document.querySelector('input').value;
    // = atribuir valor/ == comparar valor
    if(chute == numeroSecreto){
        exibirTextoNatela('h1', 'Acertou!');
        // : = "se não" else = se não 
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela('p', mensagemTentativas);
        //id = identificador único
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNatela('p', 'O número secreto é menor');
        } else{
            exibirTextoNatela('p', 'O número secreto é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAletorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    // .includes = verificar se tem o numero na lista se sim = a true se nao = a false
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAletorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}