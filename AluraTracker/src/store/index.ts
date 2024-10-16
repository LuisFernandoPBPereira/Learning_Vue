import type IProjeto from "@/interfaces/IProjeto";
import type Estado from "@/interfaces/Estado";
import type { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, DEFINIR_PROJETO, DEFINIR_TAREFAS, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import type { INotificacao } from "@/interfaces/INotificacao";
import { ALTERAR_PROJETO, CADASTRAR_PROJETOS, OBTER_PROJETOS, OBTER_TAREFAS, REMOVER_PROJETO } from "./tipo-acoes";
import http from "@/http"
import type ITarefa from "@/interfaces/ITarefa";

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state:{
        tarefas: [],
        projetos: [],
        notificacoes: [] as INotificacao[]
    },
    mutations:{
        [ADICIONA_PROJETO](state : any, nomeDoProjeto: string){            
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto

            state.projetos.push(projeto);
        },
        [ALTERA_PROJETO](state : any, projeto: IProjeto){
            const index = state.projetos.findIndex((proj: { id: string; }) => proj.id == projeto.id)
            state.projetos[index] = projeto;
        },
        [EXCLUIR_PROJETO](state: any, projetoId: string){
            state.projetos = state.projetos.filter((proj: { id: string; }) => proj.id != projetoId)
        },
        [DEFINIR_PROJETO](state: any, projetos: IProjeto[]){
            state.projetos = projetos
        },
        [NOTIFICAR](state: any, novaNotificacao: INotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao);
            
            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter((notificacao: { id: number; }) => notificacao.id != novaNotificacao.id)
            }, 3000)
        },
        [DEFINIR_TAREFAS](state: any, tarefas: ITarefa[]){
            state.tarefas = tarefas
        },
    },
    actions: {
        [OBTER_PROJETOS]({ commit } : any){
            http.get('projetos')
                .then(resposta => commit(DEFINIR_PROJETO, resposta.data))
        },
        [CADASTRAR_PROJETOS](contexto : any, nomeDoProjeto : string){
            return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ALTERAR_PROJETO](contexto : any, projeto : IProjeto){
            return http.put(`/projetos/${projeto.id}`, projeto)
        },
        [REMOVER_PROJETO]({commit} : any, idProjeto : string){
            return http.delete(`/projetos/${idProjeto}`)
            .then(() => commit(EXCLUIR_PROJETO, idProjeto))
        },
        [OBTER_TAREFAS]({ commit } : any){
            http.get('tarefas')
                .then(resposta => commit(DEFINIR_TAREFAS, resposta.data))
        },
    }
});

export function useStore() : Store<Estado>{
    return vuexUseStore(key)
}