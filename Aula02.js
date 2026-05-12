//DEFINIÇÃO DE VARIÁVEIS

let pessoa = "Nome da pessoa";
let idadePessoa = 30;
let alturaPessoa = 1.93;
let statusPessoa = true;
let salarioPessoa = 1500;
let salarioBonus = 100;

let salarioTotal = salarioBonus + salarioPessoa; 

console.log( pessoa );
console.log( idadePessoa);
console.log(alturaPessoa);
console.log( statusPessoa);
console.log( salarioBonus );
console.log( salarioTotal);


//UNINDO TODAS AS INFORMAÇÕES EM UM TEXTO:
console.log(
 'O nome digitado foi: '+pessoa+
 ' a idade digitada foi: '+idadePessoa+
 ' a altura digitada foi: '+alturaPessoa+
 ' o status da pessoa é:' +statusPessoa+
 ' o salário da pessoa é: '+salarioPessoa+
 ' e o salario bonus é:'+salarioBonus+
 ' e o salario total é:'+salarioTotal+ '!!!'   
)