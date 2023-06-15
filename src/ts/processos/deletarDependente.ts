import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class DeletarDependentes extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        this.numeroDoDocumento = this.entrada.receberNumero('Digite o número do documento do usuário que deseja excluir: ')
        this.clientes.forEach(cliente => {
            
            cliente.Dependentes.map(dependente => {
                dependente.Documentos.map(doc => {
                    if(parseInt(doc.Numero) == this.numeroDoDocumento) {
                        let index = this.clientes.indexOf(dependente)
                        cliente.Dependentes.splice(index, 1)
                    }
                })
            })
 
            cliente.Documentos.map(item => {
                if(parseInt(item.Numero) == this.numeroDoDocumento) {
                    let index = this.clientes.indexOf(cliente)
                    this.clientes.splice(index, 1)

                }
            })
        })

        
    }
}