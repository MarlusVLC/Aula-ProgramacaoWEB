$(document).ready(function(){

    var campos = ["#nome","#sobrenome","#e-mail","#matricula","#usuario",
    "#senha","#confirmarSenha"];

    $("#botaoSalvar").click(function(){
        campos.forEach(alertaNaoPreenchido);
        campos.forEach(pararAlerta);
        checaSenha(); 
        for (var i = 0; i < campos.length; i++){
            if (checaPreenchimento(campos[i]) == false){
                break;
            }
            campos.forEach(limpaCampos);
            retornaFoco();
        }
    });
});

function alertaNaoPreenchido(campo){
    if ($(campo).val() == ("")){
        $(campo).addClass("campo-obrigatorio");
    }
}

function pararAlerta(campo){
    if ($(campo).val() != ("")){
        $(campo).removeClass("campo-obrigatorio");
    }
}

function checaSenha(){
    if ($("#senha").val() != $("#confirmarSenha").val()){
        $("#senha").addClass("campo-obrigatorio");
        $("#confirmarSenha").addClass("campo-obrigatorio");
    }
}

function checaPreenchimento(campo){
    if($(campo).val() != ("")){
        return true;
    }
    return false;
}


function limpaCampos(campo){
    $(campo).val("");
}

function retornaFoco(){
    $("#nome").focus();
}