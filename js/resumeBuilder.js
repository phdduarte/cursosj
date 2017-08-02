/*
Vamos começar a editar o cabeçalho:
 */
//$("#main").append("Pedro Duarte");
/*Procuramos um elemento com id = main nesse codigo do JQuery*/

/*ADICIONAR NO CABEÇALHO O NOME USANDO TROCA DE INFORMAÇÃO*/




/*ADICIONAR NO CABEÇALHO O EMRPEGO PROCURADO USANDO TROCA DE INFORMAÇÃO*/


/*ADICIONANDO OBJETO NA MINHA BIO*/
var bio = {
    "name": "Pedro Duarte",
    "papel": "Desenvolvedor Front-End",
    "contatos": {
       "mobile": "11972436305",
       "email": "pedro.duarte@letscode-academy.com",
       "github": "pedro",
       "twitter": "@pedro",
       "location": "San Francisco"
	},
	"welcomeMessage": "Oiiiii!!",
	"skills": ["programador", "Front-End", "wordpress"],
	"bioPic": "images/eu.jpg"
}

var formatoNome = HTMLheaderName.replace("%data%", bio.name);
var formatoPapel = HTMLheaderRole.replace("%data%", bio.papel);
var formatobioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#header").prepend(formatoPapel);
$("#header").prepend(formatoNome);
$("#header").prepend(formatobioPic);



if (bio.skills.length > 0 ){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

var education = {
	"schools": [
		{
		   "name": "Universidade Federal de Ouro Preto",
		   "city" : "Ouro Preto",
		   "dates": 2014,
		   "url": "http://www.fideitabira.com.br"
		},
		{
		   "name": "FIDE",
		   "city": "Itabira",
		   "dates": 2006,
		   "url": "http://www.fideitabira.com.br"
		}
	],
	"Courses": [
		{
			"title": "HTML/CSS e JS",
			"school": "Let's Code",
			"date": 2017,
			"url": "http://letscode-academy.com/"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Let's Code",
			"title": "Desenvolvedor Front-End",
			"date": "Março 2017 - atual",
			"description": "Descrição"
		},
		{
			"employer": "PDWebDesign",
			"title": "Desenvolvedor Front-End",
			"date": "Janeiro 20 - atual",
			"description": "Descrição"
		}
	]
}


/*EXERCICIO COLOCAR PARTE DE WORK*/
for (job in work.jobs){
	//CRIA UMA NOVA DIV PARA MOSTRAR NOSSAS EXPERIENCIAS DE TRABALHOS
	$("#workExperience").append(HTMLworkStart);
	//TITULO DO TRABALHO
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	//TITULO DA TAREFA NO TRABALHO
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	//SOMA DOS DOIS
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	//PARA ADICIONAR NO ULTIMO ELEMENTO DA CLASSE WORK-ENTRY
	$(".work-entry:last").append(formattedEmployerTitle);


	/*COLOCANDO A DATA */

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
	//$(".work-entry:last").append(job);
	$(".work-entry:last").append(formattedDates);

	/*DESCRIÇÃO do emprego*/
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	//$(".work-entry:last").append(job);
	$(".work-entry:last").append(formattedDescription);

}