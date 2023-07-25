    const nome = prompt("Qual o seu nome?");
    const idade = prompt("Qual sua idade?");
    const linguagem = prompt("Qual linguagem de programação você está estudando?");

    console.log("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem +"!")

const pergunta = prompt("Você gosta de estudar " + linguagem + "?")

if(pergunta == 'sim' || 'Sim'){
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}
else if (pergunta == 'não' || 'Não'){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
    } else {
    console.log ("Responda com sim ou não")
    }
