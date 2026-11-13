export class Pilha{
    #array
    #topo
        constructor(){
            this.#array = []
            this.#topo = -1
        }
    
    estaVazia(){
        return this.#topo === -1
    }
    empilhar(elemento){             // empilhar precisa de algo para empilhar, nesse exercicio é o vetor randomizado.
        this.#array[++this.#topo] = elemento
    }
    desempilhar(){
        if(this.estaVazia()){
            return "Pilha Vazia."
        }                           // desempilhar sempre espera que algo exista para ser desempilhado, por isso não precisa de parâmetro. 
       return this.#array[this.#topo--]
    }

}