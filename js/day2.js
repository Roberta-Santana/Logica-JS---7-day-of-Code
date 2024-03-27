let nome;
let idade;
let linguagem;
let mensagem;

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;  
}

function infoRetorno(){
    nome= document.getElementById('nome').value;
    idade = document.getElementById('idade').value;
    linguagem = document.getElementById('linguagem').value;
    mensagem = `Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}`;
    //MÉTODO PARA REVELAR A CLASSE APÓS O CLIK DO BOTÃO DA CLASSE ANTERIOR
    document.querySelector('.Atividade02').classList.toggle('reveal');
    return exibirTextoNaTela(`Informacao__retorno`, `${mensagem}`),exibirTextoNaTela(`Pergunta`, `Você gosta de estudar ${linguagem}?`);
}


function mostrarEscolha(){
    var radios = document.getElementsByName('opcao');
    var escolha;
    for(var i=0; i<radios.length;i++){
        if(radios[i].checked){
            escolha= radios[i].value;
            break;
        }
    }
    if (escolha=='Sim') {
        document.getElementById('escolha__resultado').innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.';
      } else  {
        document.getElementById('escolha__resultado').innerHTML = 'Que pena! Tente aprender outras linguagens.';
      }
}


/* let resposta; /* Inicair a declaração da VAR FOOORA DO LOOP */
/* do{
    resposta = prompt(`Você gosta de estudar JS? Responda com 1 para SIM e 2 para NÃO`);
        if(resposta=='1'){    
            alert('Muito bom! Continue estudando e você terá muito sucesso.')
        }   else if(resposta=='2'){
            alert('Que pena! Já tentou aprender outras linguagens?');
        }   else{ 
            alert('Informe um número corresponde as opções SIM ou NÃO')};
        } while(resposta!=='1'); */