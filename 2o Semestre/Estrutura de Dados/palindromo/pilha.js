export class Pilha{
    #array;
    #topo;

    constructor(){
        this.#array = []
        this.#topo = -1
    }

    estaVazia(){ 
        return this.#topo===-1
    }
        
    obterTamanho(){
        return this.#topo+1
    }
    empilhar(elemento){ // elemento nesse exercicio é o valor inputado pelo usuario no html
        this.#array[++this.#topo] = elemento  // duvida sobre o por que do "= elemento". Aqui atribui-se o valor do que sera empilhado que nesse caso é o valor do usuario. Se nao ele apenas empilharia nada e ficaria como valor undefined
    }
    acessar(){ // está acessando o topo da pilha
        if(this.estaVazia()){
            throw new Error("Pilha está vazia.")
        }
       return this.#array[this.#topo] // isso retorna somente o valor do topo da pilha
        
    }

    desempilhar(){
        if(this.estaVazia()){
            throw new Error("Pilha está vazia.")
        }
        this.#topo-- //subtracão vai desempilhar
    }

    limpar(){
        this.#topo = -1
        this.#array = []
    }
}