$(document).ready(function(){
    dados = []
    $("#bGuardar").click(function(){
        localf_guardaDados(dados);
        localf_showData(dados);
    })

})


function localf_guardaDados(dados){
    aux = [];

    aux.push($("#iNome").val())
    aux.push($("#iSobrenome").val())
    aux.push($("#iIdade").val())
    aux.push($("#iEmail").val())

    dados.push(aux);

    aux = []

    console.log(dados)
}

function localf_showData(dados){
    var conteúdo = "";

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