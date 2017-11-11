/**
 * Created by raissa on 31/10/17.
 */


let chat = [
    {
        usuario: "Mamãe",
        imagem: "imagens/avatar02.png",
        mensagens: [
            {
                usuario: "Mamãe",
                texto: "Bom dia, Baby! Tudo bem?"
            },
            {
                usuario: "Raíssa",
                texto: "Tudo, daí"
            },
            {
                usuario: "Mamãe",
                texto: "Que bom"
            }
        ]
    },
    {
        usuario: "Filipe",
        imagem: "imagens/avatar03.png",
        mensagens: [
            {
                usuario: "Filipe",
                texto: "Olarrr!"
            },
            {
                usuario: "Raíssa",
                texto: "olarr"
            },
            {
                usuario: "Filipe",
                texto: "Te amo! Boa aula!"
            }
        ]
    },
    {
        usuario: "Marília",
        imagem: "imagens/avatar01.png",
        mensagens: [
            {
                usuario: "Raíssa",
                texto: "Miga, vamo no Submarine?"
            },
            {
                usuario: "Marília",
                texto: "ow, miga, tô sem dinheiro =("
            },
            {
                usuario: "Raíssa",
                texto: "ow, bicha, queria ir. Eu pago, bora? =D"
            }
        ]
    }
];

let listaamigos = chat.map(function (element){
    return '<li class="contato"><img src="' + element.imagem + '", class="avatar">' + element.usuario + '</li>';
}).join('');

document.getElementById('contatinhos').innerHTML = listaamigos;



let listinha = document.querySelectorAll('.contato');
for (let i=0; i<listinha.length; i++) {
    listinha[i].addEventListener("click", function() {
        document.getElementById('tituloConversa').innerHTML = chat[i].usuario;
        let mensagi = chat[i].mensagens.map(function (elemento){
            return '<div class="panel panel-info"><div class="panel-heading">' + elemento.usuario + '</div>' +
                '<div class="panel-body">' + elemento.texto + '</div></div>';
        }).join('');
        document.getElementById('msg').innerHTML = mensagi;
    })
}



