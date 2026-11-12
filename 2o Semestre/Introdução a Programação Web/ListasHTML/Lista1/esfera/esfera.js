export class Esfera{
    #raio
    #pi
        constructor(raio){
            this.#raio = raio
            this.#pi = 3.14
        }
    areaTotal(){
        const areaTotal = (4 * this.#pi) * Math.pow(this.#raio,2) 
        return areaTotal
    }

    volume(){
        const volume = (4/3 * this.#pi) * Math.pow(this.#raio,3)
        return volume
    }

    diametro(){
        const diametro = 2 * this.#raio
        return diametro
    }
}