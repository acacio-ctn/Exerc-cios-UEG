import { Pilha } from "./pilha.js";

const saida = document.getElementById("output") // saida da verificação
const botao = document.getElementById("btnCheck")

const saidaN = "Não é palíndromo"
const saidaS = "É palíndromo"

function checkPalindromo(){
    const word = document.getElementById("word").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "").toLowerCase().trim() // pegando a palavra digitada na pagina html pelo user
    const palavra = new Pilha() // cria a pilha vazia, aqui o objeto terá um nome aleatorio e com o new criamos a instancia da classe Pilha
    for(let i = 0; i < word.length; i++){ //  i = é o que vai percorrer o vetor, ela será o topo da pilha. sendo i com valor 0 pois iniciará na posição 0 do array, que nesse caso é word pois é o input do user
        palavra.empilhar(word[i]) /* chamamos o método de empilhar da classe para ser aplicado ao objeto Palavra que é a pilha vazia. 
                                    IMPORTANTE: aqui a palavra é a pilha VAZIA. o conteudo é word que é o vetor a ser percorrido, 
                                    e seu indice é o i que começa em 0 e para quando chegar no fim do tamanho do array 
                                    obs: [i] é o indice que quero acessar da string word*/

    }

    for(let i = 0; i < word.length; i++){
        const topo = palavra.acessar() // pega o topo da pilha empilhada com o metodo definido na classe Pilha.js
        palavra.desempilhar() // desempilha a pilha cheia
        if(topo !== word[i]){ // compara o topo obtido com o metodo acessar com o indice da posicao 0 de word
            return saida.innerHTML = saidaN // se os valores forem diferentes retorna que não é palíndromo
        }
}

return saida.innerHTML = saidaS // se for continua o loop e ao terminar retorna que é um palíndromo
}



botao.addEventListener("click", checkPalindromo)


