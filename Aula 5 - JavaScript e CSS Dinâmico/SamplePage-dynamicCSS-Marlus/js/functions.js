$(document).ready(function(){

    var campos = ["#nome","#sobrenome","#e-mail","#matricula","#usuario",
    "#senha","#confirmarSenha"];

    $("#botaoSalvar").click(function(){
        campos.forEach(alertaNaoPreenchido);
        campos.forEach(pararAlerta);
        checaSenha(); 
        if (camposPreenchidos_Todos(campos)){
            campos.forEach(limpaCampos);
            retornaFoco;
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
        alert("Senhas não conferem");
    }
}

function camposPreenchidos_Todos(listaCampos){
    estaPreenchido = true;
    for (var i = 0; i < listaCampos.length; i++){
        if ($(listaCampos[i]).val() == ("")){
            estaPreenchido = false;
        }
    }
    return estaPreenchido;
}


function limpaCampos(campo){
    $(campo).val("");
}

function retornaFoco(){
    $("#nome").focus();
}