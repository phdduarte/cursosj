/*
Vamos começar a editar o cabeçalho:
 */
$("#main").append("Pedro Duarte");
/*Procuramos um elemento com id = main nesse codigo do JQuery*/

/*ADICIONAR NO CABEÇALHO O NOME USANDO TROCA DE INFORMAÇÃO*/
var nome = "Pedro Duarte";
var formatoNome = HTMLheaderName.replace("%data%", nome);

$("#header").append(formatoNome);