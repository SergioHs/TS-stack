# TS-stack
A simple stack in typescript

Pilha em TypeScript
Este é um exemplo de implementação de uma pilha em TypeScript. A pilha é uma estrutura de dados que segue o princípio LIFO (last-in, first-out), onde o último elemento adicionado é o primeiro a ser removido.

Uso
Para usar a classe Pilha, basta criar uma nova instância da classe e chamar os métodos disponíveis. Veja um exemplo abaixo:

````typescript

import Pilha from './Pilha';

const pilha = new Pilha<number>();

pilha.empilhar(1);
pilha.empilhar(2);
pilha.empilhar(3);

console.log(pilha.olhar()); // Saída: 3

pilha.desempilhar();
console.log(pilha.olhar()); // Saída: 2

console.log(pilha.estaVazia()); // Saída: false
console.log(pilha.tamanho()); // Saída: 2

pilha.limpar();
console.log(pilha.estaVazia()); // Saída: true

````

Métodos disponíveis
A classe Pilha possui os seguintes métodos:

````typescript
//adiciona um item ao topo da pilha.
empilhar(item: T): void

//remove e retorna o item no topo da pilha. Se a pilha estiver vazia, retorna undefined.
desempilhar(): T | undefined

//retorna o item no topo da pilha sem removê-lo. Se a pilha estiver vazia, retorna undefined.
olhar(): T | undefined

//verifica se a pilha está vazia e retorna true ou false.
estaVazia(): boolean

//retorna o número de itens na pilha.
tamanho(): number

//remove todos os itens da pilha.
limpar(): void

````


Tipos genéricos
A classe Pilha utiliza tipos genéricos em sua definição, o que significa que você pode usar qualquer tipo como argumento ao criar uma nova instância da classe. No exemplo acima, usamos number como tipo. Você pode usar outros tipos como string, boolean ou até mesmo criar sua própria classe ou interface para ser usada como tipo.


````typescript
import Pilha from './Pilha';

interface Pessoa {
  nome: string;
  idade: number;
}

const pilhaDePessoas = new Pilha<Pessoa>();

const pessoa1 = { nome: 'João', idade: 25 };
const pessoa2 = { nome: 'Maria', idade: 30 };

pilhaDePessoas.empilhar(pessoa1);
pilhaDePessoas.empilhar(pessoa2);

console.log(pilhaDePessoas.olhar()); // Saída: { nome: 'Maria', idade: 30 }

````
