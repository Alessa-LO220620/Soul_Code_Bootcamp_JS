//Crie uma programa que peça pro usuário digitar sua idade e OBRIGUE que a idade digitada esteja correta.

var idade;
        
    do {
        idade = parseInt(prompt("Digite uma idade válida:"));
    } while (isNaN(idade) || idade <= 0 || idade >=120);
        document.write("Sua idade ",idade, " é válida");