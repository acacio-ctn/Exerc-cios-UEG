 export class Cubo{
    #aresta
        constructor(aresta){
            this.#aresta = aresta
        }
    
    areaFace(){
       const areaFace = Math.pow(this.#aresta,2)
       return areaFace
    }

    areaLateral(){
        const areaLateral = 4 * Math.pow(this.#aresta,2)
        return areaLateral
    }

    areaTotal(){
        const areaTotal = 6 * Math.pow(this.#aresta,2)
        return areaTotal
    }

    volume(){
        const volume = Math.pow(this.#aresta,3)
        return volume
    }
 }