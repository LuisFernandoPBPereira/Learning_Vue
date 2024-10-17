import type { INotificacao } from "./INotificacao";
import type IProjeto from "./IProjeto";
import type ITarefa from "./ITarefa";

export default interface Estado{
    projetos: IProjeto[],
    tarefas: ITarefa[],
    notificacoes: INotificacao[]
}