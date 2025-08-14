//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome){
    amigos.push(nome); 
    console.log(amigos);
    document.getElementById("listaAmigos").innerHTML = amigos.join("<br>");
    console.log(amigos.length);

   }else{
    alert('Campo vazio, inserir um nome.');
   }

   limparCampo();
           
}

function sortearAmigo(){
    let numeroDoIndice = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[numeroDoIndice];
    document.getElementById("listaAmigos").innerHTML = `O amigo secreto sorteado é : <li>${nomeSorteado}</li>`;

}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

