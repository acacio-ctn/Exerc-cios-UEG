export class Cilindro{
    #raio
    #altura
    #pi
        constructor(raio,altura){
            this.#raio = raio
            this.#altura = altura
            this.#pi = 3.14
        }
    
    areaLateral(){
        const areaLateral = (2 * this.#pi) * (this.#raio * this.#altura)
        return areaLateral
    }
    areaTotal(){
        const areaTotal = (2 * this.#pi) * this.#raio * (this.#altura + this.#raio)
        return areaTotal
    }
    volume(){
        const volume = (this.#pi * Math.pow(this.#raio,2)) * this.#altura
        return volume
    }
}