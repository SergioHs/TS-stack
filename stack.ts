class Pilha<T> {
  private itens: T[];

  constructor() {
    this.itens = [];
  }

  empilhar(item: T): void {
    this.itens.push(item);
  }

  desempilhar(): T | undefined {
    return this.itens.pop();
  }

  olhar(): T | undefined {
    return this.itens[this.itens.length - 1];
  }

  estaVazia(): boolean {
    return this.itens.length === 0;
  }

  tamanho(): number {
    return this.itens.length;
  }

  limpar(): void {
    this.itens = [];
  }
}

// Exemplo de uso da classe Pilha
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
