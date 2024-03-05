//Q1 - Insere texto no H1
const troca = document.getElementsByTagName('h1')[0]
troca.innerHTML = 'Formulário de login'

//Q2 - Insere atributo placeholder nas tags input
const insereUser = document.getElementById('user');
insereUser.setAttribute("placeholder", "digite seu usuário");

const inserePass = document.getElementById('pass');
inserePass.setAttribute("placeholder", "digite sua senha");

//Q3 - Trocar a cor de background do botão de confirmação usando a propriedade style
const fundoBotao = document.getElementById('confirm');
fundoBotao.style.backgroundColor = "red";

//Q4 - tocar cor das tags label usando classList
var corLabels = document.getElementsByTagName("label")[0]
corLabels.classList.add("lab");

var corLabels = document.getElementsByTagName("label")[1]
corLabels.classList.add("lab");


//Q5 - adicionar uma tag de hiperlink <a> abaixo dos botões do fomulário
var link = document.createElement("a");
link.setAttribute("href", "https://suap.ifrn.edu.br/accounts/login/")
link.innerText ="Faça seu login pelo SUAP";
document.body.appendChild(link);