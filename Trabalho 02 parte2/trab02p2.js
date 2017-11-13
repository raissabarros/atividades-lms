/**
 * Created by raissa on 31/10/17.
 */



let ul = document.querySelector('.friends ul');
let campoMensagens = document.querySelector('.msg');

let grupos = [];




function importarGrupos() {
    let xhttpContatos = new XMLHttpRequest();
    xhttpContatos.onreadystatechange = function() {
        if(this.readyState == 4) {
            let json = this.responseText;
            let parsed_json = JSON.parse(json);
            ul.innerHTML = '';
            grupos = [];
            parsed_json.forEach(function(e){
                inserirGrupo(e);
            });
            clickLista();
            console.dir(grupos);
        }
    }
    xhttpContatos.open('GET', 'http://rest.learncode.academy/api/raissabarros/groups', true);
    xhttpContatos.send();
}

function inserirGrupo(g) {
    let li = document.createElement('li');
    let text = document.createTextNode(g.groupName);
    li.appendChild(text);
    ul.appendChild(li);
    grupos.push(g);
}



function atualizarMensagens(id) {
    let xhttpMensagens = new XMLHttpRequest();
    let url = 'http://rest.learncode.academy/api/raissabarros/' + id;
    xhttpMensagens.onreadystatechange = function() {
        if(this.readyState == 4) {
            let json = this.responseText;
            let parsed_json = JSON.parse(json);
            campoMensagens.innerHTML = '';
            parsed_json.forEach(function(e) {
                inserirMensagem(e);
            });
        }
    }
    xhttpMensagens.open('GET', url, true);
    xhttpMensagens.send();
}


function inserirMensagem(msg) {
    let panel = document.createElement('div');
    panel.className = "panel panel-info";
    header.className = "panel-heading";
    let body = document.createElement('div');
    body.className = "panel-body";
    let user = document.createTextNode(msg.userName);
    header.appendChild(user);
    let text = document.createTextNode(msg.message);
    body.appendChild(text);
    panel.appendChild(header);
    panel.appendChild(body);
    campoMensagens.appendChild(panel);
}




function clickLista() {
    let listaGrupos = document.querySelectorAll('.friends ul li');
    for(let i=0; i<listaGrupos.length; i++) {
        listaGrupos[i].addEventListener("click", function() {
            atualizarMensagens(grupos[i].groupID);
            document.getElementById('tituloConversa').innerHTML = grupos[i].groupName;
        });
    }
}

let formIdGrupo = document.querySelector('input[name="idGrupo"]');
let formNomeGrupo = document.querySelector('input[name="nomeGrupo"]');
let formSubmit = document.querySelector('input[type="submit"]');

formSubmit.addEventListener("click",function(e){
    e.preventDefault();

    if(formIdGrupo.value == '') {
        alert("ID do grupo está vazio!");
        return;
    }
    if(formNomeGrupo.value == '') {
        alert("Nome do grupo está vazio!");
        return;
    }

    for(i=0;i<grupos.length;i++) {
        if(grupos[i].groupID == formIdGrupo.value) {
            alert("Já existe um grupo com este identificador!");
            return;
        }
    }

    let nome = formNomeGrupo.value;
    let body = {groupName:nome};
    body.groupID = formIdGrupo.value;

    let xhttpNovoGrupo = new XMLHttpRequest();
    xhttpNovoGrupo.onreadystatechange = function() {
        if(this.readyState == 4) {
            alert("Grupo cadastrado com sucesso!");
            importarGrupos();
        }
    }
    xhttpNovoGrupo.open('POST', 'http://rest.learncode.academy/api/raissabarros/groups', true);
    xhttpNovoGrupo.setRequestHeader('content-type', 'application/json');
    xhttpNovoGrupo.send(JSON.stringify(body));
    formNomeGrupo.value = "";
    formIdGrupo.value = "";
})


importarGrupos();


