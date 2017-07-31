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

/*ADICIONANDO OBJETO NA MINHA BIO*/
var bio = {
	"name" : "Pedro Duarte",
	"papel" : "Desenvolvedor Front-End",
	"contatos" : {
		"mobile" : "11972436305",
		"email" : "pedro.duarte@letscode-academy.com",
		"github" : "pedro",
		"twitter" : "@pedro",
		"location" : "San Francisco"
	},
	"welcomeMessage" : "Oiiiii!!",
	"skills" : ["programador", "Front-End", "wordpress"],
	"bioPic" : "images/eu.jpg"
}

var education = {
	"schools": [
		{
		"name": "Universidade Federal de Ouro Preto",
		"city" : "Ouro Preto",
		"dates" : 2014,
		"url" : "http://www.fideitabira.com.br"
		},
		{
		"name": "FIDE",
		"city" : "Itabira",
		"dates" : 2006,
		"url" : "http://www.fideitabira.com.br"
		}
	]
	"Courses" : [
		{
			"title" : "HTML/CSS e JS",
			"school" : "Let's Code",
			"date" : 2017,
			"url" : "http://letscode-academy.com/"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Let's Code",
			"title" : "Desenvolvedor Front-End",
			"date" : "Março 2017 - atual",
			"description" : "Descrição"
		},
		{
			"employer" : "PDWebDesign",
			"title" : "Desenvolvedor Front-End",
			"date" : "Janeiro 2008 - atual",
			"description" : "Descrição"
		},
	]
}


