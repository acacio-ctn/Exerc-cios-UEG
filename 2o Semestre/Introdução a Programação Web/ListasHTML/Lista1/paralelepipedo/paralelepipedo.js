export class Paralelepipedo{
    #c
    #l
    #h
        constructor(c,l,h){
            this.#c = c
            this.#l = l
            this.#h= h
        }
    
    areaTotal(){
        const areaTotal = 2 * (this.#c * (this.#l + this.#c) * (this.#h + this.#l) * this.#h)
        return areaTotal
    }

    volume(){
        const volume = (this.#c * this.#l) * this.#h
        return volume
    }

    diagonal(){
        const diagonal = Math.sqrt((Math.pow(this.#h,2) + Math.pow(this.#l,2)) + Math.pow(this.#c,2))
        return diagonal
    }
}