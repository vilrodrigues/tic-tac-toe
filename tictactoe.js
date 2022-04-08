let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById("jogador-selecionado");
let vencedorSelecionado = document.getElementById("vencedor-selecionado");

mudarJogador("X");

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }

    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== "-"){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    if(jogador === "X"){
        mudarJogador("O");
    } else {
        mudarJogador("X");
    }

    checaVencedor();
}

function mudarJogador(valor){

    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    let quadrado1 = document.getElementById("1");
    let quadrado2 = document.getElementById("2");
    let quadrado3 = document.getElementById("3");
    let quadrado4 = document.getElementById("4");
    let quadrado5 = document.getElementById("5");
    let quadrado6 = document.getElementById("6");
    let quadrado7 = document.getElementById("7");
    let quadrado8 = document.getElementById("8");
    let quadrado9 = document.getElementById("9");

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function checaSequencia(q1, q2, q3){

    let eigual = false;

    if(q1.innerHTML !== "-" && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        eigual = true;
    }
    console.log(eigual);
    return eigual;
}

function mudarCorQuadrado(q1, q2, q3){

    q1.style.background = "#0f0";
    q2.style.background = "#0f0";
    q3.style.background = "#0f0";
}

function mudarVencedor(quadrado){

    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){

    vencedor = null;
    vencedorSelecionado.innerHTML = "";

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = "#eee";
        quadrado.style.color = "#eee";
        quadrado.innerHTML = "-";
    }

    mudarJogador("X");
}