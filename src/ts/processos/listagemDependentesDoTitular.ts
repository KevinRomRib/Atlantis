import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentesDoTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let titular = this.entrada.receberTexto("Digite o numero de documento do titular")
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                cliente.Documentos.map(item => {
                    if(item.Numero == titular) {
                        let index = this.clientes.indexOf(cliente)
                        this.clientes[index].Dependentes.map(item => {
                            this.impressor = new ImpressaorCliente(item)
                            console.log(this.impressor.imprimir())
                        })
                    }
                })
            } else {
                console.log("Titular inexistente")
            }
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}