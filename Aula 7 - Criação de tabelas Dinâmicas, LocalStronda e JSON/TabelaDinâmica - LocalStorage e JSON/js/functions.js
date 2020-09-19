$(document).ready(function(){
    dados = []
    $("#bGuardar").click(function(){
        localf_guardaDados(dados);
        globalf_guardaDados(dados);
        // localf_showData(dados);
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


function globalf_guardaDados(dados){
    storage = window.localStorage;
    storage.setItem("dados", JSON.stringify(dados));
}
