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
 let a =hoje.getFullYear();

    var semana = new Array();
    semana[0] ="Domingo";
    semana[1] ="Segunda-feira";
    semana[2] ="Terça-feira";
    semana[3] ="Quarta-feira";
    semana[4] ="Quinta-feira";
    semana[5] ="Sexta-feira";
    semana[6] ="Sabádo";

    let h =hoje.getHours();
    if(h<10){
        h="0"+ h;
    }
    let mn = hoje.getMinutes();
    if(mn<10){
        mn="0"+ mn;
    }
    let s = hoje.getSeconds();
    if(s<10){
        s="0"+ s;
    }

    document.getElementById("horario").value ="Hoje é dia " + d + "/"+ m + "/" + a + ", " + semana[1]+ " e o horário é "+ h +":"+ mn + ":"+ s;

} 

function Limpar()
{
  document.getElementById("horario").value="";
  clearInterval(intervalo);
}