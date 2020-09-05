
$(document).ready(function(){

    $("#bPar").click(function(){
        mostraPares()
    })

    $("#bImpar").click(function(){
        mostraImpares()
    })
})

function mostraPares(limite){
    var limite = parseInt($("#iNum").val());
    //$("#divResultado").html(" ");

    for (var i=0; i <= limite; i += 2){
        $("#divResultado").append(i + " ");
    }
}

function mostraImpares(limite){
    var limite = parseInt($("#iNum").val());
    $("#divResultado").html(" ");

    for (var i=1; i <= limite; i += 2){
        $("#divResultado").append(i + "<br>");
    }
}