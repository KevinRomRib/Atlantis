export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }
    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }

    public mudaDDD(ddd: string) { return this.ddd = ddd }
    public mudaNumero(numero: string) { return this.numero = numero }
}