let escolha = prompt('Você deseja seguir para 1 Front-End ou 2 Back-End?');
var escolha2;
    if(escolha=="1"){
        escolha="Front-End";
        escolha2 = prompt('Usando 1 React ou 2 Vue?');
        switch (escolha2){
            case "1": /* OPÇÃO INSERIDA - CONSIDERANDO JS EM STRING LET OU VAR??INDEPENDENTE DO TIPO  É STRING*/
            alert(`Você esta buscando uma carreira de ${escolha} com React.`);
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
    }   

