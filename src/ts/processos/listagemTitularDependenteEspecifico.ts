import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularDependenteEspecifico extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem')
        this.numeroDoDocumento = this.entrada.receberNumero('Qual é o número do documento do dependente: ')

        this.clientes.map(cli => {
            cli.Dependentes.map(dep => {
                dep.Documentos.map(documento => {
                    if(parseInt(documento.Numero) == this.numeroDoDocumento) {
                        let index = this.clientes.indexOf(cli)
                        console.log('O titular do dependente é: ')
                        this.impressor = new ImpressaorCliente(this.clientes[index])
                        console.log(this.impressor.imprimir())
                    }
                })
            })
        })
    }
}