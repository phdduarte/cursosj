/*
Vamos começar a editar o cabeçalho:
 */
$("#main").append("Pedro Duarte");
/*Procuramos um elemento com id = main nesse codigo do JQuery*/

/*ADICIONAR NO CABEÇALHO O NOME USANDO TROCA DE INFORMAÇÃO*/
var nome = "Pedro Duarte";
var formatoNome = HTMLheaderName.replace("%data%", nome);



/*ADICIONAR NO CABEÇALHO O EMRPEGO PROCURADO USANDO TROCA DE INFORMAÇÃO*/

var papel = "Desenvolvedor Front-End";
var formatoPapel = HTMLheaderRole.replace("%data%", papel);

$("#header").prepend(formatoPapel);
$("#header").prepend(formatoNome);
