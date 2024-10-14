import type { INotificacao } from "./INotificacao";
import type IProjeto from "./IProjeto";

export default interface Estado{
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}