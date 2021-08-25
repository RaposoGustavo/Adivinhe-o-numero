var numeroAleatorio= Math.floor(Math.random() * 100) + 1; //atribuir número aleatório entre 1 e 100

//guardar referência dos parágrafos resultantes
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

//armazenam referências para o campo de texto e o botão de envio e são usados para controlar o envio do palpite.
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

//usadas para armazenar a contagem dos palpites
var contagemPalpites =1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
    var palpiteUsuario= Number(campoPalpite.value)
    if (contagemPalpites === 1){
        palpites.textContent= 'Palpites anteriores: ';
    }
    
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabens! Você Acertou!'
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10){
        ultimoResultado.textContent= 'Fim de jogo!';
        baixoOuAlto.textContent= '';
        configFimDeJogo();
    } else{
        ultimoResultado.textContent = 'Errado! Tente novamente!'
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent= 'Seu palpite está muito baixo!';
        } else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent= 'Seu palpite está muito alto!';
        }
    }
    contagemPalpites++;
    campoPalpite.value= '';
    campoPalpite.focus();
}
    envioPalpite.addEventListener('click', conferirPalpite)
 function configFimDeJogo(){
    campoPalpite.disabled= true;
    envioPalpite.disabled= true;
    botaoReinicio= document.createElement('button');
    botaoReinicio.textContent= 'Quer tentar de novo?';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagemPalpites= 1;

    var reiniciarParas= document.querySelectorAll('.resultadoParas p');
    for (var i= 0; i < reiniciarParas.length; i++){
        reiniciarParas[i].textContent= '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled= false;
    envioPalpite.disabled= false;
    campoPalpite.value= '';
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio= Math.floor(Math.random()* 100)+ 1;
}