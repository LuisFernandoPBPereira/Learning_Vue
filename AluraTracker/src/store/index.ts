import type IProjeto from "@/interfaces/IProjeto";
import type Estado from "@/interfaces/Estado";
import type { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import type { INotificacao } from "@/interfaces/INotificacao";

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state:{
        projetos: [],
        notificacoes: []
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
        [NOTIFICAR](state: any, novaNotificacao: INotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao);

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter((notificacao: { id: number; }) => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    }
});

export function useStore() : Store<Estado>{
    return vuexUseStore(key)
}