
let chave = "c4a078c45918aa0ed7ae3949b51cfaf3"

function colocanatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML ="Tempo em " + dados.name
    document.querySelector(".p2").innerHTML = Math.floor(dados.main.temp) + "ºC" 
    document.querySelector(".p3").innerHTML = dados.weather[0].description
    document.querySelector(".p4").innerHTML = dados.
}


async function buscarcidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")

        .then(resposta => resposta.json())
         colocanatela(dados)
         console.log(dados)
}




function cliquei(){
    let cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)

}