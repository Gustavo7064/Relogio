var hoje;
var intervalo;
function Iniciar(){
 intervalo = setInterval("Repete()",1000);
}

function Parar(){
    clearInterval(intervalo);
}

function Repete(){
    hoje = new Date();
    let d = hoje.getDate();
    if(d<10){
        d="0"+ d;
    }
    let m = hoje.getMonth()+1;
    if(m<10){
        m="0"+ m;
    }

    
}