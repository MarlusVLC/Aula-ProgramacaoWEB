$(document).ready(function(){
    // var dadosStorage = JSON.parse(storage.getItem('dados'));
    storage = window.localStorage;
    console.log(JSON.parse(storage.getItem('dados')));
    var dadosStorage = JSON.parse(storage.getItem('dados'));
    localf_showData(dadosStorage);
})



function localf_showData(dados){
    var conteudo = "";

    for(var i = 0; i < dados.length; i++){
        $("#tabela").html("");
        conteudo = "";
        conteudo += "<tr>"
        conteudo += "<td>" + dados[i][0] + "</td>";
        conteudo += "<td>" + dados[i][1] + "</td>";
        conteudo += "<td>" + dados[i][2] + "</td>";
        conteudo += "<td>" + dados[i][3] + "</td>";
        conteudo += "</tr>"

        $("#tabela").append(conteudo);
    }
}
