export class Cone{
    #raio
    #altura
    #pi = 3.14
        constructor(raio, altura){
            this.#raio = raio
            this.#altura = altura
        }
    geratriz(){
     const geratriz = Math.sqrt(Math.pow(this.#altura,2) + Math.pow(this.#raio,2))
     return geratriz
    }

    areaLateral(){
        const areaLateral = this.#pi * this.#raio * this.geratriz()
        return areaLateral
    }

    areaTotal(){
        const areaTotal = (this.#pi * this.#raio) * (this.geratriz() + this.#raio)
        return areaTotal 
    }

    volume(){
        const volume = 1/3 * this.#pi * Math.pow(this.#raio,2) * this.#altura
        return volume
    }
}