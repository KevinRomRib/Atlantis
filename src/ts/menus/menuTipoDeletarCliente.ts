import Menu from "../interfaces/menu";

export default class MenuTipoDeletarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log("===============================")
        console.log("Qual você deseja remover?")
        console.log("1 - Titular")
        console.log("2 - Dependente")
    }
}