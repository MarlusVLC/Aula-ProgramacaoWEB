var listaMusicas = [];

$(document).ready(function(){
    $("#bAddMusica").click(function(){
        fLocalAddMusica();
        fLocalLimpaEFoca_Add();
    })

    $("#bPopMusica").click(function(){
        fLocalSpliceMusica();  
        fLocalLimpaEFoca_Remove();      
    })

    $("button").click(function(){
        fLocalMostraMusicas(listaMusicas);
    })
})



function fLocalAddMusica(){
    var musica = $("#iMusicaNome").val();
    if (musica != ("")){
        listaMusicas.push(musica);  
    }
}

function fLocalSpliceMusica(){
    var pos = parseInt($("#iPosRemover").val());
    var qtd = parseInt($("#iQtdRemover").val());
    listaMusicas.splice(pos,qtd);
}

function fLocalMostraMusicas(musicas){
    // alert("Ta mosrtante");
    $("#divListaMusica").html(" ");

    i = 0
    for (var mus of musicas){
        $("#divListaMusica").append(i + ": " + mus + "<br>");
        i++;
    }
}

function fLocalLimpaEFoca_Add(){
    //Limpa o campo de nome da música e retorna o foco pro input
    $("#iMusicaNome").val("");
    $("#iMusicaNome").focus();
}

function fLocalLimpaEFoca_Remove(){
    //Limpa os campos de posição e quantidade e retorna o foco pro input
    // de posição
    $("#iPosRemover").val("");
    $("#iQtdRemover").val("");
    $("#iPosRemover").focus();
}

function fLocalOnlyNum(){
    
}


