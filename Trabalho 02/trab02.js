/**
 * Created by raissa on 31/10/17.
 */


let chat = [
    {
        usuario: "Mamãe",
        imagem: "imagens/avatar02.png",
        mensagens: [
            {
                usuario: "mamae",
                texto: "Bom dia, Baby! Tudo bem?"
            },
            {
                usuario: "raissa",
                texto: "Tudo, daí"
            },
            {
                usuario: "mamae",
                texto: "Que bom"
            }
        ]
    },
    {
        usuario: "Filipe",
        imagem: "imagens/avatar03.png",
        mensagens: [
            {
                usuario: "filipe",
                texto: "Olarrr!"
            },
            {
                usuario: "raissa",
                texto: "olarr"
            },
            {
                usuario: "filipe",
                texto: "Te amo! Boa aula!"
            }
        ]
    },
    {
        usuario: "Marília",
        imagem: "imagens/avatar01.png",
        mensagens: [
            {
                usuario: "raissa",
                texto: "Miga, vamo no Submarine?"
            },
            {
                usuario: "marilia",
                texto: "ow, miga, tô sem dinheiro =("
            },
            {
                usuario: "raissa",
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
            return elemento.usuario + ': <br/>' + elemento.texto + '<br/><br/>';
        }).join('');
        document.getElementById('msg').innerHTML = mensagi;
    })
}



