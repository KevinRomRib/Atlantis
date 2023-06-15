import Processo from "../abstracoes/processo";
import MenuTipoEditarCliente from "../menus/menuTipoEditarCliente";
import EditarClienteDependentes from "./editarClienteDependente";
import EditarClienteTitular from "./editarClienteTitular";

export default class TipoEditarCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEditarCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1: // Titular
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break
            case 2: // Dependente
                this.processo = new EditarClienteDependentes()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}