let nome = prompt('Qual seu nome?');
let idade = prompt('Qual sua idade?');
let linguagem = prompt('Qual linguadem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}`);

let resposta; /* Inicair a declaração da VAR FOOORA DO LOOP */
do{
    resposta = prompt(`Você gosta de estudar JS? Responda com 1 para SIM e 2 para NÃO`);
        if(resposta=='1'){    
            alert('Muito bom! Continue estudando e você terá muito sucesso.')
        }   else if(resposta=='2'){
            alert('Que pena! Já tentou aprender outras linguagens?');
        }   else{ 
            alert('Informe um número corresponde as opções SIM ou NÃO')};
        } while(resposta!=='1');