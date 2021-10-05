function autenticar() {
    var nome = document.forms.form1.nome.value;
    var idade = document.forms.form1.idade.value;

    if (nome == "" || idade < 18 || idade == "") {
        //isNaN(idade) tambem bloquearia a entrada"
        alert("ACESSO NEGADO IDADE NÃO AUTORIZADA!");
        window.open("erro.html");
        break;
        return false;
    } else {
        alert("ACESSO AUTORIZADO!");
        window.open("sucesso.html","");
        return true;
    }
}
