let area; /* áreas: Front ou Back */
let framework; /*  */

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}



function areaButton() {
    var radios = document.getElementsByName('area__opcao');
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked){
            area=radios[i].value;/* RECEBE O VALUE DA OPÇÃO CHECKED */}
    }
    if(area=="Front-end"){/* VALUE */
        document.querySelector('.framework').classList.toggle('reveal')}
        else if(area=='Back-end'){
            document.querySelector('.linguagem').classList.toggle('reveal')}
}

function frameworkButton(){
    var radios = document.getElementsByName('framework__opcao');
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked){
            framework=radios[i].value;/* RECEBE O VALUE DA OPÇÃO CHECKED */}
    }
    document.querySelector('.futuro').classList.toggle('reveal')
    return exibirTextoNaTela('futuro__pergunta',`Olá Dev, você está aprendendo ${area} com o framework ${framework}`);
    }

/*     if(escolha=="1"){
        escolha="Front-End";
        escolha2 = prompt('Usando 1 React ou 2 Vue?');
        switch (escolha2){
            case "1": /* OPÇÃO INSERIDA - CONSIDERANDO JS EM STRING LET OU VAR??INDEPENDENTE DO TIPO  É STRING*/
/*            alert(`Você esta buscando uma carreira de ${escolha} com React.`);
            break;
            case "2": alert(`Você esta buscando uma carreira de ${escolha} com Vue.`);
        }
    }
    else if(escolha=='2'){
        escolha="Back-End";
        escolha2 = prompt('Usando 1 C# ou 2 Java?');
        switch (escolha2){
            case "1": alert(`Você esta buscando uma carreira de ${escolha} com C#.`);
            break;
            case "2": alert(`Você esta buscando uma carreira de ${escolha} com Java.`);
        }
    }   */ 

