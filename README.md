🧩 **Start**

## 1- clone o repositório

no terminal digite:

git clone https://github.com/leonardorsolar/server-typescript-form-iff-01.git

cd server-typescript-form-iff-01

code .

## 2- Instalando as dependências

No diretorio rais do projeto:

npm install

## 3- Executando o app

npm run dev

Veja no package.jon:

"scripts": {
"test": "jest",
"start": "ts-node src/index.ts",
"dev": "nodemon --exec ts-node src/index.ts",
"build": "tsc"
},

🧩 **Test**

## 1- Criação do arquivo de test

crie o arquivo tests/Conta.test.ts

### história de usuário:

História do Usuário 1.1: saldo da conta

Como usuário
Quero uma conta bancária
Para que eu possa visualizar o meu saldo inicial zero

### Teste de aceitação

Feature: Visualizar Saldo
Como cliente
Quero uma conta bancária
Para que eu possa visualizar o meu saldo

Cenário01: registro bem-sucedido
Dado que sou um usuário e tenho acesso a uma conta
Quando acesso o meu saldo
Então eu deveria visualizar o meu saldo inicial zerado

Cenário 02: falha ao visualizar saldo sem estar autenticado
Dado que não estou autenticado no sistema
Quando tento acessar o meu saldo
Então devo receber uma mensagem informando que é necessário realizar login
E não devo visualizar nenhuma informação de saldo

## 2- Adicione o codigo

test("Deve criar uma conta com saldo zero", () => {
// Given: dado que
// Aqui você deve criar qualquer configuração necessária para o teste.

        // When: Quando
        // Aqui você deve realizar a ação ou evento que está sendo testado.


        // Then: Então
        // Aqui você deve verificar se o resultado é o esperado.
        expect().toBe(0)
    })

test('Deve criar uma conta com saldo zero', () => {
//Give(dado que)
Dado que sou um usuário e tenho acesso a uma conta
//When (quando acontecer algo)
Quando acesso o meu saldo
//then (Então faça isso)
Então eu deveria visualizar o meu saldo incial zerado
});

## Começando:

## 1- Executando o teste

npm run test

npm run test tests/Conta.test.ts

## 2- implementando o código de teste.

Given: crie a instanciação
When: crie o método
Então: verifique o resultado do método

## 2- Usando o TDD

## Etapa 1: Escrevendo o primeiro teste (vermelho)

Comece escrevendo um teste com falha que especifique o comportamento desejado.

test('Deve retornar zero da conta', () => {
//Give(dado que)
const conta = new Conta();
//When (quando acontecer algo)
const saldo = conta.saldo;
//then (Então faça isso)
expect(saldo).toBe(0);
});

Execute o test: npm run test

Cannot find name 'Conta'. Did you mean 'conta'?
Não foi possível encontrar o nome 'Conta'. Você quis dizer 'conta'?

## Etapa 2: Fazendo o teste passar (verde)

Implemente o código mínimo necessário para fazer o teste passar.

class Conta {
saldo: number
constructor() {
this.saldo = 0
}
}
export default Conta

Execute o test: npm run test

## Etapa 3: Refatoração

O teste passou mas a implementação não está correta. Precisamos então precisamos continuar…

class Conta {
saldo: number
constructor() {
this.saldo = 0
}
}
export default Conta

Execute o test: npm run test

-   POO: abastração, encapsulamento, coerência de responsabilidade (SRP do SOLID)
-   Protegendo os atributos e usando métodos de acesso

class Conta {
private saldo: number
constructor() {
this.saldo = 0
}

public getSaldo(): number {
return this.saldo
}
}
export default Conta

Execute o test: npm run test

Por que isso é melhor?
Encapsulamento: saldo agora é privado e só pode ser lido através de um método controlado (obterSaldo).
Abstração: usuários da classe não sabem como o saldo é armazenado, só que existe uma forma de obtê-lo.
Aberto para extensão, fechado para modificação (OCP): você pode futuramente aplicar regras como juros ou taxas sem mudar o uso da classe.

Etapa 4: Adicionando mais testes
TDD envolve escrever múltiplos testes para cobrir vários cenários.

### história de usuário:

História do Usuário 1.x: saldo da conta

Como usuário
Quero depositar 100 reais
Para que eu possa visualizar o meu saldo de 100 reais

### Teste de aceitação

Feature: Visualizar Saldo
Dado que sou um usuário e tenho acesso a uma conta
Quando credito 100 reais
Então eu deveria visualizar o meu saldo de 100 reais

test('Deve retornar zero da conta', () => {
//Give(dado que)
Dado que sou um usuário e tenho acesso a uma conta
//When (quando acontecer algo)
Quando credito 100 reais
//then (Então faça isso)
Então eu deveria visualizar o meu saldo de 100 reais
});
