/**
 * Created by raissa on 10/10/17.
 */

/* let conso = "teste de console"
    console.log(conso);
*/

function abrirMenu(){
    document.getElementById("menu").style.width = "150px";
    document.getElementById("cabecalho").style.marginLeft = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}

function fecharMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("cabecalho").style.marginLeft = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//o valor da checkbox indica se o menu está visível
//  se a checkbox está marcada (checked é true), o menu está visível
//  se a checkbox não está marcada (checked é false), o menu está escondido
//obs: o valor da checkbox começa como false
function alternarMenu(){
    var x = document.getElementById("check");   //x é a nossa checkbox
    if (x.checked) {                            //se a checkbox está marcada (o menu está aberto) então
        fecharMenu();                           //  fechamos o menu
        x.checked = false;                      //  desmarcamos a checkbox (o menu agora está fechado
    } else {                                    //senão (se a checkbox não está marcada, o menu está fechado) então
        abrirMenu();                            //  abrimos o menu
        x.checked = true;                       //  marcamos a checkbox (o menu agora está aberto)s
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var blocodetexto = this.nextElementSibling;
    if (blocodetexto.style.maxHeight){
      blocodetexto.style.maxHeight = "0";
	  blocodetexto.style.padding = "0 10px";
    } else {
      blocodetexto.style.maxHeight = blocodetexto.scrollHeight + "px";
	  blocodetexto.style.padding = "10px";
    } 
  }
}
